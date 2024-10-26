import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { provideHttpClient } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObservablesComponent } from './observables/observables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInceptorService } from './interceptor/auth-inceptor.service';
import { SubjectBehaviorComponent } from './subject-behavior/subject-behavior.component';
import { CountersComponent } from './counters/counters.component';
import { StoreModule } from '@ngrx/store';
import { _counterReducer } from './counters/counters.reducers';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ApiComponent,
    TaskComponent,
    FormComponent,
    ObservablesComponent,
    SubjectBehaviorComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count : _counterReducer})  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    {provide : HTTP_INTERCEPTORS, useClass: AuthInceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
