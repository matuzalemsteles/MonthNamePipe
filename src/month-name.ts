import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name:'month'
})
export class MonthNamePipe implements PipeTransform {
	_months: Array<string> = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  transform(value: number): string {
    return this._months[value];
  }
}