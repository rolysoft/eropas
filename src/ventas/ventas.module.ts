import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { VentasService } from './services/ventas.service';
import { VentasController } from './controllers/ventas.controller';
import { Producto } from './entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto])
  ],
  providers: [VentasService],
  controllers: [VentasController]
})
export class VentasModule {}
