import {Component, Input} from '@angular/core';
import {CompanyBusinessCard} from "../../models/company-business-card.model";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'company-business-card',
  templateUrl: './company-business-card.component.html',
  styleUrls: ['./company-business-card.component.css']
})
export class CompanyBusinessCardComponent {

  @Input()
  businessCard: CompanyBusinessCard;

  constructor(private companyService: CompanyService) {
    this.businessCard = {_id: ``, name: ``};
  }

  calculate(): void {
    this.companyService.calculate(this.businessCard._id).subscribe((totalScoreObject: { totalScore: number }) => alert(`${this.businessCard.name} has a total score of: ${totalScoreObject.totalScore}`));
  }
}
