import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealService {

  private _text!: string;

  constructor() {
    console.log('I am real service');
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
