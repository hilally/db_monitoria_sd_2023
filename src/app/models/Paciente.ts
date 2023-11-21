import {Column, JoinTable, ChildEntity} from 'typeorm';
import  Usuario  from './Usuario';
    @ChildEntity()
    export default class Paciente extends Usuario{
        @Column('text')
        medicacao: string;

        @Column('text')
        profissao: string;
}