class Astronauta{
    /* public id: number;
    public nombre: string;
    public record: string; */

    constructor(
        public readonly id: number,
        public nombre: string,
        private _record: string
    
    ){
    /*     this.id=id,
        this.nombre=nombre,
        this.record=record */
    }


   public recompensa() {
        if (this._record=="artemis") {
            return "la recompensa pos su asaña es 500000"
        }
   }

    set record(records:string){
        this._record=records
    }
    
    get record():string{
        return this._record
    }
    
}

const astro1 = new Astronauta(1,"Ronald","Estacion internacional")

/* console.log(astro1.record); */

astro1.record="artemis"
console.log(astro1.recompensa());