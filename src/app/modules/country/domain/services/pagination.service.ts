import {Injectable} from '@angular/core';
import {PaginationModel} from "../models/pagination.model";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() {
  }

  /**
   * Returns maximum number of pages.
   * @param dataLength
   * @param maximumPerPage
   */
  maximumNumberOfPages(dataLength: number, maximumPerPage: number): number {
    return Math.ceil(dataLength / maximumPerPage);
  }

  /**
   * Returns an array of Page objects to use in the pagination controls.
   */
  createPageArray(currentPage: number, itemsPerPage: number, totalItems: number, paginationRange: number): PaginationModel[] {
    // paginationRange could be a string if passed from attribute, so cast to number.
    paginationRange = +paginationRange;
    let pages: PaginationModel[] = [];

    // Return 1 as default page number
    // Make sense to show 1 instead of empty when there are no items
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);

    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;

    let ellipsesNeeded = paginationRange < totalPages;
    let index = 1;

    while (index <= totalPages && index <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(index, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = (index === 2 && (isMiddle || isEnd));
      let closingEllipsesNeeded = (index === paginationRange - 1 && (isMiddle || isStart));
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        // We'll indicate with three dots that we have many more pages.
        label = '...';
      } else {
        label = pageNumber;
      }
      pages.push({
        label: label,
        value: pageNumber,
      });
      index++;
    }

    return pages;
  }

  /**
   * Given the position in the sequence of pagination links [index],
   * figure out what page number corresponds to that position.
   */
  private calculatePageNumber(index: number, currentPage: number, paginationRange: number, totalPages: number): number {
    let halfWay = Math.ceil(paginationRange / 2);
    if (index === paginationRange) {
      return totalPages;
    } else if (index === 1) {
      return index;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + index;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + index;
      } else {
        return index;
      }
    } else {
      return index;
    }
  }
}
