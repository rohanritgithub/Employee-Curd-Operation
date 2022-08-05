import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sgdtoinr'
})
export class SgdtoinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [rate]=args;
    return value * rate;
  }

}
