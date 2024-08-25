let check = false;
let saldoCuenta=30000;

do{
    console.log('Bienvenido: seleccione \n 1. consultar saldo \n2. retirar');
    let opcion = Number(prompt('ingrese la opcion: '));
    switch (opcion){
        case 1 : console.log(`su saldo es ${saldoCuenta}`); break;
        case 2 :{
            let retiro = Number(prompt(`ingrese el valor a retirar`));
            saldoCuenta-=retiro;
            console.log(`su saldo es ${saldoCuenta}`);break;
        }
        case 3: check= true; break;
    }
}while(check != true)
    