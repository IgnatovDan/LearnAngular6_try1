import { Component, OnInit, Input } from '@angular/core';
import { MyHero } from '../myhero';

@Component({
  selector: 'app-myhero-detail',
  templateUrl: './myhero-detail.component.html',
  styleUrls: ['./myhero-detail.component.css']
})
export class MyheroDetailComponent implements OnInit {

  @Input() hero: MyHero;

  constructor() {
  }

  ngOnInit() {
  }

}
