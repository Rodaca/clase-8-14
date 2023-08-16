class Centro {
    constructor(
        public object_id:number,
        public nombre: string,
        public descripción: string,
        public estado: string,
        public ciudad: string
    ){}
}
const centro1 = new Centro(1, "Centro IT Innovate", "Ofrece cursos de programación y desarrollo web en Medellín.", "Antioquia", "Medellín");
const centro2 = new Centro(2, "Academia CodeTech", "Capacitación en tecnologías de la información en Bogotá.", "Bogotá D.C.", "Bogotá");
const centro3 = new Centro(3, "Instituto DigitalTech", "Formación en programación y sistemas en Cali.", "Valle del Cauca", "Cali");
const centro4 = new Centro(4, "Centro Informático ByteMaster", "Enseñanza de desarrollo de software en Barranquilla.", "Atlántico", "Barranquilla");
const centro5 = new Centro(5, "Escuela TechCode", "Cursos de tecnología y programación en Cartagena.", "Bolívar", "Cartagena");
const centro6 = new Centro(6, "Academia CodeWave", "Especializada en formación en programación en Bucaramanga.", "Santander", "Bucaramanga");
const centro7 = new Centro(7, "Instituto IT Future", "Educación en tecnologías emergentes en Pereira.", "Risaralda", "Pereira");

class Ruta {
    constructor(
        public ObjectId: number,
        public nombre: string,
        public centro: number
    ){}
}

const ruta1 = new Ruta(1, "Ruta Educativa", 2);
const ruta2 = new Ruta(2, "Ruta Tecnológica", 4);
const ruta3 = new Ruta(3, "Ruta Creativa", 6);
const ruta4 = new Ruta(4, "Ruta Emprendedora", 3);
const ruta5 = new Ruta(5, "Ruta Digital", 1);
const ruta6 = new Ruta(6, "Ruta Innovadora", 7);
const ruta7 = new Ruta(7, "Ruta Científica", 5);

class Nivel{
    constructor(
        public objectId:number,
        public nombre:string,
        public ruta:number,
        public duración:number
        ){}
}
const nivel1 = new Nivel(1, "Fundamentos de Programación", 1, 6);
const nivel2 = new Nivel(2, "Desarrollo Web Básico", 2, 8);
const nivel3 = new Nivel(3, "Programación Orientada a Objetos", 3, 10);
const nivel4 = new Nivel(4, "Bases de Datos y SQL", 4, 7);
const nivel5 = new Nivel(5, "Frameworks de Desarrollo", 5, 9);
const nivel6 = new Nivel(6, "Inteligencia Artificial Aplicada", 6, 12);
const nivel7 = new Nivel(7, "Proyecto Final: Aplicación Web Avanzada", 7, 15);

class Camper{
    constructor(
        public objectId:number,
        public nombre:string,
        public típoIdentificacion:string,
        public NroIdentificacion:string,
        public email:string,
        public password:string,
        public level:number,
        public levelState:string,
        public estado:boolean,
        public imagen:string,
        public promedio:number,
        ){}
}

const camper1 = new Camper(1, "Juan Pérez", "Cédula", "123456789", "juan@example.com", "clave123", 4, "en proceso", true, "imagen1.jpg", 85.5);
const camper2 = new Camper(2, "Ana García", "Cédula", "987654321", "ana@example.com", "password456", 2, "completado", true, "imagen2.jpg", 70.0);
const camper3 = new Camper(3, "Luisa Rodríguez", "Pasaporte", "ABCD1234", "luisa@example.com", "secret123", 7, "en proceso", true, "imagen3.jpg", 92.3);
const camper4 = new Camper(4, "Carlos Martínez", "Cédula", "456789123", "carlos@example.com", "contraseña", 5, "completado", true, "imagen4.jpg", 78.9);
const camper5 = new Camper(5, "María López", "Cédula", "567891234", "maria@example.com", "pass123", 3, "en proceso", false, "imagen5.jpg", 60.7);
const camper6 = new Camper(6, "Andrés Ramírez", "Cédula", "345678912", "andres@example.com", "securepwd", 1, "en proceso", true, "imagen6.jpg", 42.0);
const camper7 = new Camper(7, "Laura González", "Cédula", "678912345", "laura@example.com", "clave321", 6, "completado", true, "imagen7.jpg", 88.2);

class Contrato {
    constructor(
        public object_id:number,
        public nombre: string,
        public descripción: string,
        public estado: string,
        public tipoContrato: string,
        public camper: string //en vez de usar  Camper.object_id usaria Camper.NroIdentificacion
    ) 
    {}

    public gestionarContrato(camper:Camper) {
        if (camper.level==7 && camper.levelState=="completado") {
            console.log(`El camper ${camper.nombre} es contratado en ${this.nombre}`);
            this.estado="Contratado"
        }
    }
    
    
    public tipoDeContrato(){
        let cantRemoto:number=0;
        let cantPresencial:number=0;
        if(contrato1.tipoContrato=="remoto"){
            cantRemoto+=1
            console.log(`${camper1.nombre} tiene un tipo de contrato remoto`);
            
        }else{
            cantPresencial+=1
            console.log(`${camper1.nombre} tiene un tipo de contrato presencial`);
        }
        if(contrato2.tipoContrato=="remoto"){
            cantRemoto+=1
            console.log(`${camper2.nombre} tiene un tipo de contrato remoto`);
            
        }else{
            cantPresencial+=1
            console.log(`${camper2.nombre} tiene un tipo de contrato presencial`);
        }
        if(contrato3.tipoContrato=="remoto"){
            cantRemoto+=1
            console.log(`${camper3.nombre} tiene un tipo de contrato remoto`);
            
        }else{
            cantPresencial+=1
            console.log(`${camper3.nombre} tiene un tipo de contrato presencial`);
        }
        if(contrato4.tipoContrato=="remoto"){
            cantRemoto+=1
            console.log(`${camper4.nombre} tiene un tipo de contrato remoto`);
            
        }else{
            cantPresencial+=1
            console.log(`${camper4.nombre} tiene un tipo de contrato presencial`);
        }
        if(contrato5.tipoContrato=="remoto"){
            cantRemoto+=1
            console.log(`${camper5.nombre} tiene un tipo de contrato remoto`);
            
        }else{
            cantPresencial+=1
            console.log(`${camper5.nombre} tiene un tipo de contrato presencial`);
        }
        if(contrato6.tipoContrato=="remoto"){
            cantRemoto+=1
            console.log(`${camper6.nombre} tiene un tipo de contrato remoto`);
            
        }else{
            cantPresencial+=1
            console.log(`${camper6.nombre} tiene un tipo de contrato presencial`);
        }
        if(contrato7.tipoContrato=="remoto"){
            cantRemoto+=1
            console.log(`${camper7.nombre} tiene un tipo de contrato remoto`);
            
        }else{
            cantPresencial+=1
            console.log(`${camper7.nombre} tiene un tipo de contrato presencial`);
        }
        console.log(`la cantida de camper que tiene contrato remoto es ${cantRemoto} y presencial  es ${cantPresencial}`);
        
    }

} 

const contrato1 = new Contrato(1, "Contrato de Desarrollo Web", "Desarrollo de un sitio web corporativo.", "No contratado","remoto", "123456789");
const contrato2 = new Contrato(2, "Contrato de Soporte Técnico", "Mantenimiento y soporte técnico de sistemas.", "No contratado","presencial", "987654321");
const contrato3 = new Contrato(3, "Contrato de Consultoría en Seguridad", "Asesoramiento en ciberseguridad.", "No contratado","presencial", "ABCD1234");
const contrato4 = new Contrato(4, "Contrato de Capacitación en Programación", "Curso intensivo de programación.", "No contratado","remoto", "456789123");
const contrato5 = new Contrato(5, "Contrato de Desarrollo de App Móvil", "Creación de una aplicación móvil.", "No contratado","remoto", "567891234");
const contrato6 = new Contrato(6, "Contrato de Implementación ERP", "Implementación de sistema de planificación empresarial.", "No contratado","presencial", "345678912");
const contrato7 = new Contrato(7, "Contrato de Desarrollo de Juego", "Creación de un videojuego educativo.", "No contratado","remoto", "678912345");









console.log(contrato2.gestionarContrato(camper2));
console.log(contrato1.tipoDeContrato());

