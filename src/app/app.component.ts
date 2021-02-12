import { Component } from '@angular/core';
import {DataUpperCards} from './model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  dataUpperCards:Array<DataUpperCards>=[
    {
      name:"EARNINGS",
      time:"(MONTHLY)",
      price:"$40,000",
      icon:'fas fa-calendar fa-2x text-gray-300',
      colors:
        {
          isBlue:true,
          isGreen:false,
          isTeal:false,
          isOrange:false

        }
      
    },
    {
      name:"EARNINGS",
      time:"(ANNUAL)",
      price:"$215,000",
      icon:'fas fa-dollar-sign fa-2x text-gray-300',
      colors:
        {
          isBlue:false,
          isGreen:true,
          isTeal:false,
          isOrange:false

        }
    },
    {
      name:"TASKS",
      time:"",
      price:"50%",
      icon:'fas fa-clipboard-list fa-2x text-gray-300',
      colors:
        {
          isBlue:false,
          isGreen:false,
          isTeal:true,
          isOrange:false

        }
    },
    {
      name:"Pending Requests",
      time:"",
      price:"18",
      icon:'fas fa-comments fa-2x text-gray-300',
      colors:
        {
          isBlue:false,
          isGreen:false,
          isTeal:false,
          isOrange:true

        }
    }
  ]
}
