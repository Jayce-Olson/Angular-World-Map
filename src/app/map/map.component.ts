// Task F
import { Component, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent {
  @Output() update = new EventEmitter<any>();
  originalColor = "black"
  constructor(private elementRef: ElementRef,  private renderer: Renderer2) {} // I was getting errors using just ElementRef

  send(e: MouseEvent){
    const target = e.target as SVGPathElement; // I had to assert that is was an SVG Element so that I could access ID
    console.log(target.id);
    if(target.tagName === 'path'){ // Check to make sure target exists (If it doesn't ID will throw an error)
      // console.log('Target ID:', target.id);
      this.update.emit(target.id); // Calls parent function and passes the elements id
      this.highlight(target);
    }
  }

  highlight(target: any){ 
    this.originalColor = target.style['fill']; 
    target.style['fill'] = 'pink';
  }

  leave(e: MouseEvent) { // Reverts country color back to black
    const target = e.target as SVGPathElement;
    target.style['fill'] = this.originalColor;    
  }
}
