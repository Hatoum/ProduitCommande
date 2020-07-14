import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {


  produit: Produit[] = [];
  data: any;

  myProduct: Produit ={
  nom: '',
  prixUnitaire: 0 ,
  quantite: 0
 };



  constructor(private produitService: ProduitService,private http: HttpClient) { }

  ngOnInit() {
  }
  add() {
    this.produitService
    .addProduct(this.myProduct)
    .subscribe(data => {
      this.produit = [ data, ...this.produit ];
    });
  }

  saveFile() {
    const headers = new Headers();
    headers.append('Accept', 'text/plain');
    this.http.get('src/assets/image')
      .toPromise()
      .then(response => this.saveToFileSystem(response));
  }
   saveToFileSystem(response) {
    const contentDispositionHeader: string = response.headers.get('Content-Disposition');
    const parts: string[] = contentDispositionHeader.split(';');
    const filename = parts[1].split('=')[1];
    const blob = new Blob([response._body], { type: 'text/plain' });
    FileSaver.saveAs(blob, filename);
  }
}
