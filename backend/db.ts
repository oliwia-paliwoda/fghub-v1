import { Client } from 'pg'
import * as dotenv from "dotenv";
dotenv.config({});

async function databaseInit(){

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432
})

await client.connect();

const test = await client.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname='${process.env.DB_NAME}'`);

if(test.rowCount === 0) {
    console.log(`${process.env.DB_NAME} not found, creating database`);
    await client.query(`CREATE DATABASE "${process.env.DB_NAME}";`);
    console.log(`created database`);
    } else {
    console.log(`${process.env.DB_NAME} already exists`);
    }

    await client.end();
}

export default databaseInit;