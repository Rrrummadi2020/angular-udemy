import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UriupdateInterceptor } from './uriupdate.interceptor';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { BirdsFilterPipe } from './pipesc/birds.filter.pipe';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TempDrivFormComponent } from './temp-driv-form/temp-driv-form.component';
import { HighLightDirective } from './high-light.directive';
import { ChildRouteComponent } from './child-route/child-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ChildChildComponent } from './child-child/child-child.component';
import { LoginComponent } from './login/login.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AnimationPComponent } from './animation-p/animation-p.component';
import { StoreModule } from '@ngrx/store';
import { couterReducer } from './store/counter.reducer';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    OneComponent,
    TwoComponent,
    BirdsFilterPipe,
    ReactiveFormsComponent,
    TempDrivFormComponent,
    HighLightDirective,
    ChildRouteComponent,
    ChildChildComponent,
    LoginComponent,
    AnimationPComponent,
    CounterControlsComponent,
    CounterOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forRoot({ counter: couterReducer }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: UriupdateInterceptor },
  ],
  bootstrap: [AppComponent],
}) //for all the component one instance i.e., singleton instance throught the app
export class AppModule {}
