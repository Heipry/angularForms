export class Usuario {
  constructor( 
    public id: number, 
    public name: string, 
    public pwd: string, 
    public email: string,
    public condiciones: boolean, 
    public genero?: string,
    public orientacion?: string,
    public relacion?: string
    
  ) {  } 

}
