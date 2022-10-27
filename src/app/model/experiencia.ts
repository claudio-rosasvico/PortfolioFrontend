
export class Experiencia {
    id?: number;
    cargo: String;
    institucionLaboral: String;
    descripcion: String;
    fechaInicio: Date;
    fechaFinal: Date ;
    imagen: String;    
    
    constructor (cargo: String, institucionLaboral: String, descripcion: String, fechaInicio: Date, fechaFinal: Date | undefined, imagen: String | undefined){
        this.cargo = cargo;
        this.institucionLaboral = institucionLaboral;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.imagen = imagen;
    }

}
