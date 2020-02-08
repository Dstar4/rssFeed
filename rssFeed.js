let Parser = require('rss-parser')
let parser = new Parser()

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
  'http://www.newyorker.com/feed/tech  '
]

async function getFeed (arr) {
  const data = []
  arr.forEach(source => {
    parser.parseURL(source).then(res => {
      res.items.forEach(item => {
        const shapedItem = {
          creator: item.creator,
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          contentEncoded: item['content:encoded'],
          content: item.content,
          contentSnippet: item.contentSnippet,
          categories: item.categories
        }
        data.push(shapedItem)
      })
      console.log(data)
    })
  })
}
getFeed(sources)
