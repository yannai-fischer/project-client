import {Component, Input, OnInit} from '@angular/core';
import {Criteria} from "../../models/criteria.model";
import {SettingsService} from "../../services/settings.service";
import {Observable} from "rxjs";
import {Settings} from "../../utils/settings.enum";
import {ApiActions, Fields} from "../../utils/api-utils";

@Component({
  selector: 'criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

  @Input()
  settings: Settings = Settings.PLACEHOLDER;
  criteria: Observable<Criteria>;
  fields: Fields[];

  constructor(private settingsService: SettingsService) {
    this.criteria = new Observable<Criteria>();
    this.fields = Object.values(Fields);
  }

  ngOnInit(): void {
    this.criteria = this.settingsService.getAll(ApiActions.GET_ALL, this.settings);
  }

  set(field: Fields, value: number): Observable<boolean> {
    return this.settingsService.set(this.settings, field, value);
  }
}
