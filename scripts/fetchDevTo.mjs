import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataFilePath = path.resolve(__dirname, '../src/data/remoteBlogPosts.json')

const API_KEY = 'NUZXxX9ynzigj7q9hLXdXWyn'
const TAGS = 'webdev,marketing,seo,cloud'
const PER_PAGE = 6

async function fetchDevToArticles() {
  try {
    console.log(`Fetching latest Dev.to posts for tags: ${TAGS}...`)
    
    // We fetch public articles matching the requested tags
    // The API key is included here for higher rate limits or if querying private resources
    const response = await axios.get(`https://dev.to/api/articles?tags=${TAGS}&per_page=${PER_PAGE}`, {
      headers: {
        'api-key': API_KEY,
        // Dev.to expects a user-agent to prevent blocks
        'User-Agent': 'AssuredPixel-Build-Script/1.0'
      }
    })

    const articles = response.data.map(article => ({
      id: article.id,
      title: article.title,
      description: article.description,
      // If the API returns a cover_image, use it. Otherwise, use social_image
      coverImage: article.cover_image || article.social_image || null,
      url: article.url,
      readTime: `${article.reading_time_minutes} min read`,
      publishedAt: article.published_at,
      author: {
        name: article.user.name,
        profileImage: article.user.profile_image
      },
      tags: article.tag_list
    }))

    // Ensure directory exists
    const dir = path.dirname(dataFilePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(articles, null, 2))
    console.log(`✅ successfully pulled and saved ${articles.length} posts to remoteBlogPosts.json`)
  } catch (error) {
    console.error('❌ Failed to fetch Dev.to articles:', error.message)
    // Create an empty fallback file so the build doesnt crash
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2))
    }
  }
}

fetchDevToArticles()
