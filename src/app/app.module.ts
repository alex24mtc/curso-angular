import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Component1Component } from './components/component1/component1.component';

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyBstVZunDSDMtfZ_capJJ_xOi82uAT7wqQ",
  authDomain: "angular-7a917.firebaseapp.com",
  projectId: "angular-7a917",
  storageBucket: "angular-7a917.appspot.com",
  messagingSenderId: "409498304481",
  appId: "1:409498304481:web:72bf6995d72c19d531dca0",
  measurementId: "G-X4PB5GBSR3"

};

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
