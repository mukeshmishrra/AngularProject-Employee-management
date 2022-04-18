import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, filterData:any) {
    if(value.length === 0 || filterData === ''){
      return value;
    }
    const records = [];

    for(let user of value){
      if(user['name'] === filterData || user['designation'] === filterData || user['date'] ===filterData ){
       records.push(user)
      }
    }return records;
}}