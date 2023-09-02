import { Pipe, PipeTransform } from "@angular/core";
import { Birds } from "../birds";
@Pipe({
  name: 'birdsFlyable',
  pure: false
})//default pure true
export class BirdsFilterPipe implements PipeTransform {
  transform(birds: Birds[], isFlyable = true) {
    return birds.filter(e => e.flyable == isFlyable);
  }
}
