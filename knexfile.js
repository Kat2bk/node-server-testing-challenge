// Update with your config settings.



  const configuration = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
}

  module.exports = {
    development: {
      ...configuration,
      connection: {filename: './migrations/parakeets.db3'},
    },
    testing: {
      ...configuration,
      connection: {filename: './migrations/testing.db3'},
    },
  }
