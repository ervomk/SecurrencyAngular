import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  /**
   * Scrolls to body top position.
   */
  scrollBodyToTop(): void {
    scroll({
      top: this.document.body.offsetTop,
      behavior: "smooth"
    });
  }
}
