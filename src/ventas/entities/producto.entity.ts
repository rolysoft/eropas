import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('producto')
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nombre: string;
   
    @Column({length: 2})
    genero: string;

    @Column({length: 100})
    color: string;

    @Column({default: false})
    es_oferta: boolean;

    @Column()
    precio: number;

    @Column()
    foto: string;

    @Column({default: 'ACTIVO'})
    estado: string;
}