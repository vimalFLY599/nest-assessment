import { Entity, Column } from 'typeorm';
 
@Entity('userformentity')
export class userformentity  {
  @Column()
  title: string;
 
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  isGraduate: boolean;

  @Column()
  uuid: string;
}