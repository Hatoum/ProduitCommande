import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'Sidebar', component: SidebarComponent},
  {path: 'produits', component: ProduitComponent},
  {path: 'addProduit', component: AddproduitComponent},
  {path: 'commandes', component: CommandeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
