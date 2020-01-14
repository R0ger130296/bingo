module.exports = {
  development: {
    migrations: { tableName: "knex_migrations" },
    seeds: { tableName: "./base_de_datos/seeds" },
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
<<<<<<< HEAD
      password: "roger130296",
=======
      password: "12345",
>>>>>>> d7a463d5bff5ba056cf411d1800d6492ade85064
      database: "bingo"
    }
  }
};
