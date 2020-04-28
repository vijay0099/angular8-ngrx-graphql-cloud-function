// ANGULAR
import { Pipe, PipeTransform } from '@angular/core';
// OBJECT-PATH
import * as objectPath from 'object-path';

/**
 * Returns object from parent object
 */
@Pipe({
  name: 'getObject'
})
export class GetObjectPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param value: any
   * @param args: any
   */
  transform(value: any, args?: any): any {
    return objectPath.get(value, args);
  }
}
