import {Component, OnInit} from '@angular/core';
import {Settings} from "../../../utils/settings.enum";

@Component({
  selector: 'primary',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsArray: Settings[];
  submitted: boolean;

  constructor() {
    this.settingsArray = [Settings.PLACEHOLDER];
    this.submitted = false;
  }

  ngOnInit(): void {
    this.settingsArray = Object.values(Settings).splice(1);
  }
}
