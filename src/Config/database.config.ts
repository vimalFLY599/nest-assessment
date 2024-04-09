import { TypeOrmModule } from '@nestjs/typeorm';
 
export const devConfig: TypeOrmModule = {
    type: 'mysql',
    host: '10.102.32.196',
    port: 3306,
    username: 'development',
    password: 'Admin@123',
    database: 'final_26',
    entities: [],
    synchronize: false,
}