let Parser = require('rss-parser')
let parser = new Parser()
const router = require('express').Router()
const Content = require('../data/helpers/contentHelper')
const sources = [
  'http://feeds.feedburner.com/readwriteweb',
  'http://www.huffingtonpost.com/feeds/index.xml',
  'http://www.thelifeofluxury.com/feed/',
  'http://www.fool.com/feeds/index.aspx?id=foolwatch&format=rss2',
  'http://www.newyorker.com/feed/books',
  'http://www.newyorker.com/feed/business',
  'http://www.newyorker.com/feed/culture',
  'http://www.newyorker.com/feed/humor',
  'http://www.newyorker.com/feed/news',
  'http://www.newyorker.com/feed/tech  ',
  'http://techcrunch.com/feed/'
]

router.get('/', async (req, res) => {
  let content = []
  sources.forEach(source => {
    let data = getFeed(source)
    content = [...content, data]
  })
  const finish = await Promise.all(content)
  if (finish) {
    res.status(200).json(finish)
  } else {
    res.status(400).json('not finished')
  }
})

router.get('/feed', async (req, res) => {
  const data = await Content.findAll()
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(500).json('error')
  }
})

async function getFeed (source) {
  const data = await parser.parseURL(source)
  Content.save(data)
  return data
}

module.exports = router
