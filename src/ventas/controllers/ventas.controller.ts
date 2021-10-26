import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VentasService } from '../services/ventas.service';

@Controller('api/ventas')
export class VentasController {

    constructor(private ventasService: VentasService) 
    {}

    @Get('test')
    test() {
        return { ok: true, msg: 'Hola mundo!'}
    }

    @Get()
    getProductos() {
        return this.ventasService.findAll();
    }

    @Post()
    crearProducto(@Body() body: any) {
        return this.ventasService.create(body);
    }

    @Put(':id')
    editProducto(@Param('id') id: number, @Body() body: any) {
        return this.ventasService.update(id, body);
    }

    @Get(':id')
    getOneProducto(@Param('id') id: number) {
        return this.ventasService.findOne(id);
    }

    @Delete(':id')
    deleteProducto(@Param('id') id: number) {
        return this.ventasService.delete(id);    
    }
}
