import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { ContactsComponent } from './components/contacts/contacts.component';
import {AuthGuard} from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ActiveContactComponent } from './components/active-contact/active-contact.component';
const routes: Routes=[
  {path:'users', component:UsersComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'contacts', component:ContactsComponent, canActivate:[AuthGuard]},
  {path:'', pathMatch:'full', redirectTo:'users'}

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    ContactsComponent,
    RegisterComponent,
    AddContactComponent,
    ActiveContactComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
