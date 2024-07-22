import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{

  public positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  public position = new FormControl(this.positionOptions[4]);
  public isTooltipDisabled = false;

  public heroes:Hero[] = []

  constructor(private heroesService:HeroesService, private router:Router){}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( heroes => this.heroes = heroes );
  }

  goAdd():void{
    this.router.navigate(['/heroes/new-hero'])
  }

  enableTooltip() {
    this.isTooltipDisabled = false;
  }

  disableTooltip() {
    this.isTooltipDisabled = true;
  }


}
