import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
  templateUrl: './counter.components.html',
  styles: ` 
  button{
  padding: 5px;
  margin: 5px 10px;
  width: 100px;
  border: 1px solid black;
  border-radius: 15px;
  }`,
})
export class CounterComponent{
counter = 10;

increaseBy(value: number){
    this.counter += value;
}
resetCounter(){
    this.counter = 10;
}}