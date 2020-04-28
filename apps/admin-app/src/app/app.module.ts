// ANGULAR
import {
    BrowserModule,
    HAMMER_GESTURE_CONFIG
  } from '@angular/platform-browser';
  import { APP_INITIALIZER, NgModule } from '@angular/core';
  import { TranslateModule } from '@ngx-translate/core';
  import { HttpClientModule } from '@angular/common/http';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { GestureConfig, MatProgressSpinnerModule } from '@angular/material';
  import { OverlayModule } from '@angular/cdk/overlay';
  
  // GRAPHQL
  import { GraphQLModule } from './graphql.module';
  
  // ANGULAR in memory
  import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
  
  // Perfect Scroll bar
  import {
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
  } from 'ngx-perfect-scrollbar';
  
  // SVG INLINE
  import { InlineSVGModule } from 'ng-inline-svg';
  
  // ENV
  import { environment } from '@monorepo/shared/environments';
  
  // Hammer JS
  import 'hammerjs';
  
  // NGX Permissions
  import { NgxPermissionsModule } from 'ngx-permissions';
  
  // NGRX
  import { StoreModule } from '@ngrx/store';
  import { EffectsModule } from '@ngrx/effects';
  import { StoreRouterConnectingModule } from '@ngrx/router-store';
  import { StoreDevtoolsModule } from '@ngrx/store-devtools';
  
  // STATE
  import {
    DataAccessCoreModule,
    metaReducers,
    reducers
  } from '@monorepo/shared/data-access-core';
  
  // COMPONENTS
  import { AppComponent } from './app.component';
  
  // ROUTING
  import { AppRoutingModule } from './app-routing.module';
  
  // THEME
  import { ThemeModule } from '@monorepo/admin/ui-theme';
  
  // PARTIALS
  import { PartialsModule } from '@monorepo/shared/ui-partials';
  
  // SERVICES
  import {
    HttpUtilsService,
    LayoutUtilsService,
    TypesUtilsService,
    AuthService,
    SubheaderService,
    DataTableService,
    MenuAsideService,
    MenuHorizontalService,
    MenuConfigService,
    PageConfigService,
    LayoutRefService,
    LayoutConfigService,
    SplashScreenService,
    KtDialogService
  } from '@monorepo/shared/util-services';

  //FireBase
  import { AngularFireModule } from '@angular/fire';
  import { AngularFireAuthModule } from '@angular/fire/auth';
  import { AngularFirestoreModule } from '@angular/fire/firestore';
  import { AngularFireDatabaseModule } from '@angular/fire/database';
  
  // FAKE API
  import { FakeApiService } from '@monorepo/shared/data-access-fake-api';
  
  // AUTH
  import { AuthModule } from '@monorepo/client/feature-auth';
  
  // CONFIG
  import { LayoutConfig } from '@monorepo/admin/util-config';
  
  // Highlight JS
  import { HIGHLIGHT_OPTIONS, HighlightLanguage } from 'ngx-highlightjs';
  import * as typescript from 'highlight.js/lib/languages/typescript';
  import * as scss from 'highlight.js/lib/languages/scss';
  import * as xml from 'highlight.js/lib/languages/xml';
  import * as json from 'highlight.js/lib/languages/json';
  
  // tslint:disable-next-line:class-name
  const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelSpeed: 0.5,
    swipeEasing: true,
    minScrollbarLength: 40,
    maxScrollbarLength: 300
  };
  
  export function initializeLayoutConfig(appConfig: LayoutConfigService) {
    // initialize app by loading default demo layout config
    return () => {
      if (appConfig.getConfig() === null) {
        appConfig.loadConfigs(new LayoutConfig().configs);
      }
    };
  }
  
  export function hljsLanguages(): HighlightLanguage[] {
    return [
      { name: 'typescript', func: typescript },
      { name: 'scss', func: scss },
      { name: 'xml', func: xml },
      { name: 'json', func: json }
    ];
  }
  
  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      environment.isMockEnabled
        ? HttpClientInMemoryWebApiModule.forRoot(FakeApiService, {
            passThruUnknownUrl: true,
            dataEncapsulation: false
          })
        : [],
      NgxPermissionsModule.forRoot(),
      PartialsModule,
      DataAccessCoreModule,
      OverlayModule,
      StoreModule.forRoot(reducers, { metaReducers }),
      EffectsModule.forRoot([]),
      StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
      StoreDevtoolsModule.instrument(),
      AuthModule.forRoot(),
      TranslateModule.forRoot(),
      MatProgressSpinnerModule,
      InlineSVGModule.forRoot(),
      ThemeModule,
      // GRAPHQL
      GraphQLModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireDatabaseModule
    ],
    exports: [],
    providers: [
      AuthService,
      LayoutConfigService,
      LayoutRefService,
      MenuConfigService,
      PageConfigService,
      KtDialogService,
      DataTableService,
      SplashScreenService,
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      },
      {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: GestureConfig
      },
      {
        // layout config initializer
        provide: APP_INITIALIZER,
        useFactory: initializeLayoutConfig,
        deps: [LayoutConfigService],
        multi: true
      },
      {
        provide: HIGHLIGHT_OPTIONS,
        useValue: { languages: hljsLanguages }
      },
      // template services
      SubheaderService,
      MenuHorizontalService,
      MenuAsideService,
      HttpUtilsService,
      TypesUtilsService,
      LayoutUtilsService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}