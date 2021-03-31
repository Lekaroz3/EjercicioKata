let ciudades: {ciudad: string, precios:{vieiras:number,pulpo:number, centollo:number}, km:number}[] =  [
    {
        ciudad: "MADRID",
        precios: 
            {
                vieiras: 500,
                pulpo: 0,
                centollo: 450
            }
        ,
        km: 800
    },
    {
        ciudad: "BARCELONA",
        precios: 
            {
                vieiras: 450,
                pulpo: 120,
                centollo: 0
            }
        ,
        km: 1100
    },
    {
        ciudad: "LISBOA",
        precios: 
            {
                vieiras: 600,
                pulpo: 100,
                centollo: 500
            }
        ,
        km: 600
    }
];

function calculo(listaPescados:any[]){

    let pesoTotal: number = 0;

    listaPescados.forEach(function(a){pesoTotal += a.cantidad;});

    if(pesoTotal<0 || pesoTotal>200){
        console.log("Error, la furgoneta solamente puede llevar 200kg y la suma del peso tiene que ser positivo!");
        return "Error, la furgoneta solamente puede llevar 200kg y la suma del peso tiene que ser positivo!";
    }

    let beneficios: {ciudad:string, beneficio:number}[] = [
        {
            ciudad:"madrid",
            beneficio: 0
        },
        {
            ciudad:"barcelona",
            beneficio: 0
        },
        {
            ciudad:"lisboa",
            beneficio: 0
        }

    ];

    listaPescados.forEach(pesc => {
        ciudades.forEach(ciudad => {
            beneficios.filter(ben => ben.ciudad ===ciudad.ciudad.toLowerCase())[0].beneficio += ciudad.precios[pesc.pescado.toLowerCase()]*pesc.cantidad;
            //beneficios[ciudad.ciudad.toLowerCase()]+= ciudad.precios[pesc.pescado.toLowerCase()]*pesc.cantidad;
        });
        
    });

    ciudades.forEach(ciud => {
        let km:number = ciud.km;
        let depreciacion = 1-(km/100)/100;
        let costeFurgo = 5 + km*2;
        //beneficios[ciud.ciudad.toLowerCase()] = beneficios[ciud.ciudad.toLowerCase()]*depreciacion - costeFurgo;

        let as:any = beneficios.filter(ben => ben.ciudad ===ciud.ciudad.toLowerCase())[0];
        beneficios.filter(ben => ben.ciudad ===ciud.ciudad.toLowerCase())[0].beneficio = as.beneficio*depreciacion - costeFurgo;
    });



    beneficios.sort((a,b)=>{
        if(a.beneficio>b.beneficio){return -1}
        return a.beneficio < b.beneficio ?1:0;
    });

    let respuesta:string = ``;

    beneficios.forEach(ben => {
        respuesta += `Si vas a ${ben.ciudad} tendrias el beneficio de ${ben.beneficio} € \n`
    }); 

    respuesta+= `\n\nVete ${beneficios[0].ciudad} que es donde mas vas a ganar!`;

    //let respuesta:string = `Si vas a Madrid tendrias el beneficio de ${beneficios.madrid} € \nSi vas a Barcelona tendrias el beneficio de ${beneficios.barcelona} € \nSi vas a Lisboa tendrias el beneficio de ${beneficios.lisboa} €`
   // let nums:number[] =[beneficios.madrid,beneficios.barcelona,beneficios.lisboa];
    console.log(respuesta);
}

let pescados: {pescado:string, cantidad: number}[] = [{
        pescado: "VIEIRAS",
        cantidad: 50
    },
    {
        pescado: "PULPO",
        cantidad: 100
    },
    {
        pescado: "CENTOLLO",
        cantidad: 50
    }
    
];

calculo(pescados);