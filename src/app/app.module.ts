// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing imports
import { RouterModule, Routes } from '@angular/router';

// Components for Recipes views
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeImageComponent } from './recipes/recipe-image/recipe-image.component';
import { RecipeColumnComponent } from './recipes/recipe-column/recipe-column.component';
import { RecipeSearchBarComponent } from './recipes/recipe-search-bar/recipe-search-bar.component';

// NavBar and Footer Components
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

// Main Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/index'

// const routes: Routes = [
//
//  { path: '', redirectTo: 'home', pathMatch: 'full' },
//  { path: 'home', component: HomeComponent },
//  { path: 'login', component: LoginComponent },
//  { path: 'register', component: RegisterComponent }
//
//  // authentication demo
//  {
//  {
//
//
//  },
//
//  {
//  path: 'recipes',
//  component: RecipesListComponent,
//  children: childRoutes
//  }
// ]

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
    HttpModule,
    RouterModules.forRoot(routes),
    RecipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
