/* import pg from 'pg';

const { Pool } = pg;

const connection = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '060502',
    database: 'funbox_db',
});

export { connection }; */

import pkg from '@prisma/client';
import dotenv from "dotenv";
import EventEmitter from 'events';
dotenv.config();

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const emitter = new EventEmitter()
emitter.setMaxListeners(0)

export default prisma;