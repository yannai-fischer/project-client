import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'prettifyField'})
export class PrettifyFieldPipe implements PipeTransform {
  transform(value:string): string {
    return `${(value?.[0].toUpperCase() + value.slice(1).toLowerCase()).replace(/([A-Z])/g, (match) => ` ${match}`) ?? value}`;
  }
}
