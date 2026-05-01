import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;
    
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string;

    @UpdateDateColumn()
    data: Date;
}