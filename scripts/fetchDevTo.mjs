import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataFilePath = path.resolve(__dirname, '../src/data/remoteBlogPosts.json')

const API_KEY = process.env.DEVTO_API_KEY;

// Strict professional categories we want to pull
const TARGET_TAGS = [
  { tag: 'marketing', display: 'Marketing' },
  { tag: 'seo', display: 'SEO' },
  { tag: 'business', display: 'Business Growth' }
]

const PER_TAG_COUNT = 2

async function fetchDevToArticles() {
  try {
    // Fetching business-focused Dev.to posts...
    
    // Fetch specifically from our target tags in parallel to guarantee professional relevance
    const requests = TARGET_TAGS.map(t => {
      const config = {
        timeout: 10000, // 10s timeout
        headers: {
          'User-Agent': 'AssuredPixel-Build-Script/1.0'
        }
      }
      
      // Only add the api-key header if it exists and isn't "undefined" or empty
      if (API_KEY && API_KEY !== 'undefined' && API_KEY.trim() !== '') {
        config.headers['api-key'] = API_KEY
      }

      return axios.get(`https://dev.to/api/articles?tag=${t.tag}&per_page=${PER_TAG_COUNT}`, config)
        .then(res => ({ data: res.data, category: t.display }))
        .catch(err => {
          console.error(`⚠️ Failed to fetch tag "${t.tag}":`, err.message);
          return { data: [], category: t.display };
        })
    })

    const responses = await Promise.all(requests)
    
    let articles = []
    
    responses.forEach(response => {
      const formattedPosts = response.data.map(article => ({
        id: article.id,
        title: article.title,
        description: article.description,
        coverImage: article.cover_image || article.social_image || null,
        url: article.url,
        readTime: `${article.reading_time_minutes} min read`,
        publishedAt: article.published_at,
        author: {
          name: article.user.name,
          profileImage: article.user.profile_image
        },
        tags: [response.category]
      }))
      articles = [...articles, ...formattedPosts]
    })

    // Sort by most recently published across all three categories
    articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

    const dir = path.dirname(dataFilePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(articles, null, 2))
    // successfully pulled and saved ${articles.length} strictly professional posts
  } catch (error) {
    console.error('❌ Failed to fetch Dev.to articles:', error.message)
    // If we fail, ensure we still have a valid JSON file at least
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2))
    }
  }
}

// Ensure we await the fetch process before exiting
(async () => {
  await fetchDevToArticles()
  process.exit(0) // Explicitly exit with 0 to never block build
})()
