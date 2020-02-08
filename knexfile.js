// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/newsfeed.db3'
    },
    migrations: {
      directory: './src/data/migrations',
      table_name: 'knex_migrations'
    },
    seeds: {
      directory: './src/data/seeds'
    },
    useNullAsDefault: true,
    // debug: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
