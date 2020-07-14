import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit';
import { Commande } from '../models/commande';
import { registerContentQuery } from '@angular/core/src/render3';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  [x: string]: any;
  produits: Produit [] = [];
  myProduct: Produit = {
    nom: '',
    prixUnitaire: 0 ,
    quantite: 0
   };
   myCommand: Commande = {
    DateCmd: '',
    prixTotale: 0,
    montantLigne: 0
   };
   commandes: Commande[] = [];
   produit: Produit[] = [];

  constructor(private produitService: ProduitService ) { }

  ngOnInit() {
    this.getProduits();
  }
   getProduits() {
     this.produitService.findAll()
         .subscribe(produits => this.produits = produits);
   }
   addcommande() {
    const prixU = document.getElementById('prix').innerHTML;
    const QuantiteP = document.getElementById('Quantite').innerHTML;
    const prixL = JSON.parse (prixU ) * JSON.parse (QuantiteP );
    const dateNow: Date = new Date();
    const dateNowStr = this.dateNow.toISOString();
    this.myCommand.montantLigne = prixL;
    this.myCommand.DateCmd = dateNowStr;

    this.produitService.addcommand(this.myCommand)
    .subscribe(data => {
    this.commandes = [ data, ...this.commandes ];
    });
  }

}
