import { Pipe, PipeTransform } from "@angular/core";

// true | canFly = 'Vuela'
// false | canFly = 'No vuela'

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'vuela' | 'no vuela' {
    return value ?
      'vuela'
      : 'no vuela';
  }

}
