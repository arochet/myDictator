import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleTachePageRoutingModule } from './nouvelle-tache-routing.module';

import { NouvelleTachePage } from './nouvelle-tache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelleTachePageRoutingModule
  ],
  declarations: [NouvelleTachePage]
})
export class NouvelleTachePageModule {}
