export class Educacion {

    id?: number;
    nivel: String;
    institucion: String;
    localidad: String;
    titulo: String;
    imagen: String;

    constructor(nivel: String, institucion: String, localidad: String, titulo: String, imagen: String){
        this.nivel = nivel;
        this.institucion = institucion;
        this.localidad = localidad;
        this.titulo = titulo;
        this.imagen = imagen;
    }
}
