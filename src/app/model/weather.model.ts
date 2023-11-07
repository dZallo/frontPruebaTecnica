export class Weather {
    private _dt: Date;
    private _weatherId: number;
    private _weatherMain: string;
    private _temp: number;
    private _humidity: number;
    private _wind: number;

    constructor(dt: string, weatherId: number, weatherMain: string, temp: number, humidity:number, wind: number) {
        this._dt=new Date(Number(dt)*1000);
        this._weatherId=weatherId;
        this._weatherMain=weatherMain;
        this._temp=Number((temp-273.15).toFixed(1));
        this._humidity=humidity;
        this._wind=wind;
    }

    public get dt(): Date {
        return this._dt;
    }
    public set dt(value: string) {
        this._dt = new Date(Number(value)*1000);;
    }
    public get weatherId(): number {
        return this._weatherId;
    }
    public set weatherId(value: number) {
        this._weatherId = value;
    }
    public get weatherMain(): string {
        return this._weatherMain;
    }
    public set weatherMain(value: string) {
        this._weatherMain = value;
    }
    public get temp(): number {
        return this._temp;
    }
    public set temp(value: number) {
        this._temp = Number((value-273.15).toFixed(1));
    }
    public get humidity(): number {
        return this._humidity;
    }
    public set humidity(value: number) {
        this._humidity = value;
    }
    public get wind(): number {
        return this._wind;
    }
    public set wind(value: number) {
        this._wind = value;
    }
}
