import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheService } from './service/tache.service';

import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './service/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyA_3cPioOODnLAoYun9kOjKQ2GTE5wEgF0",
  authDomain: "mydictator.firebaseapp.com",
  databaseURL: "https://mydictator.firebaseio.com",
  projectId: "mydictator",
  storageBucket: "mydictator.appspot.com",
  messagingSenderId: "241452602168",
  appId: "1:241452602168:web:cb22da8fc902b5605ba7cd"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TacheService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
