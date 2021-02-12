import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import {DataUpperCards} from '../model';

@Component({
  selector: 'app-uppercards',
  templateUrl: './uppercards.component.html',
  styleUrls: ['./uppercards.component.css']
})
export class UppercardsComponent implements OnInit {
    @Input('upperCardsObject') upperCardsObject:Partial<DataUpperCards>={};
  constructor() { }

  ngOnInit(): void {
  }

}
