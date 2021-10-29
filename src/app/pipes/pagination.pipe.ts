import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(value: any[], page: number, resultsToShow: number): any {
    if (value) {
      // Slices array from to end position to show different results.
      return [...value.slice(resultsToShow * (page-1), resultsToShow * (page))];
    }
  }
}
