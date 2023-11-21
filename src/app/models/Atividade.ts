import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import DiarioGeral from './DiarioGeral';

@Entity('tb_atividades')
class Atividade {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("varchar", { length: 100, nullable: true })
    descricao: string;

//associacao
@ManyToOne(type => DiarioGeral)
@JoinColumn({name: "diariogeral_id", referencedColumnName: "id"})
diariogeral: DiarioGeral; 

}
export default Atividade;