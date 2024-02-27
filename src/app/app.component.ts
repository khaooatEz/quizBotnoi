import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'quizBotnoi';

  stars: string[] = [];
  pokeName: string = "";
  typesPoke: any = [];
  statusPoke: any = [];
  fontPoke: any = [];
  backPoke: any = [];

  precess(value : string) {
    const ss = Number(value);    
    this.stars = [];
    for(let i = 1; i <= ss; i++){
      this.stars.push('*'.repeat(i));
    }
    for (let i = ss - 1; i >= 1; i--) {
      this.stars.push('*'.repeat(i));
    }
  }

  data: any[] = [];

  constructor(private dataService: DataService){}
  

  getData(): void{
    this.dataService.getTypespoke().subscribe((data) => {
      this.typesPoke = data['types'];
      this.pokeName = data['name'];
      this.statusPoke = data['stats'];
      this.fontPoke = data['sprites']['front_default'];
      this.backPoke = data['sprites']['back_default'];
    });
  }

  showCard: boolean = false;

  toggleCard(): void {
    this.showCard = !this.showCard;
  }

}
