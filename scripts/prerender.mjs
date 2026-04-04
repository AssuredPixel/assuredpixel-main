import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// We define our static base routes
const routes = [
  '/',
  '/about',
  '/case-studies',
  '/contact',
  '/blog',
]

// We use regex to extract dynamic routes safely without running Vite's JSX compiler natively
const servicesFile = fs.readFileSync(toAbsolute('../src/data/services.js'), 'utf-8')
const blogFile = fs.readFileSync(toAbsolute('../src/data/blogPosts.js'), 'utf-8')

const extractSlugs = (fileContent) => {
  const slugs = []
  const regex = /slug:\s*['"]([^'"]+)['"]/g
  let match
  while ((match = regex.exec(fileContent)) !== null) {
    slugs.push(match[1])
  }
  return slugs
}

const servicesSlugs = extractSlugs(servicesFile)
const blogSlugs = extractSlugs(blogFile)

servicesSlugs.forEach(slug => routes.push(`/services/${slug}`))
blogSlugs.forEach(slug => routes.push(`/blog/${slug}`))

async function prerender() {
  console.log('Generating Static Pages...')
  // Vite builds the client bundle to `dist/client` and SSR bundle to `dist/server` if we passed correct outDirs
  // In our package.json we did: `vite build` (which defaults to dist) then `vite build --ssr ... --outDir dist/server`. 
  // So client is in `dist`, server is in `dist/server`.
  const templatePath = toAbsolute('../dist/index.html')
  let template = ''
  
  if (fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, 'utf-8')
  } else {
    // maybe it built to dist/client based on vite.config.js?
    const clientPath = toAbsolute('../dist/client/index.html')
    if (fs.existsSync(clientPath)) {
      template = fs.readFileSync(clientPath, 'utf-8')
    } else {
      console.error('Could not find index.html from client build')
      process.exit(1)
    }
  }

  // Import the SSR rendering function
  const { pathToFileURL } = await import('node:url')
  const { render } = await import(pathToFileURL(toAbsolute('../dist/server/entry-server.js')).href)

  for (const url of routes) {
    // Generate context to capture Helmet SEO data
    const helmetContext = {}

    // Render the app for the specific URL
    // Depending on what Vite exported, we call render
    const appHtml = render(url, helmetContext)

    // Extract helmet head tags
    const { helmet } = helmetContext
    const appHead = helmet 
      ? `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
        ` 
      : ''

    // Replace the placeholders in the template
    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--app-head-->`, appHead)

    // Save the file
    // Example: /about -> /dist/about/index.html
    const outDir = toAbsolute(`../dist${url === '/' ? '' : url}`)
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true })
    }

    const outFile = path.resolve(outDir, 'index.html')
    fs.writeFileSync(outFile, html)
    console.log(`pre-rendered: ${outFile}`)
  }

  console.log('Done generating SSG pages.')
}

prerender().catch(e => {
  console.error(e)
  process.exit(1)
})
