import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  getAll(apiActions: ApiActions, settings: Settings): Observable<Criteria> {
    return this.http.get<Criteria>(SettingsService.generateUrl(apiActions, settings));
  }

  set(setting: Settings, field: Fields, value: number): Observable<boolean> {
    const fieldToApi: ApiFields = FIELDS_TO_API_FIELDS.get(field) as ApiFields;
    const payload: { [key: string]: number } = {[fieldToApi]: value};
    return this.http.post<boolean>(SettingsService.generateUrl(ApiActions.SET, setting), payload);
  }

  private static generateUrl(apiActions: ApiActions, settings: Settings): string {
    return `${SERVER_URL}/${apiActions}${SETTINGS_TO_API_SETTINGS.get(settings)}`;
  }
}
