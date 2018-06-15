import { Component, OnInit } from '@angular/core';
import { MymessageService } from '../mymessage.service';

@Component({
  selector: 'app-mymessages',
  templateUrl: './mymessages.component.html',
  styleUrls: ['./mymessages.component.css']
})
export class MymessagesComponent implements OnInit {

  constructor(public messageService: MymessageService) { }

  ngOnInit() {
  }

}
