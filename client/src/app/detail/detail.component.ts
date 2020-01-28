import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pet = {};
  showlikes = true;

  constructor(private _httpService:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.findPetFromServer(params['_id']);
    });
  };
  findPetFromServer(id: any) {
    let observable = this._httpService.get1Pet(id);
    observable.subscribe(data => {
      this.pet = data;
    })
  };
  updatePetFromServer(id) {
    console.log(this.pet);
    let observable = this._httpService.updatePet(id, this.pet);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/']);
    })
  };
  deletePetFromServer(id:any){
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/']);
    })
  };
  likePetFromServer(id){
    this.pet["likes"]+=1;
    let observable = this._httpService.updatePet(id, this.pet);
    observable.subscribe(data => {
      console.log(data);
      this.showlikes = false;
    })
  }
}
