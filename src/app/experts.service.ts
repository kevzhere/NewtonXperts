import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Expert } from './expert';
import { Channel } from './channel';
@Injectable({
  providedIn: 'root'
})
export class ExpertsService {

  url = 'https://5b757c7adeca780014ec9f9f.mockapi.io/experts';
  private experts$ = new BehaviorSubject<Expert[]>(null);

  constructor(
    private http: HttpClient
  ) { }

  fetchExperts(): void {
    this.http.get<Expert[]>(this.url)
      .subscribe(experts => this.experts$.next(experts));
  }

  getExperts(): Observable<Expert[]> {
    return this.experts$.asObservable();
  }

  isLoadingHeroes(): Observable<Boolean> {
    return this.getExperts().pipe(
      map(experts => experts == null)
    );
  }
  getLoadedExperts(): Observable<Expert[]> {
    return this.experts$.pipe(
      filter(experts => experts != null)
    );
  }

  findExpert(id: string): Observable<Expert> {
    return this.getLoadedExperts().pipe(
      map(experts => experts.find(expert => expert.id === id))
    );
  }

  // newExpert()

  updateExpert(id: string, expert: Expert) {
    this.http.put(`${this.url}/${id}`, expert)
    .subscribe(
      success => console.log('update successfull', success),
      err => console.log('err', err)
    );
  }

  updateChannel(expertID: string, channelID: string, channel: Channel): void {
    this.http.put(`${this.url}/${expertID}/channels/${channelID}`, channel)
      .subscribe(
        success => console.log('update successfull', success),
        err => console.log('err', err)
      );
  }
}
