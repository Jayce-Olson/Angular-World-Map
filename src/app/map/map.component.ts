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

  ngAfterViewInit() { // Lifecycle hook to make sure the view is initilized before running code to bind events to the svg Path elements
    const country = this.elementRef.nativeElement.querySelectorAll('path');
    
    // Using Render2 to attach event listers because it allows for an efficient way to attach event listers to all countries while
    // also being a platform-indepedent way to manipulate the DOM (Helps with compatablity)
    Array.from(country as NodeListOf<SVGPathElement>).forEach((path: SVGPathElement) => {
      this.renderer.listen(path, 'mouseenter', this.send.bind(this));
      this.renderer.listen(path, 'mouseleave', this.leave.bind(this));
    });
  }

  send(e: MouseEvent){
    const target = e.target as SVGElement; // I had to assert that is was an SVG Element so that I could access ID
    if(target != null){ // Check to make sure target exists (If it doesn't ID will throw an error)
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
    const target = e.target as SVGElement;
    target.style['fill'] = this.originalColor;    
  }
}
