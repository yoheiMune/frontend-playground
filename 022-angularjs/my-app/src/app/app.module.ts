import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: '', component: IndexComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
