import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.css']
})
export class CardMiniComponent implements OnInit {

  @Input()
  photoCover1: string=""
  @Input()
  TextCard1: string=""
  @Input()
  photoCover2: string=""
  @Input()
  TextCard2: string=""
  @Input()
  photoCover3: string=""
  @Input()
  TextCard3: string=""
  @Input()
  photoCover4: string=""
  @Input()
  TextCard4: string=""
  @Input()
  photoCover5: string=""
  @Input()
  TextCard5: string=""
  @Input()
  photoCover6: string=""
  @Input()
  TextCard6: string=""
  ngOnInit(): void {
  }

}
