import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { AppDataSource } from "../config/config";
import {Task} from '../entities/task.entity'
@Resolver()
export class TaskReslover{
    @Query(() => String)
    hello():string{
        return 'hello'
    }
    @Query(()=>[Task])
    show():Promise<Task[]>{
        return Task.find({})
    }
    @Query(()=>Task,{nullable:true})
    showById(
        @Arg("id",()=>String)
        id:string
    ):Promise<Task|null>{
        return Task.findOneBy({id})
    }
    @Mutation(()=>Task)
    createTask(
        @Arg("title",()=>String)
        title:string,
        @Arg("name",()=>String)
        name:string,
        @Arg("age",()=>Number)
        age:number
    ):Promise<Task>{
        return Task.create({title,name,age,iscompleted:true}).save()
    }
}