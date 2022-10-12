import { Servidor } from "src/servidores/entities/servidor.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('web')
export class Web {
    @PrimaryGeneratedColumn()
    id: number;
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
    @ManyToOne(() => Servidor,(servidor) => servidor.webs)
    @JoinColumn()
    servidor : Servidor;
}
