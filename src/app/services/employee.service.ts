import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../model/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getAll(): Observable<IEmployee[]> {
        return this.httpClient.get<IEmployee[]>(`${environment.fakeWebApiUrl}`);
    }

    getById(id: number): Observable<IEmployee> {
        return this.httpClient.get<IEmployee>(`${environment.fakeWebApiUrl}/${id}`);
    }

    postSave(data: IEmployee): Observable<any> {
        return this.httpClient.post(`${environment.fakeWebApiUrl}`, data);
    }
}
