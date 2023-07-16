export interface IResenias {
    sum:number;
    resenia: IResenia[];
}
export interface IResenia {
    _id?: string;
    descripcion:string;
    nombre:string;
    idCancion?:string;
    fecha?:string;
}