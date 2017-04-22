import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ScrollDirective } from './scroll.directive';


export const firebaseConfig = {
    apiKey: 'AIzaSyBwGXuI1GhBkZmC0-Y75pes3ZU7GiuM_Kg',
    authDomain: 'mychat-d11fa.firebaseapp.com',
    databaseURL: 'https://mychat-d11fa.firebaseio.com',
    projectId: 'mychat-d11fa',
    storageBucket: 'mychat-d11fa.appspot.com',
    messagingSenderId: '728842699682'
}

@NgModule({
  declarations: [
    AppComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
