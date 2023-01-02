import {Component, Input, OnInit} from '@angular/core';
import {Criteria} from "../../models/criteria.model";
import {SettingsService} from "../../services/settings.service";
import {Observable} from "rxjs";
import {Settings} from "../../utils/settings.enum";
import {ApiActions, ApiFields, Fields} from "../../utils/api-utils";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

  @Input()
  settings: Settings = Settings.PLACEHOLDER;
  fields: ApiFields[];
  mainForm: FormGroup;

  constructor(private settingsService: SettingsService, private fb: FormBuilder) {
    this.fields = Object.values(ApiFields);
    this.mainForm = this.fb.group({
      criteria: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    let x:{ [key: string]: FormControl } = {};
    this.fields.forEach((field:string) => x[field] = new FormControl('', [Validators.required]));
    this.fb.group(x);
    this.settingsService.getAll(ApiActions.GET_ALL, this.settings).subscribe((criteria: Criteria) => {
      this.mainForm.patchValue(criteria);
    });
  }

  set(field: ApiFields, value?: number) {
    // return this.settingsService.set(this.settings, field, value ?? -1);
  }
}
