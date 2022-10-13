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
    @OneToMany(() => Web, (web) => web.servidor,{
        eager:true  // eager para que cargue las relaciones automaticamente cuando cargo la entidad
    })             // mas que nada pensando en el findOne del servidor
    webs : Web[];
}
