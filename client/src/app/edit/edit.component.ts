import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pet = {};
  updatedPet:any = {};
  errorMessage = [];

  constructor(private _httpService:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.findPetFromServer(params['_id']);
    });
  };
  findPetFromServer(id: any) {
    let observable = this._httpService.get1Pet(id);
    observable.subscribe(data => {
      this.updatedPet = data;
    })
  };
  updatePetFromServer(id) {
    this.errorMessage = [];

    let o = this._httpService.get1PetbyName(this.updatedPet.name);
    o.subscribe((data: any) => {
      this.pet = data;
      if (this.pet != null) {
        this.errorMessage.push("duplicated name");
      } else {
        let observable = this._httpService.updatePet(id, this.updatedPet);
        observable.subscribe((data:any) => {
          
          if ('errors' in data){
            console.log(data.errors);
            for (var key in data.errors){
              this.errorMessage.push(data.errors[key].message);
            }
          }else{
            this._router.navigate(['/']);
          }
        })
      }
    })
  };

}
