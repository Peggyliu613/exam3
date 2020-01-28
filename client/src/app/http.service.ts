import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  getPets(){
    return this._http.get('/api/pets');
  }
  get1Pet(_id:any){
    return this._http.get(`/api/pet/${_id}`);
  }
  addPet(data:any){
    return this._http.post('/api/pet', data);
  }
  updatePet(id:any, data:any){
    return this._http.put(`/api/update/${id}`, data);
  }
  deletePet(id:any){
    return this._http.delete(`/api/delete/${id}`);
  }
  get1PetbyName(name:any){
    return this._http.get(`/api/petbyname/${name}`);
  }
}
