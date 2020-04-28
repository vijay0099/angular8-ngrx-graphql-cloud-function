import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getObject'
})
export class GetObjectPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
