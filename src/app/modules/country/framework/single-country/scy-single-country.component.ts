import {Component, Input, OnInit} from '@angular/core';
import {CountryModel} from "../../domain/models/country.model";

@Component({
  selector: 'scy-single-country',
  templateUrl: './scy-single-country.component.html',
  styleUrls: ['./scy-single-country.component.scss']
})
export class ScySingleCountryComponent implements OnInit {

  @Input() country!: CountryModel;

  constructor() { }

  ngOnInit(): void {
  }

}
