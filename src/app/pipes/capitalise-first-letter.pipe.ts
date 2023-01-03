import {Pipe, PipeTransform} from "@angular/core";
import {startCase} from 'lodash';

@Pipe({name: 'capitaliseFirstLetter'})
export class CapitaliseFirstLetterPipe implements PipeTransform {
  transform(value:string): string {
    return startCase(value);
  }
}
