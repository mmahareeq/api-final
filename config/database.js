module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'api-offer'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '1111'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    
  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    
  },
  },
});
