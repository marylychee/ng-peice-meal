import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeImageComponent } from './components/recipe-image/recipe-image.component';
import { RecipeColumnComponent } from './components/recipe-column/recipe-column.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RecipeSearchBarComponent } from './components/recipe-search-bar/recipe-search-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeImageComponent,
    RecipeColumnComponent,
    NewUserComponent,
    LogInComponent,
    NavigationBarComponent,
    RecipeSearchBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
