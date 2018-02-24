import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { OptionsPage } from '../pages/options/options';
import { InfoPage } from '../pages/info/info';
import { CardcreatePage } from '../pages/cardcreate/cardcreate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Ng2EmojiModule } from 'ng2-emoji';
import { PageDataProvider } from '../providers/page-data/page-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    OptionsPage,
    InfoPage,
    CardcreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ng2EmojiModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    OptionsPage,
    InfoPage,
    CardcreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PageDataProvider
  ]
})
export class AppModule {}
