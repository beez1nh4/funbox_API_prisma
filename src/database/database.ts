import pg from 'pg';

const { Pool } = pg;

/* const connection = new Pool ({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
}); */

const connection = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '060502',
    database: 'funbox_db',
});

export { connection };