import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzTableModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzTableModule, // Добавили для таблицы
    CommonModule // Добавили для пайпа async
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}