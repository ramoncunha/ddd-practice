export default class Address {
    
    _street: string = "";
    _number: string = "";
    _zip: string = "";
    _city: string = "";

    constructor(street: string, number: string, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._zip} ${this._city}`;
    }

}