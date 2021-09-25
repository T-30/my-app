import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CreatedefectComponent } from './createdefect/createdefect.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeproComponent } from './homepro/homepro.component';
import { LoginComponent } from './login/login.component';
import { MenubarComponent } from './menubar/menubar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menubar', component: MenubarComponent},
  {path: 'homepro', component: HomeproComponent},
  {path: 'createdefect', component: CreatedefectComponent},
  {path: 'board', component: BoardComponent},
  {path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
