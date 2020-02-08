exports.up = function (knex) {
  return knex.schema
    .createTable('articles', tbl => {
      tbl.increments()
      tbl.string('title').unique()
      tbl.string('creator')
      tbl.string('link')
      tbl.dateTime('pubDate')
      tbl.string('content')
      tbl.string('snippit')
      tbl.string('guid')
      tbl.jsonb('categories')
      tbl.dateTime('isoDate')
      tbl.string('encodedContent')
      tbl.string('author')
      tbl.int('feedId')
    })
    .createTable('feeds', tbl => {
      tbl.increments()
      tbl.string('title').unique()
      tbl.string('description')
      tbl.string('link')
      tbl.dateTime('lastBuildDate')
      tbl.string('feedUrl').unique()
      tbl.jsonb('image')
    })
}
exports.down = function (knex) {}
