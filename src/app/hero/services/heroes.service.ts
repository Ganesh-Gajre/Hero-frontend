import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../model/hero.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'
 

@Injectable({
  providedIn: 'root'
})
export class HeroesService 
{

  updateData = new BehaviorSubject(null);
  currentData = this.updateData.asObservable();

  constructor(private _http: HttpClient) { }

  private _refreshNeeded = new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  private heroesUrl: string = 'http://localhost:3000/';
  // private new: string = 'http://localhost:3000/new';
  
  getHeroes (): Observable<Hero[]> {
    return this._http.get<Hero[]>(this.heroesUrl);
  }

  addHeroes(hero): Observable<Hero[]>
  {
      return this._http.post<Hero[]>(this.heroesUrl, hero).pipe(
        tap(
          ()=>{
            this._refreshNeeded.next();
          }
        )
      );
  }

  deleteHero(id): Observable<Hero[]>
  {
    const deleteUrl = `${this.heroesUrl}${id}`
    return this._http.delete<Hero[]>(deleteUrl).pipe(
      tap(
        ()=>{
          this._refreshNeeded.next();
        }
      )
    );
  }
  updateHeroes(hero,id){
    const updateUrl = `${this.heroesUrl}${id}`
    return this._http.put<Hero[]>(updateUrl,hero).pipe(
      tap(
        ()=>{
          this._refreshNeeded.next();
        }
      )
    );
  }

  updateHero(hero)
  {
    this.updateData.next(hero);
    // console.log(this.updateData);
  }
  getData()
  {
    // console.log(this.updateData);
    return this.updateData.value;
    
  }
  setData(){
    this.updateData = new BehaviorSubject(null);
  }
  
}
