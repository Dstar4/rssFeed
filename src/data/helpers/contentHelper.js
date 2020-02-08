const knex = require('../db-config')
// const knex = require('knex')
const Feed = require('../helpers/feedHelper')
var knexnest = require('knexnest')
module.exports = { save, findAll }

async function save (arr) {
  const feed = {
    title: arr.title,
    description: arr.description,
    link: arr.link,
    feed_url: arr.feedUrl,
    image: arr.image
  }
  const feedId = await Feed.save(feed)
  // console.log('feed id here', feedId)
  arr.items.forEach(content => {
    const data = {
      title: content.title,
      creator: content.creator,
      link: content.link,
      pubDate: content.pubDate,
      content: content.content,
      snippit: content.content_snippit,
      guid: content.guid,
      categories: content.categories,
      isoDate: content.isoDate,
      encodedContent: content['content:encoded'],
      author: content.author,
      feedId: feedId
    }
    // console.log('save this content', data)
    knex('articles')
      .insert(data)
      .then(id => {
        return id
      })
      .catch(err => {
        // console.log(err)
      })
  })
}
async function findAll () {
  let sql = knex
    .select(
      //ARTICLE
      'articles.title as _title',
      'articles.creator as _creator',
      'articles.link as _link',
      'articles.pubDate as _pubDate',
      'articles.content as _content',
      'articles.snippit as _snippit',
      'articles.guid as _guid',
      'articles.categories as _categories',
      'articles.isoDate as _isoDate',
      'articles.encodedContent as _encodedContent',
      'articles.author as _author',
      'articles.feedId as _feedId',
      //FEED
      'feeds.title as _feed_title',
      'feeds.description as _feed_description',
      'feeds.link as _feed_link',
      'feeds.lastBuildDate as _feed_lastBuildDate',
      'feeds.feedUrl as _feed_feedUrl',
      'feeds.image as _feed_image'
    )
    .from('articles')
    .innerJoin('feeds', 'articles.feedId', '=', 'feeds.id')

  console.log('here', await knexnest(sql))
  return await knexnest(sql)
}
