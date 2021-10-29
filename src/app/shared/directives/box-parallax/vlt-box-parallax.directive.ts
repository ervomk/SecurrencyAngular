import {Directive, ElementRef, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Directive({
  selector: '[scyBoxParallax]'
})
export class ScyBoxParallaxDirective {

  private animationSoftness: number = 15;
  private isTouchDevice!: boolean;
  private classBoxElement: string = 'js-scy-box-parallax';

  constructor(private elementRef: ElementRef,
              @Inject(DOCUMENT) private document: any) {
    this.isTouchDevice = this.checkIfDeviceHasTouch();
  }

  /**
   * Returns HTML Element box for animating.
   * @private
   */
  private getAnimationBoxElement(): HTMLElement {
    return this.elementRef.nativeElement.getElementsByClassName(this.classBoxElement)[0];
  }

  /**
   * Returns weather the device has touch input.
   * @private
   */
  private checkIfDeviceHasTouch(): boolean {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  }

  /**
   * Listens to mousemove, calculte animations configs and applies the animation.
   * @param event
   */
  @HostListener('mousemove', ['$event']) mousemove(event: any) {
    if (!this.isTouchDevice) {
      const elemHeight = this.elementRef.nativeElement.offsetHeight;
      const elemWidth = this.elementRef.nativeElement.offsetWidth;
      const calculatedX = event.pageX - this.elementRef.nativeElement.offsetLeft;
      const calculateY = event.pageY - this.elementRef.nativeElement.offsetTop;
      const rotateY = (calculateY - (elemHeight) / 2) / this.animationSoftness;
      const rotateX = (calculatedX - (elemWidth) / 2) / this.animationSoftness;
      const cssStyle = 'transform:rotateX(' + rotateY + 'deg) rotateY(' + rotateX + 'deg);';
      // Finally apply the animation as property style.
      this.getAnimationBoxElement().setAttribute('style', cssStyle);
    }
  }

  /**
   * Removes style attribute when user leaves the box.
   * @param event
   */
  @HostListener('mouseleave', ['$event']) mouseleave(event: any) {
    if (!this.isTouchDevice) {
      this.getAnimationBoxElement().removeAttribute('style');
    }
  }
}
