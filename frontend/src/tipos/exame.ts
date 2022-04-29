export type Exame = {
    id_exame: number;
    nome: string;
    coleta: string;
    interpretacao: string;
    
}

export type ExamePage = {
    content: Exame[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}