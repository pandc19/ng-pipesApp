import { Pipe, PipeTransform } from "@angular/core";

// jonathan | toggleCase = 'JONATHAN'
// JONATHAN | toggleCase = 'jonathan'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false) {
    return toUpper ?
      value.toUpperCase()
      : value.toLowerCase();
  }

}
