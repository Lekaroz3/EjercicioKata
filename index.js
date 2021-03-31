var ciudades = [
    {
        ciudad: "MADRID",
        precios: {
            vieiras: 500,
            pulpo: 0,
            centollo: 450
        },
        km: 800
    },
    {
        ciudad: "BARCELONA",
        precios: {
            vieiras: 450,
            pulpo: 120,
            centollo: 0
        },
        km: 1100
    },
    {
        ciudad: "LISBOA",
        precios: {
            vieiras: 600,
            pulpo: 100,
            centollo: 500
        },
        km: 600
    }
];
function calculo(listaPescados) {
    var pesoTotal = listaPescados.reduce(function (a, b) { return a.cantidad + b.cantidad; }, 0);
    if (pesoTotal < 0 || pesoTotal > 200) {
        console.log("Error, la furgoneta solamente puede llevar 200kg y la suma del peso tiene que ser positivo!");
        return "Error, la furgoneta solamente puede llevar 200kg y la suma del peso tiene que ser positivo!";
    }
    var beneficios = [
        {
            ciudad: "madrid",
            beneficio: 0
        },
        {
            ciudad: "barcelona",
            beneficio: 0
        },
        {
            ciudad: "lisboa",
            beneficio: 0
        }
    ];
    listaPescados.forEach(function (pesc) {
        ciudades.forEach(function (ciudad) {
            beneficios.filter(function (ben) { return ben.ciudad === ciudad.ciudad.toLowerCase(); })[0].beneficio += ciudad.precios[pesc.pescado.toLowerCase()] * pesc.cantidad;
            //beneficios[ciudad.ciudad.toLowerCase()]+= ciudad.precios[pesc.pescado.toLowerCase()]*pesc.cantidad;
        });
    });
    ciudades.forEach(function (ciud) {
        var km = ciud.km;
        var depreciacion = 1 - (km / 100) / 100;
        var costeFurgo = 5 + km * 2;
        //beneficios[ciud.ciudad.toLowerCase()] = beneficios[ciud.ciudad.toLowerCase()]*depreciacion - costeFurgo;
        var as = beneficios.filter(function (ben) { return ben.ciudad === ciud.ciudad.toLowerCase(); })[0];
        beneficios.filter(function (ben) { return ben.ciudad === ciud.ciudad.toLowerCase(); })[0].beneficio = as.beneficio * depreciacion - costeFurgo;
    });
    beneficios.sort(function (a, b) {
        if (a.beneficio > b.beneficio) {
            return -1;
        }
        return a.beneficio < b.beneficio ? 1 : 0;
    });
    var respuesta = "";
    beneficios.forEach(function (ben) {
        respuesta += "Si vas a " + ben.ciudad + " tendrias el beneficio de " + ben.beneficio + " \u20AC \n";
    });
    respuesta += "\n\nVete " + beneficios[0].ciudad + " que es donde mas vas a ganar!";
    //let respuesta:string = `Si vas a Madrid tendrias el beneficio de ${beneficios.madrid} € \nSi vas a Barcelona tendrias el beneficio de ${beneficios.barcelona} € \nSi vas a Lisboa tendrias el beneficio de ${beneficios.lisboa} €`
    // let nums:number[] =[beneficios.madrid,beneficios.barcelona,beneficios.lisboa];
    console.log(respuesta);
}
var pescados = [{
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
