import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerloadService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    throw new Error('Method not implemented.');
  

  }

  


}
