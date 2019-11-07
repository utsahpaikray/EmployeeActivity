import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperletter'
})
export class UpperletterPipe implements PipeTransform {


    transform(val: string): string {
    let returnString = '';
    const str = 'GrossMarginProfit';
    const sL = str.length;
    let i = 0;
    for (; i < sL; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
          returnString = returnString + str.charAt(i);
    }
    }
    const kk = returnString.toString();
    returnString = '';
    for (i = 0; i <= kk.length - 1; i++) {
      if(i === kk.length-1){
        returnString += kk[i]
      }else{
        console.log(i)
        returnString += kk[i] + '.';
      }


    }
    console.log(returnString);
    return returnString;
  }

}
