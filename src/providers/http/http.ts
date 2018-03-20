import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  path: string = 'http://172.16.14.136:2222';

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }
  getPersonas() {
    return new Promise(resolve => {
      this.http.get(this.path + '/Persona').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

 addPersona(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.path + '/Persona', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  removePersona(id:number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.path + '/Persona/'+id, { headers: { 'Content-Type': 'application/json' } })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
        alert("se borrara: ("+id+""+")");
    });
  }

  editPersona(data,id) {
    return new Promise((resolve, reject) => {
      this.http.put(this.path + '/Persona/'+id, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      //alert(JSON.stringify(data));
    });
  }

}
