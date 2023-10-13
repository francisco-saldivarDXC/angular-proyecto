import { Component } from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent {
  array:number[] = [1, 2, 3, 4, 5, 6];
  showModify:boolean = false;
  newNumber:number = 0;

  public buttonClick (){
    this.showModify = !this.showModify;
  }
  public updateNumber (index : number){
    this.array[index] = this.newNumber;
    alert(`Se modificó el indice ${index} del arreglo por el numero ${this.newNumber}; el arreglo quedó ${this.array.toString()}`);
    this.newNumber = 0;
  }

  public delete (index : number){
    if(confirm("Seguro que desea eliminar?"))
      this.array.splice(index, 1);
  }
}
