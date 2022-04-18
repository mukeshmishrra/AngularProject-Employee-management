import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { LeaveCalenderModel } from '../models/leave-calender-model'

@Pipe({
  name: 'leaveCalenderFilter'
})
@Injectable()
export class LeaveCalenderFilterPipe implements PipeTransform {

  leave!:LeaveCalenderModel[];

  transform(items: LeaveCalenderModel[], value: string): any[] {
    if (!items || !value) {
      return items;
    }
    console.log("your search token = "+value);
    return items.filter(e => e.year.toLowerCase().includes(value.toLocaleLowerCase()));
  }
 }
