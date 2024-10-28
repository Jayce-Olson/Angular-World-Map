import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  // @Input() data!: {
  //   name: string;
  //   capital: string;
  //   incomeLevel: string;
  //   region: string;
  //   longitude: number;
  //   latitude: number;
  // };
  data = {
    name: "",
    capital: "string",
    incomeLevel: "string",
    region:"string",
    longitude: 0,
    latitude:0,
  };
}
