import {Column, ChildEntity, ManyToMany, JoinTable} from 'typeorm';
import Usuario from './Usuario';
import Paciente from './Paciente';

@ChildEntity()
export default class Profissional extends Usuario{

@Column('int')
 num_cadastro: number;

@Column('int')
carteira_trabalho: number;

@Column('text')
especialidades: string;

//agregacao
@ManyToMany(() => Paciente)
@JoinTable({name : "tb_paciente",
            joinColumn: {name: "profissional_cpf", 
                referencedColumnName: "cpf"}, 
            inverseJoinColumn: {name: "paciente_cpf",
                                referencedColumnName: "cpf"}})
paciente: Paciente[];

}
