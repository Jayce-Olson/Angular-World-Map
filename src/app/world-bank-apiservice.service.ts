import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

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

  async getCountryInfoByTwoLetterId(id: String): Promise<Data> { // I made this asynchronous my second time around
    const response: any = await this.http.get(this.worldBankTwoLetterIdUrl + id + "?format=json").toPromise();
    const countryData: Data = {
      name: response[1][0].name,
      capital: response[1][0].capitalCity,
      region: response[1][0].region.value,
      incomeLevel: response[1][0].incomeLevel.value,
      longitude: response[1][0].longitude,
      latitude: response[1][0].latitude,
    };
    return countryData;
  }
  constructor(private http: HttpClient) { }
}

