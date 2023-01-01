import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CompanyBusinessCard} from "../../models/company-business-card.model";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  companyBusinessCards: Observable<CompanyBusinessCard[]>;

  constructor(private companyService:CompanyService) {
    this.companyBusinessCards = new Observable<CompanyBusinessCard[]>();
  }

  ngOnInit(): void {
    this.companyBusinessCards = this.companyService.getAll();
  }
}
