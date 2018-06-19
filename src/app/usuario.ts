export class Usuario {
  constructor(
    public name: string,
    public pwd: string,
    public email: string,
    public condiciones: boolean,
     public pwd2: string,
    public genero?: string,
    public orientacion?: string,
    public relacion?: string 

  ) {  }

}
