import { GeneralFields } from "../shared/app.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity('users')
export class UsersEntity extends GeneralFields {
  @Column({ length: 100 })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}