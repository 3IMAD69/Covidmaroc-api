# Covid19Maroc-API

a simple nodejs api based on [hespress](https://covid.hespress.com/fr) covid page. **Updated immediately**


# How To Use
## Javascript Example
```javascript
fetch("https://www.covid-maroc-api.ml")
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data) // Get all data 
    console.log(data.Cases.NewCases) // Get Last NewCases
  })
  .catch(error => console.log(error))
```
## NodeJS Example
```javascript
request('https://www.covid-maroc-api.ml',(error,response,html)=>{
    Data = JSON.parse(html)
    console.log(Data) 
    console.log(Data.Cases.NewCases) // Get Last NewCases 
  })
```
## Python Example
```python
import requests
response = requests.get("https://www.covid-maroc-api.ml")
print(response.json()) #get all in json format
print(response.json()['Cases']['NewCases']) #get NewCases
print(response.json()['City']['Safi']['NewCases']) #get NewCases of a specific city 
```

## Result Example
```json
{
   "Cases": {
      "NewCases": 9355,
      "TotalCasesConfirmed": 1068941
   },
   "Deaths": {
      "NewDeathCases": 13,
      "TotalDeaths": 15025
   },
   "RecoveryCases": {
      "NewRecovery": 6687,
      "TotalRecovered": 990734
   },
   "Doses": {
      "Dose1": 24626900,
      "Dose2": 23029987,
      "Dose3": 3984519
   },
   "Tests": {
      "Test24h": 35115,
      "TotalTest": 10340933
   },
   "ActiveCases": 63182,
   "CaseFatalityRate": 1.41,
   "CaseRecoveryRates": 92.68,
   "Region": {
      "Casablanca-Settat": {
         "NewCases": 3067,
         "DeathCases": 6
      },
      "Rabat-Salé-Kénitra": {
         "NewCases": 2352,
         "DeathCases": 1
      },
      "Tanger-Tétouan-Al Hoceïma": {
         "NewCases": 1002,
         "DeathCases": 0
      },
      "Marrakech-Safi": {
         "NewCases": 818,
         "DeathCases": 1
      },
      "Fès-Meknès": {
         "NewCases": 817,
         "DeathCases": 1
      },
      "Souss-Massa": {
         "NewCases": 484,
         "DeathCases": 2
      },
      "Béni Mellal-Khénifra": {
         "NewCases": 321,
         "DeathCases": 1
      },
      "Oriental": {
         "NewCases": 238,
         "DeathCases": 0
      },
      "Drâa-Tafilalet": {
         "NewCases": 113,
         "DeathCases": 1
      },
      "Laâyoune-Sakia El Hamra": {
         "NewCases": 61,
         "DeathCases": 0
      },
      "Guelmim-Oued Noun": {
         "NewCases": 58,
         "DeathCases": 0
      },
      "Dakhla-Oued Ed Dahab": {
         "NewCases": 24,
         "DeathCases": 0
      }
   },
   "City": {
      "Tanger-Asilah": {
         "NewCases": 477,
         "DeathCases": 0
      },
      "Tétouan": {
         "NewCases": 151,
         "DeathCases": 0
      },
      "Chefchaouen": {
         "NewCases": 104,
         "DeathCases": 0
      },
      "M'diq-Fnideq": {
         "NewCases": 78,
         "DeathCases": 0
      },
      "Larache": {
         "NewCases": 66,
         "DeathCases": 0
      },
      "Ouezzane": {
         "NewCases": 51,
         "DeathCases": 0
      },
      "Al Hoceïma": {
         "NewCases": 39,
         "DeathCases": 0
      },
      "Fahs Anjra": {
         "NewCases": 36,
         "DeathCases": 0
      },
      "Oujda-Angad": {
         "NewCases": 116,
         "DeathCases": 0
      },
      "Nador": {
         "NewCases": 69,
         "DeathCases": 0
      },
      "Berkane": {
         "NewCases": 29,
         "DeathCases": 0
      },
      "Guercif": {
         "NewCases": 9,
         "DeathCases": 0
      },
      "Taourirt": {
         "NewCases": 7,
         "DeathCases": 0
      },
      "Driouch": {
         "NewCases": 6,
         "DeathCases": 0
      },
      "Jerada": {
         "NewCases": 2,
         "DeathCases": 0
      },
      "Figuig": {
         "NewCases": 0,
         "DeathCases": 0
      },
      "Fès": {
         "NewCases": 513,
         "DeathCases": 0
      },
      "Meknès": {
         "NewCases": 121,
         "DeathCases": 0
      },
      "Taza": {
         "NewCases": 82,
         "DeathCases": 0
      },
      "El Hajeb": {
         "NewCases": 23,
         "DeathCases": 0
      },
      "Moulay Yaâcoub": {
         "NewCases": 23,
         "DeathCases": 0
      },
      "Taounate": {
         "NewCases": 19,
         "DeathCases": 1
      },
      "Sefrou": {
         "NewCases": 16,
         "DeathCases": 0
      },
      "Ifrane": {
         "NewCases": 12,
         "DeathCases": 0
      },
      "Boulemane": {
         "NewCases": 8,
         "DeathCases": 0
      },
      "Salé": {
         "NewCases": 597,
         "DeathCases": 1
      },
      "Skhirate-Témara": {
         "NewCases": 564,
         "DeathCases": 0
      },
      "Kenitra": {
         "NewCases": 424,
         "DeathCases": 0
      },
      "Rabat": {
         "NewCases": 358,
         "DeathCases": 0
      },
      "Sidi Kacem": {
         "NewCases": 202,
         "DeathCases": 0
      },
      "Sidi Slimane": {
         "NewCases": 162,
         "DeathCases": 0
      },
      "Khémisset": {
         "NewCases": 45,
         "DeathCases": 0
      },
      "Khouribga": {
         "NewCases": 147,
         "DeathCases": 0
      },
      "Béni Mellal": {
         "NewCases": 72,
         "DeathCases": 1
      },
      "Fquih Ben Salah": {
         "NewCases": 67,
         "DeathCases": 0
      },
      "Azilal": {
         "NewCases": 27,
         "DeathCases": 0
      },
      "Khénifra": {
         "NewCases": 8,
         "DeathCases": 0
      },
      "Casablanca": {
         "NewCases": 2083,
         "DeathCases": 4
      },
      "El Jadida": {
         "NewCases": 226,
         "DeathCases": 2
      },
      "Settat": {
         "NewCases": 201,
         "DeathCases": 0
      },
      "Mohammédia": {
         "NewCases": 192,
         "DeathCases": 0
      },
      "Nouaceur": {
         "NewCases": 143,
         "DeathCases": 0
      },
      "Benslimane": {
         "NewCases": 105,
         "DeathCases": 0
      },
      "Sidi Bennour": {
         "NewCases": 43,
         "DeathCases": 0
      },
      "Médiouna": {
         "NewCases": 43,
         "DeathCases": 0
      },
      "Berrechid": {
         "NewCases": 31,
         "DeathCases": 0
      },
      "Marrakech": {
         "NewCases": 431,
         "DeathCases": 0
      },
      "Safi": {
         "NewCases": 143,
         "DeathCases": 0
      },
      "El Kelâa des Sraghna": {
         "NewCases": 88,
         "DeathCases": 0
      },
      "Essaouira": {
         "NewCases": 84,
         "DeathCases": 0
      },
      "Rehamna": {
         "NewCases": 66,
         "DeathCases": 0
      },
      "Al Haouz": {
         "NewCases": 3,
         "DeathCases": 0
      },
      "Chichaoua": {
         "NewCases": 2,
         "DeathCases": 1
      },
      "Youssoufia": {
         "NewCases": 1,
         "DeathCases": 0
      },
      "Ouarzazate": {
         "NewCases": 62,
         "DeathCases": 1
      },
      "Zagora": {
         "NewCases": 25,
         "DeathCases": 0
      },
      "Errachidia": {
         "NewCases": 15,
         "DeathCases": 0
      },
      "Tinghir": {
         "NewCases": 7,
         "DeathCases": 0
      },
      "Midelt": {
         "NewCases": 4,
         "DeathCases": 0
      },
      "Agadir Ida-Outanane": {
         "NewCases": 174,
         "DeathCases": 1
      },
      "Inezgane-Aït Melloul": {
         "NewCases": 116,
         "DeathCases": 0
      },
      "Taroudant": {
         "NewCases": 81,
         "DeathCases": 0
      },
      "Tiznit": {
         "NewCases": 69,
         "DeathCases": 0
      },
      "Chtouka-Aït Baha": {
         "NewCases": 35,
         "DeathCases": 1
      },
      "Tata": {
         "NewCases": 9,
         "DeathCases": 0
      },
      "Guelmim": {
         "NewCases": 44,
         "DeathCases": 0
      },
      "Tan-Tan": {
         "NewCases": 9,
         "DeathCases": 0
      },
      "Assa-Zag": {
         "NewCases": 4,
         "DeathCases": 0
      },
      "Sidi Ifni": {
         "NewCases": 1,
         "DeathCases": 0
      },
      "Laâyoune": {
         "NewCases": 50,
         "DeathCases": 0
      },
      "Boujdour": {
         "NewCases": 7,
         "DeathCases": 0
      },
      "Es-Semara": {
         "NewCases": 2,
         "DeathCases": 0
      },
      "Tarfaya": {
         "NewCases": 2,
         "DeathCases": 0
      },
      "Oued Ed-Dahab": {
         "NewCases": 24,
         "DeathCases": 0
      },
      "Aousserd": {
         "NewCases": 0,
         "DeathCases": 0
      }
   }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)
