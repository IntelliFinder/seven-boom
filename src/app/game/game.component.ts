import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private value:any;
  private boom:string;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(({num})=>{
      if (num.indexOf('7')!==-1||num%7 == 0){
        this.boom = 'BOOM!';
      }else {this.boom=num; this.value=num;}

    });

  }
  addToVal(){
    this.router.navigate(['game', parseInt(this.boom)+1])
  }
}
