import { Routes } from "@angular/router";
import { HostComponent } from "./host.component";

export const APP_ROUTES: Routes = [
  { path: 'scenario/:id', component: HostComponent },
];