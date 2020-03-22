import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { globalVariables } from '../globalVariables';
import { WebradioComponent } from './webradio/webradio.component';
import { WebradioFormComponent } from './webradio-form/webradio-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlarmsComponent } from './alarms/alarms.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomepageComponent,
    WebradioComponent,
    WebradioFormComponent,
    AlarmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      {
        path: 'webradios',
        component: WebradioComponent
      },
      {
        path: 'webradios/new',
        component: WebradioFormComponent
      },
      {
        path: 'webradios/:id',
        component: WebradioFormComponent
      },
      {
        path: 'alarms',
        component: AlarmsComponent
      },
    ])
  ],
  providers: [globalVariables],
  bootstrap: [AppComponent]
})
export class AppModule { }
