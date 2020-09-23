import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  public data: string[] = [];
  public getData(): Observable<string[]> {
    return of(this.data);
  }
  public addData(element: string): Observable<void> {
    this.data.push(element);
    return of();
  }
  public deleteItem(element: string): Observable<void> {
    const index: number = this.data.indexOf(element);
    this.data.splice(index, 1);
    return of();
  }

}
