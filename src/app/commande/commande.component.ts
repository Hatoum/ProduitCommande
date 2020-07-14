import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Commande } from '../models/commande';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commande: Commande[] = [];
  constructor(private produitService: ProduitService) { }


  ngOnInit() {
    this.getListCommand();
  }
getListCommand(){
  this.produitService.listCmd()
         .subscribe(commandes => this.commande = commandes);

}
}
