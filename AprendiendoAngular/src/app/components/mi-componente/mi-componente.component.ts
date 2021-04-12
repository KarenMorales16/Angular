import  {Component} from '@angular/core';


@Component({
    selector: 'mi-componente',
    templateUrl:'mi-componente.component.html'

            })

export class Micomponente{
    public titulo: String;
    public comentario: string;
    public year: number;
    

    constructor(){
        this.titulo="Hola Mundo ";
        this.comentario="Hola Mundo"
        this.year=2021;
        console.log("Componente mi componente Cargado");
        console.log(this.comentario,this.titulo,this.year);
        
    }
}