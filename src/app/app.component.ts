import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { WorldBankApiService as Wbs} from './world-bank-apiservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private wsb: Wbs) {}
  data = {
    name: "",
    capital: "",
    region: "",
    incomeLevel: "",
    latitude: 0,
    longitude: 0
  }

  update(id: String){
      // Task G
      this.wsb.getCountryInfoByTwoLetterId(id).subscribe(
        (data:any) => {
          this.data = data;
        }
      )
  };   

}
