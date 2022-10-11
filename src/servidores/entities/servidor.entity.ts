import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servidor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    ip: string;
    @Column()
    estado: string;
}
