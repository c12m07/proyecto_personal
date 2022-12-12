function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();

const config = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "db_personal",
    host: "localhost",
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "db_testeo",
    host: "localhost",
    logging: true,
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "db_production",
    host: "localhost",
    logging: true,
    dialect: "postgres"
  }
}

export default config;