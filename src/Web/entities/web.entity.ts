import { Servidor } from "src/servidores/entities/servidor.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('web')
export class Web {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    consumoCPU: number;
    @Column()
    consumoRAM: number;
    @Column()
    consumoGPU: number;
    @Column()
    consumoHDD: number;
    @Column()
    version: number;
    @ManyToOne(() => Servidor,(servidor) => servidor.webs,{
        onDelete: "CASCADE",  // le especifico que cuando se ejecute un delete, borre las webs en cascada la DB         
    })                      // de usar cascade:true se encargaria typeorm ?
    @JoinColumn()
    servidor : Servidor;
}
