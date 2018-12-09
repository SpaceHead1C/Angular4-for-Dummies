import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHover]' // name of tag's attribute
})
export class HoverDirective {
    @HostBinding('class.hovered') isHovered = false;

    @HostListener('mouseenter') onMouseEnter() { // event's handler
        this.isHovered = true;
    }

    @HostListener('mouseleave') onmouseleave() { // event's handler
        this.isHovered = false;
    }
}