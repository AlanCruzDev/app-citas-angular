export class Usuario {
    public idUsuario : number = 0;
    public nombre: string = '';
    public telefono: string = '';
    public email: string = '';
    public password: string = '';
    public fecha_creacion ?: string = '';
    public recibe_citas: boolean = false;
    public rol: string = '';
    public negocio_id: number = 0;
    public hora_cierre: string = '';
    public hora_inicio: string = '';
    public activo: boolean = false;
}