import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrueComponent } from './components/true/true.component';
// import {DropdownModule} from 'primeng/dropdown';


const routes: Routes = [

  {
    path:'',
    component:DetailsComponent,
  },
  {
    path:'success',
    component:TrueComponent,
  }
]

@NgModule({
  declarations: [AppComponent, DetailsComponent, TrueComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
