import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PaginationService} from "../../services/pagination.service";
import {PaginationModel} from "../../../modules/country/domain/models/pagination.model";
import {PaginationPossibleResults} from "../../../modules/country/domain/mocks/pagination-possible-results.mock";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'scy-pagination',
  templateUrl: './svc-pagination.component.html',
  styleUrls: ['./svc-pagination.component.scss']
})
export class SvcPaginationComponent implements OnInit, OnChanges {

  @Input() dataLength!: number;
  @Input() maximumPerPage!: number;
  @Input() activePage!: number;

  @Output() outputActivatedPage: EventEmitter<number> = new EventEmitter();
  @Output() outputMaxResultsToShow: EventEmitter<number> = new EventEmitter();

  maximumNumberOfPages!: number;
  maximumNumberOfPagesAsArray!: PaginationModel[];
  paginationPossibleResults: number[] = PaginationPossibleResults;

  constructor(
    private paginationService: PaginationService
  ) {
  }

  ngOnInit(): void {
    // Calculates pagination pages.
    this.calculatePaginationPages();
  }

  ngOnChanges() {
    // Calculates pagination pages whenever some input is changed.
    this.calculatePaginationPages();
  }

  /**
   * Calculates pagination pages.
   * Calculatex maximum number of pages and than
   * creates array for pages to render in the view.
   */
  calculatePaginationPages(): void {
    this.maximumNumberOfPages = this.paginationService.maximumNumberOfPages(this.dataLength, this.maximumPerPage);
    this.maximumNumberOfPagesAsArray = this.paginationService.createPageArray(this.activePage, this.maximumPerPage, this.dataLength, environment.PAGINATION_PAGE_COUNT);
  }

  /**
   * Outputs active pagination page number.
   * @param pageNumber
   */
  outputPaginationPageActive(pageNumber: number): void {
    this.outputActivatedPage.next(pageNumber);
  }

  /**
   * Outputs pagination maximum results to show.
   * @param resultCount
   */
  outputPaginationMaxResultsToShow(resultCount: number | string): void {
    this.outputMaxResultsToShow.next(Number(resultCount));
  }
}
