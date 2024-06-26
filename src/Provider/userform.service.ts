import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_form } from 'src/entity/userform.entity';
import { Repository } from 'typeorm';
import{userformInterface} from 'src/Interface/userform.interface';

@Injectable()
export class userformservice {
  constructor(
    @InjectRepository(user_form)
    private userformRepository: Repository<userformInterface>,
  ) {}
create(todo: userformInterface): Promise<userformInterface> {
  
    return this.userformRepository.save(
      this.userformRepository.create(todo)
    );
  }
findAll(): Promise<userformInterface[]> {
    return this.userformRepository.find();
  }
update(id: string, data: any): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .update()
    .set({
      name: data.name
    })
    .where('id = :id', { id })
    .execute()
  }
delete(id: string): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .delete()
    .from(user_form)
    .where('id = :id', { id })
    .execute()
  }
}