import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {Settings} from "../../utils/settings.enum";
import {ApiActions, ApiFields} from "../../utils/api-utils";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Criteria} from "../../models/criteria.model";

const CRITERIA: string = 'criteria';

@Component({
  selector: 'criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

  @Input()
  settings: Settings;
  @Input()
  isAdmin: boolean;
  fields: ApiFields[];
  mainForm: FormGroup;

  constructor(private settingsService: SettingsService) {
    this.settings = Settings.PLACEHOLDER;
    this.isAdmin = false;
    this.fields = Object.values(ApiFields);
    this.mainForm = new FormGroup({
      'criteria': new FormArray([])
    });
  }

  ngOnInit() {
    this.fields = Object.values(ApiFields);
    this.settingsService.getAll(ApiActions.GET_ALL, this.settings).subscribe((criteria: { [key: string]: Criteria }) => {
      const fieldValuePairs: { [key: string]: FormControl }[] = this.fields.map(field => {
        const fieldValuePair: { [key: string]: FormControl } = {};
        fieldValuePair[field] = new FormControl(criteria[this.settings][field]);
        return fieldValuePair;
      });
      for (let fieldValuePair of fieldValuePairs) {
        (<FormArray>this.mainForm.get(CRITERIA)).push(new FormGroup(fieldValuePair));
      }
    });
  }

  getControls() {
    return (this.mainForm.get(CRITERIA) as FormArray).controls;
  }

  set(fieldValuePair: { [key: string]: number }): void {
    const field: string = Object.getOwnPropertyNames(fieldValuePair)[0];
    this.settingsService.set(this.settings, field as ApiFields, fieldValuePair[field] ?? 0, this.isAdmin).subscribe((response: boolean) => alert(response ? `Success!` : `Unauthorised action! Please contact an admin`));
  }
}
