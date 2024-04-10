import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { fd_form } from 'src/entity/fd_form.entity';
import { Repository } from 'typeorm';
import{fd_form_interface} from 'src/Interface/fd_form.interface';


@Injectable()
export class fdformservice {
  constructor(
    @InjectRepository(fd_form)
    private userformRepository: Repository<fd_form_interface>,
  ) {}
create(todo: fd_form_interface): Promise<fd_form_interface> {
  
    return this.userformRepository.save(
      this.userformRepository.create(todo)
    );
  }
findAll(): Promise<fd_form_interface[]> {
    return this.userformRepository.find();
  }
update(id: string, data: any): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .update()
    .set({
      title: data.title
    })
    .where('id = :id', { id })
    .execute()
  }
delete(id: string): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .delete()
    .from(fd_form)
    .where('id = :id', { id })
    .execute()
  }
}