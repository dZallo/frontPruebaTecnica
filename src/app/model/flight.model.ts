export class Flight {
    private _companyName: string;
    private _duration: string;
    private _airportLeave: string;
    private _airportArrive: string;
    private _price: string;

    constructor(companyName: string, duration: string, airportLeave: string, airportArrive: string, price: string) {
        this._companyName = companyName;
        this._duration = duration;
        this._airportLeave = airportLeave;
        this._airportArrive = airportArrive;
        this._price = price;
    }


    public get companyName(): string {
        return this._companyName;
    }
    public set companyName(value: string) {
        this._companyName = value;
    }
    public get duration(): string {
        return this._duration;
    }
    public set duration(value: string) {
        this._duration = value;
    }

    public get airportLeave(): string {
        return this._airportLeave;
    }
    public set airportLeave(value: string) {
        this._airportLeave = value;
    }

    public get airportArrive(): string {
        return this._airportArrive;
    }
    public set airportArrive(value: string) {
        this._airportArrive = value;
    }

    public get price(): string {
        return this._price;
    }
    public set price(value: string) {
        this._price = value;
    }
}
