import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
  
export class BigCardComponent implements OnInit {
  @Input()
    photocard:string=""
    @Input()
    titlecard:string=""
    @Input()
    descricaocard:string=""
    constructor() { }
 
  ngOnInit(): void {

   }

}
