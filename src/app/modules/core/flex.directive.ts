import {Directive, Input, OnInit, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[flex]'
})
export class FlexDirective implements OnInit {

  @Input() flex:string;
  @Input() direction:string;

  constructor(private _ref: ElementRef, private _renderer:Renderer) {}

  ngOnInit(): void {
    if (this.direction) {
      this._renderer.setElementStyle(this._ref.nativeElement, 'display', 'flex');
      this._renderer.setElementStyle(this._ref.nativeElement, 'flex-direction', this.direction);

    } else {
      this._renderer.setElementStyle(this._ref.nativeElement, 'flex', this.flex || '1');
    }

  }

}
