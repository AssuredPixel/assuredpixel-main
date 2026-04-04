import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataFilePath = path.resolve(__dirname, '../src/data/remoteBlogPosts.json')

const API_KEY = 'NUZXxX9ynzigj7q9hLXdXWyn'

// Strict professional categories we want to pull
const TARGET_TAGS = [
  { tag: 'marketing', display: 'Marketing' },
  { tag: 'seo', display: 'SEO' },
  { tag: 'business', display: 'Business Growth' }
]

const PER_TAG_COUNT = 2

async function fetchDevToArticles() {
  try {
    console.log('Fetching business-focused Dev.to posts...')
    
    // Fetch specifically from our target tags in parallel to guarantee professional relevance
    // This entirely avoids random "devchallenge" or "jokes" popular articles that just happen to use a webdev tag
    const requests = TARGET_TAGS.map(t => 
      axios.get(`https://dev.to/api/articles?tag=${t.tag}&per_page=${PER_TAG_COUNT}`, {
        headers: {
          'api-key': API_KEY,
          'User-Agent': 'AssuredPixel-Build-Script/1.0'
        }
      }).then(res => ({ data: res.data, category: t.display }))
    )

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
        // We override the author's messy tags with our clean, strict business category!
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
    console.log(`✅ successfully pulled and saved ${articles.length} strictly professional posts`)
  } catch (error) {
    console.error('❌ Failed to fetch Dev.to articles:', error.message)
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2))
    }
  }
}

fetchDevToArticles()
