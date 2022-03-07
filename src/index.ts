import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./contants";
import { Post } from "./entities/Post";
import mikroConfig from './mikro-orm.config'

const main = async ()=> {
    const orm = await MikroORM.init(mikroConfig);
    orm.getMigrator().up();
  const post =   orm.em.create(Post, {title: 'My First Post', createdAt: new Date(), updatedAt: new Date()});
  await orm.em.persistAndFlush(post);
} 

main().catch((err)=>console.log(err));