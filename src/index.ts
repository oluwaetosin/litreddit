import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./contants";
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql';

import mikroConfig from './mikro-orm.config'
import { HelloResolver } from "./resolvers/hello";

const main = async ()=> {
    
    const orm = await MikroORM.init(mikroConfig);
    orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false

        })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(4000, ()=>{
        console.log("server started on port 4000");
    });
    // const post =   orm.em.create(Post, {title: 'My First Post', createdAt: new Date(), updatedAt: new Date()});
    // await orm.em.persistAndFlush(post);
} 

main().catch((err)=>console.log(err));