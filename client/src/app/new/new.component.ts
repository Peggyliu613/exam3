import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  pet = {};
  newPet: any = {};
  errorMessage = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }
  get1PetFromServer(name) {
    let observable = this._httpService.get1PetbyName(name);
    observable.subscribe((data: any) => {
      this.pet = data;
    });
  };
  addPetFromServer() {
    this.errorMessage = [];

    let o = this._httpService.get1PetbyName(this.newPet.name);
    o.subscribe((data: any) => {
      this.pet = data;
      if (this.pet != null) {
        this.errorMessage.push("duplicated name");
      } else {
        let observable = this._httpService.addPet(this.newPet);
        observable.subscribe((data: any) => {

          if ('errors' in data) {
            for (var key in data.errors) {
              this.errorMessage.push(data.errors[key].message);
              console.log(this.errorMessage);
            }
          } else {
            this._router.navigate(['/']);
          }
        })
      }
    });
  };

}
