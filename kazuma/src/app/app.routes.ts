import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {path: "form", component: FormComponent, pathMatch: "full" }
];
