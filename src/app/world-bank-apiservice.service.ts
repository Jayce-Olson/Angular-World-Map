import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface Data {
  name: string;
  capital: string;
  region: string;
  incomeLevel: string;
  longitude: number;
  latitude: number;
}

@Injectable({
  providedIn: 'root'
})

export class WorldBankApiService {

  

  worldBankTwoLetterIdUrl = 'https://api.worldbank.org/v2/country/';
  data = {
    name: "",
    capital: "",
    region: "",
    incomeLevel: "",
    latitude: 0,
    longitude: 0
  }

  getCountryInfoByTwoLetterId(id: String): Observable<Data> {
    return this.http.get<any>(this.worldBankTwoLetterIdUrl + id + "?format=json").pipe(
      map((response: any) => {
        return {
          name: response[1][0].name,
          capital: response[1][0].capitalCity,
          region: response[1][0].region.value,
          incomeLevel: response[1][0].incomeLevel.value,
          longitude: response[1][0].longitude,
          latitude: response[1][0].latitude,
    } as Data
  }));
  }
  constructor(private http: HttpClient) { }
}

