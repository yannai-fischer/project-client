import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompanyBusinessCard} from "../models/company-business-card.model";
import {ApiActions, SERVER_URL} from "../utils/api-utils";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<CompanyBusinessCard[]> {
    return this.http.get<CompanyBusinessCard[]>(CompanyService.generateUrl(ApiActions.GET_ALL));
  }

  public calculate(id: string): Observable<number> {
    return this.http.get<number>(CompanyService.generateUrl(ApiActions.CALCULATE, id));
  }

  private static generateUrl(apiActions: ApiActions, id?: string): string {
    return `${SERVER_URL}/${apiActions}${id ? `/${id}` : ``}`;
  }
}
