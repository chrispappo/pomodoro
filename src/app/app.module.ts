import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TimePipe} from './time.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {DatePipe} from '@angular/common';
import { ShareUrlComponent } from './share-url/share-url.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, TimePipe, ShareUrlComponent, HeaderComponent
  ],
  exports: [
    TimePipe, MatButtonModule, MatIconModule
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
