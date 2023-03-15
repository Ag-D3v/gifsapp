import { bootstrapApplication  } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter,  withHashLocation, withPreloading } from "@angular/router";
import { GifsRepository } from "@gifs_dom/a-gifs-repository";
import { APP_ROUTES } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";
import { GifsServiceService } from "./app/gifs/infraestructure/gifs-service.service";
import {LOCALE_ID} from '@angular/core';
import localeEs from '@angular/common/locales/es-MX';
import {registerLocaleData} from '@angular/common';
import { provideHttpClient } from "@angular/common/http";

registerLocaleData(localeEs);


bootstrapApplication(AppComponent,{
providers:[
  provideRouter( APP_ROUTES,
  withHashLocation(),
  withPreloading(PreloadAllModules)
  ),
    {provide: LOCALE_ID, useValue: 'es-MX'},
  {provide: GifsRepository, useClass:GifsServiceService },
  provideHttpClient()
]
}).catch( (err)=> console.info(err) )
