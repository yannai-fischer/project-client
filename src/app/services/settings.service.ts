import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Criteria} from "../models/criteria.model";
import {Settings} from "../utils/settings.enum";
import {ApiActions, ApiFields, Fields, FIELDS_TO_API_FIELDS, SERVER_URL} from "../utils/api-utils";

enum ApiSettings {
  DEFAULTS = `Defaults`,
  WEIGHTS = `Weights`
}

const SETTINGS_TO_API_SETTINGS: Map<Settings, ApiSettings> = new Map([
  [Settings.WEIGHTS, ApiSettings.WEIGHTS],
  [Settings.DEFAULTS, ApiSettings.DEFAULTS]]);

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) {
  }

  getAll(apiActions: ApiActions, settings: Settings): Observable<{ [key: string]: Criteria }> {
    return this.http.get<{ [key: string]: Criteria }>(SettingsService.generateUrl(apiActions, settings));
  }

  set(setting: Settings, apiField: ApiFields, value: number, isAdmin: boolean = false): Observable<boolean> {
    const payload: {
      field: ApiFields;
      value: string;
      isAdmin: string;
    } = {field: apiField, value: '' + value, isAdmin: '' + isAdmin};
    const params = new URLSearchParams(payload);
    let x = SettingsService.generateUrl(ApiActions.SET, setting) + `?` + params.toString();
    return this.http.post<boolean>(x, {});
  }

  private static generateUrl(apiActions: ApiActions, settings: Settings): string {
    return `${SERVER_URL}/${apiActions}${SETTINGS_TO_API_SETTINGS.get(settings)}`;
  }
}
