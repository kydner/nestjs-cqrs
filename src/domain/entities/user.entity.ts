import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({
    unique: true,
    length: 30,
  })
  username: string;

  @Column({
    unique: true,
    length: 30,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column({
    nullable: true,
  })
  lastName: string;
}
