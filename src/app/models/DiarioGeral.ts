import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity ('tb_diariogeral')
class DiarioGeral {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    observacoes: string;

    @Column('text')
    impressao: string;

    @Column('text')
    hora: string;

    //@TableInheritance({ column: { type: "varchar", name: "type" } })
}

export default DiarioGeral;