import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover1: string=""
  @Input()
  photoCover2: string=""
  @Input()
  photoCover3: string=""
  @Input()
  photoCover4: string=""
  @Input()
  photoCover5: string=""
  @Input()
  photoCover6: string=""
  @Input()
  photoCover7: string=""
  @Input()
  photoCover8: string=""
  @Input()
  photoCover9: string=""
  constructor() { }

  ngOnInit(): void {
  }

}
