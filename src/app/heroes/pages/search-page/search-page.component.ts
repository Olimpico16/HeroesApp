import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchInput = new FormControl();
  filteredOptions?: Observable<Hero[]>;
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.filteredOptions = this.searchInput.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filter(String(value)))
    );

    this.filteredOptions.subscribe((heroes) => (this.heroes = heroes));
  }

  private _filter(value: string): Observable<Hero[]> {
    const filterValue = value.toLowerCase();
    return this.heroesService
      .getHeroes()
      .pipe(
        map((heroes) =>
          heroes.filter((hero) =>
            hero.superhero.toLowerCase().includes(filterValue)
          )
        )
      );
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value as Hero;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }
}
