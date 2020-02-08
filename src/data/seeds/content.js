exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('articles')
    .del()
    .truncate()
}
