import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPCComponent } from './add-pc/add-pc.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';
import { PcGuard } from './pc.guard';
import { PCsComponent } from './pcs/pcs.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdatePcComponent } from './update-pc/update-pc.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
  { path: "pcs", component: PCsComponent },
  { path: "add-pc", component: AddPCComponent, canActivate: [PcGuard] },
  { path: "updatePC/:id", component: UpdatePcComponent },
  { path: "rechercheParMarque", component: RechercheParMarqueComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "listeMarques", component: ListeMarquesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "", redirectTo: "pcs", pathMatch: "full" },
  { path: 'register', component: RegisterComponent },
  { path: 'verifEmail', component: VerifEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
