import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Term } from "./term.entity";

@Entity()
export class AsColumn {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    columnId: string; 

    @OneToMany(() => Term, (term) => term.column, { cascade: true })
    terms: Term[];

    @Column()
    solution: string;

    @Column()
    isRevealed: boolean;

    @Column()
    revealAllTerms: boolean;

    @Column()
    enableInput: boolean;
}
