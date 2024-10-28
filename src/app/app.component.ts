import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { WorldBankApiService as Wbs} from './world-bank-apiservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, InfoComponent],
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

  async update(id: String){ // This is the second version of this project. In the first I didn't await http calls because I wasn't having problems with it, I did this time so I awaited the calls
      // Task G
      this.data = await this.wsb.getCountryInfoByTwoLetterId(id);
  };   

}
