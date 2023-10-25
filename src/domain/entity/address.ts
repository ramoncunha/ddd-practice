export default class Address {
    
    _street: string = "";
    _number: number = 0;
    _zip: string = "";
    _city: string = "";

    constructor(street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
    }

    get street() {
        return this._street;
    }

    get number() {
        return this._number;
    }

    get zip() {
        return this._zip;
    }

    get city() {
        return this._city;
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._zip} ${this._city}`;
    }

}