import 'reflect-metadata'
import 'dotenv/config'
import express,{Express} from 'express'
import {ApolloServer} from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { TaskReslover } from './resolvers/task.resolver'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { AppDataSource } from './config/config'
const main=async()=>{
    AppDataSource.initialize()
    const apolloServer=new ApolloServer({
        schema:await buildSchema({
            resolvers:[TaskReslover],
            validate:false

        }),
        plugins:[ApolloServerPluginLandingPageGraphQLPlayground]
    })
    await apolloServer.start()
    const app:Express=express()
      apolloServer.applyMiddleware({ app })
    app.listen(8000,()=>{
      console.log(`runing at ${8000}`)
})
}
main().catch((err)=>console.log(err))


