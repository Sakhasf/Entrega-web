import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
}