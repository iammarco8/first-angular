import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myname = "Marco DUhaney";
  buttonState: boolean = true;
  num1:number = 0;
  num2:number = 0;
  // sum:number = this.num1 + this.num2;
  sum:number = 0;
  oporations: any=[
    {label: 'ADD', value:'+'},
    {label: 'MINUS', value:'-'},
    {label: 'DIVIDE', value:'/'},
    {label: 'MULTIPLY', value:'*'},
    {label: 'CIRCLE', value:'CIRCLE'},
    {label: 'RECTANGLE', value:'RECTANGLE'},
  ];
  selectedOporator: string = '';
  calc(){
    let opVar = this.selectedOporator;
    let retVal: number = 0;
    switch (opVar){
      case'+':
      retVal = Number(this.num1)+Number(this.num2);
      break;
      
      case'-':
      retVal = Number(this.num1)+Number(this.num2);
      break;
      
      case'/':
      retVal = Number(this.num1)+Number(this.num2);
      break;
      
      case'*':
      retVal = Number(this.num1)+Number(this.num2);
      break;

      case'CIRCLE':
      retVal = Number(this.num1) * Number(this.num1)* 3.14;
      break;
      default:
        retVal = 0;        
    }
    this.sum = retVal;
  }
}
