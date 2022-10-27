export class Identidad {

    public id: number;
    public nombre: string;
    public apellido: string;
    public acercaDe: string;
    public profesion: string;
    public imgPerfil: string;
    public imgPortada: string;
    public mail: string;
    public telefono: string;

    constructor (nombre: string, apellido: string, acercaDe: string, profesion: string, imgPerfil: string, imgPortada: string, mail: string, telefono: string) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
        this.profesion = profesion;
        this.imgPerfil = imgPerfil;
        this.imgPortada = imgPortada;
        this.mail = mail;
        this.telefono = telefono;
    }
}
