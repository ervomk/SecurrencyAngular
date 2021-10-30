import { TestBed } from '@angular/core/testing';

import { CountryAddToStorageService } from './country-add-to-storage.service';
import {CountryModel} from "../models/country.model";
import {LocalStorageService} from "../../../../shared/services/local-storage.service";

describe('SingleCountryAddToStorageService', () => {
  let service: CountryAddToStorageService;
  let mockData: CountryModel = {
    "name": {
      "common": "Malaysia",
      "official": "Malaysia",
      "nativeName": {
        "eng": {
          "official": "Malaysia",
          "common": "Malaysia"
        },
        "msa": {
          "official": "مليسيا",
          "common": "مليسيا"
        }
      }
    },
    "tld": [
      ".my"
    ],
    "cca2": "MY",
    "ccn3": "458",
    "cca3": "MYS",
    "cioc": "MAS",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "MYR": {
        "name": "Malaysian ringgit",
        "symbol": "RM"
      }
    },
    "idd": {
      "root": "+6",
      "suffixes": [
        "0"
      ]
    },
    "capital": [
      "Kuala Lumpur"
    ],
    "altSpellings": [
      "MY"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "languages": {
      "eng": "English",
      "msa": "Malay"
    },
    "translations": {
      "ara": {
        "official": "ماليزيا",
        "common": "ماليزيا"
      },
      "ces": {
        "official": "Malajsie",
        "common": "Malajsie"
      },
      "cym": {
        "official": "Malaysia",
        "common": "Malaysia"
      },
      "deu": {
        "official": "Malaysia",
        "common": "Malaysia"
      },
      "est": {
        "official": "Malaisia",
        "common": "Malaisia"
      },
      "fin": {
        "official": "Malesia",
        "common": "Malesia"
      },
      "fra": {
        "official": "Fédération de Malaisie",
        "common": "Malaisie"
      },
      "hrv": {
        "official": "Malezija",
        "common": "Malezija"
      },
      "hun": {
        "official": "Malajzia",
        "common": "Malajzia"
      },
      "ita": {
        "official": "Malaysia",
        "common": "Malesia"
      },
      "jpn": {
        "official": "マレーシア",
        "common": "マレーシア"
      },
      "kor": {
        "official": "말레이시아",
        "common": "말레이시아"
      },
      "nld": {
        "official": "Maleisië",
        "common": "Maleisië"
      },
      "per": {
        "official": "فدراسیون مالزی",
        "common": "مالزی"
      },
      "pol": {
        "official": "Malezja",
        "common": "Malezja"
      },
      "por": {
        "official": "Malásia",
        "common": "Malásia"
      },
      "rus": {
        "official": "Малайзия",
        "common": "Малайзия"
      },
      "slk": {
        "official": "Malajzia",
        "common": "Malajzia"
      },
      "spa": {
        "official": "Malasia",
        "common": "Malasia"
      },
      "swe": {
        "official": "Malaysia",
        "common": "Malaysia"
      },
      "urd": {
        "official": "ملائیشیا",
        "common": "ملائیشیا"
      },
      "zho": {
        "official": "马来西亚",
        "common": "马来西亚"
      }
    },
    "latlng": [
      2.5,
      112.5
    ],
    "landlocked": false,
    "borders": [
      "BRN",
      "IDN",
      "THA"
    ],
    "area": 330803,
    "demonyms": {
      "eng": {
        "f": "Malaysian",
        "m": "Malaysian"
      },
      "fra": {
        "f": "Malaisienne",
        "m": "Malaisien"
      }
    },
    "flag": "🇲🇾",
    "maps": {
      "googleMaps": "https://goo.gl/maps/qrY1PNeUXGyXDcPy6",
      "openStreetMaps": "https://www.openstreetmap.org/relation/2108121"
    },
    "population": 32365998,
    "gini": {
      "2015": 41.1
    },
    "fifa": "MAS",
    "car": {
      "signs": [
        "MAL"
      ],
      "side": "left"
    },
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/my.png",
      "svg": "https://flagcdn.com/my.svg"
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/my.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/my.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
      "latlng": [
        3.17,
        101.7
      ]
    },
    "postalCode": {
      "format": "#####",
      "regex": "^(\\d{5})$"
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.inject(CountryAddToStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check addToFavorites', () => {
    const spy = spyOn(service, 'setDataToStorage' as any);
    service.addToFavorites(mockData)
    expect(spy).toHaveBeenCalled();
  });

  it('should check removeFromFavorites', () => {
    const spy = spyOn(service, 'returnLocalStorageData').and.returnValue([mockData]);
    const spyStoreData = spyOn(service, 'setDataToStorage' as any);
    service.removeFromFavorites(mockData.cca3);
    expect(spyStoreData).toHaveBeenCalledWith([]);
  });

  it('should check checkIfEntryIsFavorited', () => {
    const spy = spyOn(service, 'returnLocalStorageData').and.returnValue([mockData]);
    expect(service.checkIfEntryIsFavorited(mockData.cca3)).toBe(true);
    expect(service.checkIfEntryIsFavorited('341')).toBe(false);
  });
});
