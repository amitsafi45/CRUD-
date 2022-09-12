import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'
@Entity()
@ObjectType()
export class Task extends BaseEntity{
   @PrimaryGeneratedColumn('uuid')
   @Field(()=>String)
   id!:string
   @CreateDateColumn()
   @Field(()=>String)
   Data!:string
   @Column()
   @Field(()=>String)
   name!:string
    @Column()
    @Field(()=>Number)
    age!:number
   @Column()
   @Field(()=>String)
   title!:string
   @Column()
   @Field(()=>Boolean)
   iscompleted!:boolean
}