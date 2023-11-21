/*import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_usuario')
class Usuario {

 @PrimaryGeneratedColumn() // sempre quando for caso de auto-incrimentável (tipo id) arrumar o negócio de criar um novo id
 a primaryColum e primaryGeneratedColum colum é que a generated gera aleatório

 @Column("varchar", { length: 8 })
 cep: string;
 @Column("varchar", { length: 100 })
 complemento: string;

}

export default Usuario;*/


import {Entity, Column, PrimaryColumn, TableInheritance} from 'typeorm';
@Entity('tb_usuario')
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default abstract class Usuario {
    @PrimaryColumn('text')
    cpf: string;

    @Column('text')
    nome: string;

    @Column('text')
    senha: string;

    @Column('int')
    idade: number;

    @Column('date', {nullable: true})
    data_ultimo_login: Date;

    @Column('text')
    telefone: string;

    @Column('text')
    email: string;

    
}