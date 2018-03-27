import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { FormsModule } from '@angular/forms'

//translation import
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { OptionsPage } from '../pages/options/options';
import { InfoPage } from '../pages/info/info';
import { CardcreatePage } from '../pages/cardcreate/cardcreate';
import { CarddeletePage} from '../pages/carddelete/carddelete';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Ng2EmojiModule } from 'ng2-emoji';
import { CardDataProvider } from '../providers/card-data/card-data';
import { ImageDataProvider } from '../providers/image-data/image-data';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    OptionsPage,
    InfoPage,
    CardcreatePage,
    CarddeletePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ng2EmojiModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    OptionsPage,
    InfoPage,
    CardcreatePage,
    CarddeletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardDataProvider,
    ImageDataProvider
  ]
})
export class AppModule {}
