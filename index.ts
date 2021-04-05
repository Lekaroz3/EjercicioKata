let ciudades: {nombreCiudad: string, preciosPescados:{vieiras:number,pulpo:number, centollo:number}, distanciaKm:number}[] =  [
    {
        nombreCiudad: "MADRID",
        preciosPescados: 
            {
                vieiras: 500,
                pulpo: 0,
                centollo: 450
            }
        ,
        distanciaKm: 800
    },
    {
        nombreCiudad: "BARCELONA",
        preciosPescados: 
            {
                vieiras: 450,
                pulpo: 120,
                centollo: 0
            }
        ,
        distanciaKm: 1100
    },
    {
        nombreCiudad: "LISBOA",
        preciosPescados: 
            {
                vieiras: 600,
                pulpo: 100,
                centollo: 500
            }
        ,
        distanciaKm: 600
    }
];

function obtenerMejorDestino(listaPescados:any[]){

    let pesoTotalPescados: number = 0;

    listaPescados.forEach(function(a){pesoTotalPescados += a.cantidad;});

    if(pesoTotalPescados<0 || pesoTotalPescados>200){
        console.log("Error, la furgoneta solamente puede llevar 200kg y la suma del peso tiene que ser positivo!");
        return "Error, la furgoneta solamente puede llevar 200kg y la suma del peso tiene que ser positivo!";
    }

    let beneficios: {nombreCiudad:string, beneficioTotal:number}[] = [
        {
            nombreCiudad:"madrid",
            beneficioTotal: 0
        },
        {
            nombreCiudad:"barcelona",
            beneficioTotal: 0
        },
        {
            nombreCiudad:"lisboa",
            beneficioTotal: 0
        }

    ];

    listaPescados.forEach(pesc => {
        ciudades.forEach(ciudad => {
            beneficios.filter(ben => ben.nombreCiudad ===ciudad.nombreCiudad.toLowerCase())[0].beneficioTotal += ciudad.preciosPescados[pesc.nombrePescado.toLowerCase()]*pesc.cantidad;
            //beneficios[ciudad.ciudad.toLowerCase()]+= ciudad.precios[pesc.pescado.toLowerCase()]*pesc.cantidad;
        });
        
    });

    ciudades.forEach(ciud => {
        let distanciaKm:number = ciud.distanciaKm;
        let depreciacionPescado = 1-(distanciaKm/100)/100;
        let costeFurgo = 5 + distanciaKm*2;
        //beneficios[ciud.ciudad.toLowerCase()] = beneficios[ciud.ciudad.toLowerCase()]*depreciacion - costeFurgo;

        let beneficioCiudadX:any = beneficios.filter(ben => ben.nombreCiudad ===ciud.nombreCiudad.toLowerCase())[0];
        beneficios.filter(ben => ben.nombreCiudad ===ciud.nombreCiudad.toLowerCase())[0].beneficioTotal = beneficioCiudadX.beneficio*depreciacionPescado - costeFurgo;
    });



    beneficios.sort((a,b)=>{
        if(a.beneficioTotal>b.beneficioTotal){return -1}
        return a.beneficioTotal < b.beneficioTotal ?1:0;
    });

    let respuesta:string = ``;

    beneficios.forEach(ben => {
        respuesta += `Si vas a ${ben.nombreCiudad} tendrias el beneficio de ${ben.beneficioTotal} € \n`
    }); 

    respuesta+= `\n\nVete ${beneficios[0].nombreCiudad} que es donde mas vas a ganar!`;

    //let respuesta:string = `Si vas a Madrid tendrias el beneficio de ${beneficios.madrid} € \nSi vas a Barcelona tendrias el beneficio de ${beneficios.barcelona} € \nSi vas a Lisboa tendrias el beneficio de ${beneficios.lisboa} €`
   // let nums:number[] =[beneficios.madrid,beneficios.barcelona,beneficios.lisboa];
    console.log(respuesta);
}

let pescados: {nombrePescado:string, cantidad: number}[] = [{
        nombrePescado: "VIEIRAS",
        cantidad: 50
    },
    {
        nombrePescado: "PULPO",
        cantidad: 100
    },
    {
        nombrePescado: "CENTOLLO",
        cantidad: 50
    }
    
];

obtenerMejorDestino(pescados);