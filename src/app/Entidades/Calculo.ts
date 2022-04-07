export class Calculo{

    edad1 : number = 0;
    edad2 : number = 0;

    suma : number = 0;
    promedio : number = 0;

    public Calcular (){
        this.CalcularSuma();
        this.CalcularPromedio();

    }

    public CalcularSuma () : number{
        this.suma = this.edad1 + this.edad2;
        return this.suma;
    }
    
    public CalcularPromedio () : number{
        this.promedio = (this.edad1 + this.edad2)/2;
        return this.promedio;
    }

}