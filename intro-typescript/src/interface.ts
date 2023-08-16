interface Songs{
    id: number,
    name: string,
    year?:number
}

const oseanos :Songs={
    id:0,
    name:"oceans"
}

const rios:Songs={
    id: 2,
    name: "rios"
}
const objeto:{
    id: number,
    name: string,
} ={
    id: 2,
    name: "rios"
}

console.log(oseanos.name);

console.log(rios.id);
