export class Habilidad {

    public id?: number;
    
    public nombre: String;
    
    public porcentaje: number;
    
    public imagen: String;

    constructor(nombre: String, porcentaje: number, imagen: String) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imagen = imagen;
        
    }
}
