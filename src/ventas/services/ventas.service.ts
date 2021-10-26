import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';

@Injectable()
export class VentasService {

    constructor(@InjectRepository(Producto) private productoRepo: Repository<Producto>) 
    { }

    findAll() {
        this.productoRepo.find();
    }

    findOne(id: number) {
        return this.productoRepo.findOne(id);
    }

    create(body: any) {
        const newProducto = this.productoRepo.create(body);
        return this.productoRepo.save(newProducto);
    }

    async update(id: number, body: any) {
        const prod = await this.productoRepo.findOne(id);
        this.productoRepo.merge(prod, body);
        return this.productoRepo.save(prod);
    }

    async delete(id: number){
        await this.productoRepo.delete(id);
        return true;
    }
}
