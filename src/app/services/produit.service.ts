import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../models/produit';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/produit';
  apiUrl2 ='http://localhost:3000/commande';

  findAll() {
    return this.http.get<Produit[]>(this.apiUrl);
  }
  addProduct(produit) {
    return  this.http.post<Produit>(this.apiUrl, produit);
  }
  addcommand(commande){
    return this.http.post<Commande>(this.apiUrl2, commande);
  }
  listCmd() {
    return this.http.get<Commande[]>(this.apiUrl2);
  }
  downloadFile(file){
    return this.http.post('http://127.0.0.1/downloadFile',file,{
      responseType : 'blob',
      headers : new HttpHeaders().append('content-type','application/json')
    });
  }
}
