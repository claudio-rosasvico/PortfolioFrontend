export class Proyecto {

    public id?: number;
    public nombre: String;
    public descripcion: String;
    public imagen: String;
    public url: String;

    constructor(nombre: String, descripcion: String, imagen: String, url: String) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.url = url;
    }
}
