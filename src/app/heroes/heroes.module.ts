import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';


import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';

// Modules
import { MaterialModule } from '../material/material.module';

// Pipes
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { HeroIconPipe } from './pipes/hero-icon.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    CardComponent,
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,

    // Pipes
    HeroImagePipe,
    HeroIconPipe,
    ConfirmDialogComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class HeroesModule { }
