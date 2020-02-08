exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('feeds')
    .del()
    .truncate()
}
