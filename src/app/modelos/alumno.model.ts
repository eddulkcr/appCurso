export class Alumno {
    public id: number;
    public nombre: string;
    public appelidos: string;
    public ciudad: string;

    constructor(id: number, nombre: string, apellidos: string, ciudad: string) {
        this.id = id;
        this.nombre = nombre;
        this.appelidos = apellidos;
        this.ciudad = ciudad;
    }
}
