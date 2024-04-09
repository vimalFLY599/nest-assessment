import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userformentity } from 'src/entity/userform.entity';
import { userformController } from '../controller/userform.controller';
import { userformservice } from '../provider/userform.service';
@Module({
  imports: [TypeOrmModule.forFeature([userformentity])],
  controllers: [userformController],
  providers: [userformservice],
})
export class TodosModule {}