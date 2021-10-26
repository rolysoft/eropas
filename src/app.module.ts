import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'eventas',
      password: 'eventa$',
      database: 'eropas',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10
    }), 
    


    VentasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
