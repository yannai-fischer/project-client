import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompanyBusinessCard} from "../models/company-business-card.model";
import {ApiActions, SERVER_URL} from "../utils/api-utils";

const COMPANY_API_PREFIX:string = `Company`;

enum CompanyApiEnum {
  BUSINESS_CARDS = `BusinessCards`,
  SCORE = `ScoreById`
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<CompanyBusinessCard[]> {
    return this.http.get<CompanyBusinessCard[]>(CompanyService.generateUrl(ApiActions.GET_ALL, CompanyApiEnum.BUSINESS_CARDS));
  }

  public calculate(id: string): Observable<{ totalScore: number }> {
    return this.http.get<{ totalScore: number }>(CompanyService.generateUrl(ApiActions.CALCULATE, CompanyApiEnum.SCORE, id));
  }

  private static generateUrl(apiActions: ApiActions, desiredObject:CompanyApiEnum, id?: string): string {
    return `${SERVER_URL}/${apiActions}${COMPANY_API_PREFIX}${desiredObject}${id ? `/${id}` : ``}`;
  }
}
