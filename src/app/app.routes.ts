import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';
import { Component } from '@angular/core';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'states',component:StatesComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',component:NotfoundComponent},
];
