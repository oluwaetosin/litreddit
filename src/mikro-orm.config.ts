import { MikroORM } from "@mikro-orm/core";
import path from "path/posix";
import { __prod__ } from "./contants";
import { Post } from "./entities/Post";

export default {
    migrations: {
        tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
        path: path.join(__dirname,'./migrations'), // path to the folder with migrations
        pathTs: undefined, // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
        glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
      },
    entities: [ Post ],
    dbName: 'lireddit',
    user: 'tosinomotayo',
    password: 'testing',
    debug: !__prod__,
    type: 'postgresql',
    port: 5433,
    allowGlobalContext: true

} as Parameters<typeof MikroORM.init>[0];