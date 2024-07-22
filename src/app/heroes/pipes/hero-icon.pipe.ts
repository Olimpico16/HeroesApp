import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroIcon'
})
export class HeroIconPipe implements PipeTransform {

  transform(hero: Hero): string {
    if( !hero.id && !hero.icon  ){
      return 'assets/no-image.jpg';
    }

    if ( hero.icon ) return hero.icon;

    return `assets/icon/${hero.industry}.jpg`;

  }

}
