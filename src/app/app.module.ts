import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'mainPage', component: MainPageComponent},
  {path: 'uploadPage', component: FileUploadComponent},
  {path: '', redirectTo: '/mainPage', pathMatch: 'full'},
  {path: '**', redirectTo: '/mainPage', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    MainPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
