import { Injectable } from '@angular/core';
import { globalVariables } from '../../globalVariables';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Alarm } from '../models/alarm';
import { BaseResponse } from './baseResponse';

@Injectable({
  providedIn: 'root'
})
export class AlarmsService {
  alarms: Array<Alarm>;

  constructor(private _globalVariables: globalVariables, private http: HttpClient) {  }

  getAlarms(): Observable<Alarm[]> {
    let url = this._globalVariables.BASE_API_URL + "/alarmclocks/";
    return this.http.get<GetAlarmsResponse>(url).pipe(
      map(res => {
        return res.results
      })
    )
  }

  //  PUT /webradios/:id
  updateAlarm(alarm: Alarm): Observable<Alarm> {
    let url = this._globalVariables.BASE_API_URL + "/alarmclocks/" + alarm.id + "/";
    return this.http.put<Alarm>(url, alarm).pipe(
      map(res => {
        console.log(res);
        return res
      })
    )
  }

}

export interface GetAlarmsResponse extends BaseResponse  {
  results: Array<Alarm>;
}
