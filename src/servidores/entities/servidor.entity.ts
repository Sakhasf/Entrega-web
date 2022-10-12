import { Web } from "src/Web/entities/web.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('server')
export class Servidor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    ip: string;
    @Column()
    estado: string;
    @OneToMany(() => Web, (web) => web.servidor)
    webs : Web[];
}
