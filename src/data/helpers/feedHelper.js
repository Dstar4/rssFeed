const db = require('../db-config')

module.exports = { save, findAll }

async function save (content) {
  console.log('content', content.image)
  const data = {
    title: content.title,
    description: content.description,
    link: content.link,
    feedUrl: content.feed_url,
    image: JSON.stringify(content.image)
  }
  // db('feeds')
  //   .insert(data)
  //   .then(feed => {
  //     console.error.log('return else id', feed)
  //     if (feed) {
  //       return feed
  //     }
  //   })
  //   .catch(err => {
  //     console.log('save feed error', err)
  //     return err
  //   })
  console.log('SAVE DATA', data)
  const feed = await db('feeds')
    .where({ title: content.title })
    .first()
  if (feed) {
    return await db('feeds')
      .where({ title: content.title })
      .update(data)
      .then(id => {
        // console.log('if feed id', id)
        return id
      })
      .catch(err => {})
  } else {
    return await db('feeds')
      .where({ title: content.title })
      .insert(data)
      .then(feed => {
        // console.log('else feed id', feed[0])
        return feed[0]
      })
      .catch(err => {})
  }
}

async function findAll () {
  return db('feeds')
}
