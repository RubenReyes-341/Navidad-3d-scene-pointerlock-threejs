import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    const CHIMENEA = new THREE.Group();

    var matLadrillo = new THREE.MeshLambertMaterial({ color: 0xcc4b4b });
    var matLadrillo1 = new THREE.MeshLambertMaterial({ color: 0xC56730 });
    var matParedes = new THREE.MeshLambertMaterial({ color: 0xb03030 });
    var matBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x000000 });


    //CHIEMENA

    // Cuerpo 
    var geoChimenea = new THREE.BoxGeometry(5, 14.5, 1);
    var chimenea = new THREE.Mesh(geoChimenea, matParedes);
    chimenea.position.set(0, 8, 10);
    chimenea.castShadow = true; 
    chimenea.receiveShadow = true;

    // Marco inferior
    var geoMarco = new THREE.BoxGeometry(6, 2, 1.2);
    var marco = new THREE.Mesh(geoMarco, matBlanco);
    marco.position.set(0, 1, 10);
    marco.castShadow = true; 
    marco.receiveShadow = true;

    // Abertura (Hueco negro)
    var geoAbertura = new THREE.BoxGeometry(3, 3, 1.1);
    var abertura = new THREE.Mesh(geoAbertura, matNegro);
    abertura.position.set(0, 2.5, 10.01);
    abertura.receiveShadow = true;


    // MURAL DE LADRILLOS 
    var muralLadrillos = new THREE.Group();
    var geoLadrillo = new THREE.BoxGeometry(1, 0.4, 0.2);

    // Fila 1
    var ladrillo1 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo1.position.set(-2, 7.8, 10.6);
    ladrillo1.castShadow = true; ladrillo1.receiveShadow = true;
    muralLadrillos.add(ladrillo1);

    var ladrillo2 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo2.position.set(-1, 7.8, 10.6);
    ladrillo2.castShadow = true; ladrillo2.receiveShadow = true;
    muralLadrillos.add(ladrillo2);

    var ladrillo3 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo3.position.set(0, 7.8, 10.6);
    ladrillo3.castShadow = true; ladrillo3.receiveShadow = true;
    muralLadrillos.add(ladrillo3);

    var ladrillo4 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo4.position.set(1, 7.8, 10.6);
    ladrillo4.castShadow = true; ladrillo4.receiveShadow = true;
    muralLadrillos.add(ladrillo4);

    var ladrillo5 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo5.position.set(2, 7.8, 10.6);
    ladrillo5.castShadow = true; ladrillo5.receiveShadow = true;
    muralLadrillos.add(ladrillo5);

    // Fila 2
    var ladrillo6 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo6.position.set(-2, 7.4, 10.6);
    ladrillo6.castShadow = true; ladrillo6.receiveShadow = true;
    muralLadrillos.add(ladrillo6);

    var ladrillo7 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo7.position.set(-1, 7.4, 10.6);
    ladrillo7.castShadow = true; ladrillo7.receiveShadow = true;
    muralLadrillos.add(ladrillo7);

    var ladrillo8 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo8.position.set(0, 7.4, 10.6);
    ladrillo8.castShadow = true; ladrillo8.receiveShadow = true;
    muralLadrillos.add(ladrillo8);

    var ladrillo9 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo9.position.set(1, 7.4, 10.6);
    ladrillo9.castShadow = true; ladrillo9.receiveShadow = true;
    muralLadrillos.add(ladrillo9);

    var ladrillo10 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo10.position.set(2, 7.4, 10.6);
    ladrillo10.castShadow = true; ladrillo10.receiveShadow = true;
    muralLadrillos.add(ladrillo10);

    // Fila 3
    var ladrillo11 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo11.position.set(-2, 7, 10.6);
    ladrillo11.castShadow = true; ladrillo11.receiveShadow = true;
    muralLadrillos.add(ladrillo11);

    var ladrillo12 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo12.position.set(-1, 7, 10.6);
    ladrillo12.castShadow = true; ladrillo12.receiveShadow = true;
    muralLadrillos.add(ladrillo12);

    var ladrillo13 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo13.position.set(0, 7, 10.6);
    ladrillo13.castShadow = true; ladrillo13.receiveShadow = true;
    muralLadrillos.add(ladrillo13);

    var ladrillo14 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo14.position.set(1, 7, 10.6);
    ladrillo14.castShadow = true; ladrillo14.receiveShadow = true;
    muralLadrillos.add(ladrillo14);

    var ladrillo15 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo15.position.set(2, 7, 10.6);
    ladrillo15.castShadow = true; ladrillo15.receiveShadow = true;
    muralLadrillos.add(ladrillo15);

    // Fila 4
    var ladrillo16 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo16.position.set(-2, 6.6, 10.6);
    ladrillo16.castShadow = true; ladrillo16.receiveShadow = true;
    muralLadrillos.add(ladrillo16);

    var ladrillo17 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo17.position.set(-1, 6.6, 10.6);
    ladrillo17.castShadow = true; ladrillo17.receiveShadow = true;
    muralLadrillos.add(ladrillo17);

    var ladrillo18 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo18.position.set(0, 6.6, 10.6);
    ladrillo18.castShadow = true; ladrillo18.receiveShadow = true;
    muralLadrillos.add(ladrillo18);

    var ladrillo19 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo19.position.set(1, 6.6, 10.6);
    ladrillo19.castShadow = true; ladrillo19.receiveShadow = true;
    muralLadrillos.add(ladrillo19);

    var ladrillo20 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo20.position.set(2, 6.6, 10.6);
    ladrillo20.castShadow = true; ladrillo20.receiveShadow = true;
    muralLadrillos.add(ladrillo20);

    // Fila 5
    var ladrillo21 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo21.position.set(-2, 6.2, 10.6);
    ladrillo21.castShadow = true; ladrillo21.receiveShadow = true;
    muralLadrillos.add(ladrillo21);

    var ladrillo22 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo22.position.set(-1, 6.2, 10.6);
    ladrillo22.castShadow = true; ladrillo22.receiveShadow = true;
    muralLadrillos.add(ladrillo22);

    var ladrillo23 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo23.position.set(0, 6.2, 10.6);
    ladrillo23.castShadow = true; ladrillo23.receiveShadow = true;
    muralLadrillos.add(ladrillo23);

    var ladrillo24 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo24.position.set(1, 6.2, 10.6);
    ladrillo24.castShadow = true; ladrillo24.receiveShadow = true;
    muralLadrillos.add(ladrillo24);

    var ladrillo25 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo25.position.set(2, 6.2, 10.6);
    ladrillo25.castShadow = true; ladrillo25.receiveShadow = true;
    muralLadrillos.add(ladrillo25);

    // Fila 6
    var ladrillo26 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo26.position.set(-2, 5.8, 10.6);
    ladrillo26.castShadow = true; ladrillo26.receiveShadow = true;
    muralLadrillos.add(ladrillo26);

    var ladrillo27 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo27.position.set(-1, 5.8, 10.6);
    ladrillo27.castShadow = true; ladrillo27.receiveShadow = true;
    muralLadrillos.add(ladrillo27);

    var ladrillo28 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo28.position.set(0, 5.8, 10.6);
    ladrillo28.castShadow = true; ladrillo28.receiveShadow = true;
    muralLadrillos.add(ladrillo28);

    var ladrillo29 = new THREE.Mesh(geoLadrillo, matLadrillo1);
    ladrillo29.position.set(1, 5.8, 10.6);
    ladrillo29.castShadow = true; ladrillo29.receiveShadow = true;
    muralLadrillos.add(ladrillo29);

    var ladrillo30 = new THREE.Mesh(geoLadrillo, matLadrillo);
    ladrillo30.position.set(2, 5.8, 10.6);
    ladrillo30.castShadow = true; ladrillo30.receiveShadow = true;
    muralLadrillos.add(ladrillo30);

    // Clones de ladrillos
    var pared2 = muralLadrillos.clone();
    pared2.position.y = 2.4;

    var pared3 = muralLadrillos.clone();
    pared3.position.y = 4.8;

    var pared4 = muralLadrillos.clone();
    pared4.position.y = 7.2;


    // REPISA 
    var geoRepisa = new THREE.BoxGeometry(7, 0.4, 1);
    var repisa = new THREE.Mesh(geoRepisa, matBlanco);
    repisa.position.set(0, 5, 11);
    repisa.castShadow = true; 
    repisa.receiveShadow = true;


    // REGALOS SOBRE REPISA 
    
    // Regalo 1
    var geoCaja1 = new THREE.BoxGeometry(1, 1, 0.7);
    var matCaja1 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    var caja1 = new THREE.Mesh(geoCaja1, matCaja1);
    caja1.position.set(-2.8, 5.7, 11.1);
    caja1.castShadow = true; caja1.receiveShadow = true;

    // Regalo 2
    var geoCaja2 = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    var matCaja2 = new THREE.MeshLambertMaterial({ color: 0x00cc00 });
    var caja2 = new THREE.Mesh(geoCaja2, matCaja2);
    caja2.position.set(-0.8, 5.5, 11);
    caja2.castShadow = true; caja2.receiveShadow = true;

    // Regalo 3
    var geoCaja3 = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    var matCaja3 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    var caja3 = new THREE.Mesh(geoCaja3, matCaja3);
    caja3.position.set(1, 5.5, 11);
    caja3.castShadow = true; caja3.receiveShadow = true;

    // Regalo 4
    var caja4 = new THREE.Mesh(geoCaja1, matCaja1);
    caja4.position.set(2.8, 5.7, 11.1);
    caja4.castShadow = true; caja4.receiveShadow = true;


    // VELADORAS 
    var geoVaso = new THREE.CylinderGeometry(0.2, 0.2, 1.2, 32);
    var matVaso = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
    var geoCera = new THREE.CylinderGeometry(0.1, 0.1, 1.2, 32);
    var matCera = new THREE.MeshLambertMaterial({ color: 0xfff8dc });
    var geoFlama = new THREE.ConeGeometry(0.1, 0.4, 16);
    var matFlama = new THREE.MeshLambertMaterial({ color: 0xffa500, emissive: 0xffd700 });

    // Veladora 1 
    var vaso = new THREE.Mesh(geoVaso, matVaso);
    vaso.position.set(1.8, 5.5, 11);
    vaso.castShadow = true;

    var cera = new THREE.Mesh(geoCera, matCera);
    cera.position.set(1.8, 5.5, 11);
    cera.castShadow = true;

    var flama = new THREE.Mesh(geoFlama, matFlama);
    flama.position.set(1.8, 6.2, 11);

    // Veladora 2 
    var vaso2 = new THREE.Mesh(geoVaso, matVaso);
    vaso2.position.set(0, 5.5, 11);
    vaso2.castShadow = true;

    var cera2 = new THREE.Mesh(geoCera, matCera);
    cera2.position.set(0, 5.5, 11);
    cera2.castShadow = true;

    var flama2 = new THREE.Mesh(geoFlama, matFlama);
    flama2.position.set(0, 6.2, 11);

    // Veladora 3 
    var vaso3 = new THREE.Mesh(geoVaso, matVaso);
    vaso3.position.set(-1.8, 5.5, 11);
    vaso3.castShadow = true;

    var cera3 = new THREE.Mesh(geoCera, matCera);
    cera3.position.set(-1.8, 5.5, 11);
    cera3.castShadow = true;

    var flama3 = new THREE.Mesh(geoFlama, matFlama);
    flama3.position.set(-1.8, 6.2, 11);

    var geoHoja = new THREE.SphereGeometry(0.25, 12, 12);
    var matHoja = new THREE.MeshLambertMaterial({ color: 0x006600 });

    var hoja1 = new THREE.Mesh(geoHoja, matHoja);
    hoja1.position.set(-2.5, 5, 11.7);
    hoja1.castShadow = true; hoja1.receiveShadow = true;

    var hoja2 = new THREE.Mesh(geoHoja, matHoja);
    hoja2.position.set(-1.8, 5, 11.7);
    hoja2.castShadow = true; hoja2.receiveShadow = true;

    var hoja3 = new THREE.Mesh(geoHoja, matHoja);
    hoja3.position.set(-1.1, 5, 11.7);
    hoja3.castShadow = true; hoja3.receiveShadow = true;

    var hoja4 = new THREE.Mesh(geoHoja, matHoja);
    hoja4.position.set(-0.4, 5, 11.7);
    hoja4.castShadow = true; hoja4.receiveShadow = true;

    var hoja5 = new THREE.Mesh(geoHoja, matHoja);
    hoja5.position.set(0.3, 5, 11.7);
    hoja5.castShadow = true; hoja5.receiveShadow = true;

    var hoja6 = new THREE.Mesh(geoHoja, matHoja);
    hoja6.position.set(1, 5, 11.7);
    hoja6.castShadow = true; hoja6.receiveShadow = true;

    var hoja7 = new THREE.Mesh(geoHoja, matHoja);
    hoja7.position.set(1.7, 5, 11.7);
    hoja7.castShadow = true; hoja7.receiveShadow = true;

    var hoja8 = new THREE.Mesh(geoHoja, matHoja);
    hoja8.position.set(2.4, 5, 11.7);
    hoja8.castShadow = true; hoja8.receiveShadow = true;

    var geoBola = new THREE.SphereGeometry(0.18, 12, 12);
    var matBola = new THREE.MeshLambertMaterial({ color: 0xff0000 });

    var bola1 = new THREE.Mesh(geoBola, matBola);
    bola1.position.set(-2, 5, 11.7);
    bola1.castShadow = true;

    var bola2 = new THREE.Mesh(geoBola, matBola);
    bola2.position.set(-0.8, 5, 11.7);
    bola2.castShadow = true;

    var bola3 = new THREE.Mesh(geoBola, matBola);
    bola3.position.set(0.6, 5, 11.7);
    bola3.castShadow = true;

    var bola4 = new THREE.Mesh(geoBola, matBola);
    bola4.position.set(2, 5, 11.7);
    bola4.castShadow = true;


    // BOTAS NAVIDEÑAS 
    var botaNavidena = new THREE.Group();
    var materialRojoBota = new THREE.MeshLambertMaterial({ color: 0xd91a1a, side: THREE.DoubleSide });
    var materialBlancoPeluche = new THREE.MeshLambertMaterial({ color: 0xf2f2f2, side: THREE.DoubleSide });

    // Pierna
    var geoPierna = new THREE.CylinderGeometry(6, 5, 16, 32);
    var pierna = new THREE.Mesh(geoPierna, materialRojoBota);
    pierna.position.y = 8; 
    pierna.castShadow = true; pierna.receiveShadow = true;
    botaNavidena.add(pierna);

    // Talón
    var geoTalon = new THREE.SphereGeometry(5, 32, 32); 
    var talon = new THREE.Mesh(geoTalon, materialRojoBota);
    talon.position.y = 0;
    talon.castShadow = true; talon.receiveShadow = true;
    botaNavidena.add(talon);

    // Pie
    var geoPie = new THREE.CylinderGeometry(5, 5, 12, 32);
    var pie = new THREE.Mesh(geoPie, materialRojoBota);
    pie.rotation.z = 1.57; 
    pie.position.x = -6; 
    pie.castShadow = true; pie.receiveShadow = true;
    botaNavidena.add(pie);

    // Punta
    var geoPunta = new THREE.SphereGeometry(5, 32, 32, 0, Math.PI * 2, 0, Math.PI/2);
    var punta = new THREE.Mesh(geoPunta, materialRojoBota);
    punta.rotation.z = 1.57; 
    punta.position.x = -12; 
    punta.castShadow = true; punta.receiveShadow = true;
    botaNavidena.add(punta);

    // Borde Blanco
    var geoBorde = new THREE.TorusGeometry(6.5, 2.5, 16, 40);
    var bordeBlanco = new THREE.Mesh(geoBorde, materialBlancoPeluche);
    bordeBlanco.rotation.x = 1.57; 
    bordeBlanco.position.y = 16; 
    bordeBlanco.castShadow = true; bordeBlanco.receiveShadow = true;
    botaNavidena.add(bordeBlanco);

    // Colgador
    var geoColgador = new THREE.TorusGeometry(1.5, 0.4, 8, 16);
    var colgador = new THREE.Mesh(geoColgador, materialRojoBota);
    colgador.position.set(6, 18, 0); 
    colgador.castShadow = true;
    botaNavidena.add(colgador);

    botaNavidena.scale.set(0.06, 0.06, 0.06);
    botaNavidena.position.set(-1.7, 3.8, 11.7);
    botaNavidena.rotation.z = 7;

    // Clones de botas
    var bota2 = botaNavidena.clone();
    bota2.position.set(1, 3.8, 11.7);
    bota2.rotation.z = 7;

    var bota3 = botaNavidena.clone();
    bota3.position.set(-0.4, 3.8, 11.7);
    bota3.rotation.z = 7;

    var bota4 = botaNavidena.clone();
    bota4.position.set(2.4, 3.8, 11.7);
    bota4.rotation.z = 7;


    // FUEGO 
    var fuego = new THREE.Group();

    // Llama Amarilla
    var geoLlamaBase = new THREE.ConeGeometry(0.5, 1.2, 16);
    var matLlamaAmarilla = new THREE.MeshLambertMaterial({ color: 0xffd600 });
    var llamaAmarilla = new THREE.Mesh(geoLlamaBase, matLlamaAmarilla);
    llamaAmarilla.position.set(0, 3.3, 10.4);
    fuego.add(llamaAmarilla);

    // Llamas Naranjas
    var geoLlamaMedia = new THREE.ConeGeometry(0.35, 0.9, 16);
    var matLlamaNaranja = new THREE.MeshLambertMaterial({ color: 0xff7b00 });
    
    var llamaNaranja = new THREE.Mesh(geoLlamaMedia, matLlamaNaranja);
    llamaNaranja.position.set(0.3, 3, 10.5);
    fuego.add(llamaNaranja);

    var llamaNaranja2 = new THREE.Mesh(geoLlamaMedia, matLlamaNaranja);
    llamaNaranja2.position.set(-0.3, 3, 10.5);
    fuego.add(llamaNaranja2);

    // Llamas Rojas
    var geoLlamaRoja = new THREE.ConeGeometry(0.2, 0.6, 16);
    var matLlamaRoja = new THREE.MeshLambertMaterial({ color: 0xff1a00 });

    var llamaRoja = new THREE.Mesh(geoLlamaRoja, matLlamaRoja);
    llamaRoja.position.set(0.36, 2.8, 10.7);
    fuego.add(llamaRoja);

    var llamaRoja2 = new THREE.Mesh(geoLlamaRoja, matLlamaRoja);
    llamaRoja2.position.set(-0.36, 2.8, 10.7);
    fuego.add(llamaRoja2);

    // Troncos
    var geoTronco = new THREE.CylinderGeometry(0.25, 0.25, 2, 12);
    var matTronco = new THREE.MeshLambertMaterial({ color: 0x4b2e05 });

    var tronco1 = new THREE.Mesh(geoTronco, matTronco);
    tronco1.rotation.z = 1.4;
    tronco1.position.set(0.4, 2.3, 10.6);
    tronco1.castShadow = true;
    fuego.add(tronco1);

    var tronco2 = new THREE.Mesh(geoTronco, matTronco);
    tronco2.rotation.z = -1.4;
    tronco2.position.set(-0.4, 2.3, 10.6);
    tronco2.castShadow = true;
    fuego.add(tronco2);

    // Brillo central
    var geoBrillo = new THREE.SphereGeometry(0.4, 16, 16);
    var matBrillo = new THREE.MeshBasicMaterial({ color: 0xffa000 });
    var brillo = new THREE.Mesh(geoBrillo, matBrillo);
    brillo.position.set(0, 2.5, 10.5);
    fuego.add(brillo);


    // PARRILLA 
    var parrilla = new THREE.Group();
    var matMetal = new THREE.MeshLambertMaterial({ color: 0x444444 });
    var geoBarra = new THREE.BoxGeometry(1.8, 0.1, 0.1); 
    var geoPata = new THREE.BoxGeometry(0.1, 0.4, 0.1); 

    var barra1 = new THREE.Mesh(geoBarra, matMetal);
    barra1.position.set(0, -3.4, 0.5);
    barra1.castShadow = true;
    parrilla.add(barra1);

    var barra2 = new THREE.Mesh(geoBarra, matMetal);
    barra2.position.set(0, -3.6, 0.5);
    barra2.castShadow = true;
    parrilla.add(barra2);

    var barra3 = new THREE.Mesh(geoBarra, matMetal);
    barra3.position.set(0, -3.8, 0.5);
    barra3.castShadow = true;
    parrilla.add(barra3);

    var barra4 = new THREE.Mesh(geoBarra, matMetal);
    barra4.position.set(0, -4, 0.5);
    barra4.castShadow = true;
    parrilla.add(barra4);

    var pata1 = new THREE.Mesh(geoPata, matMetal);
    pata1.position.set(0.8, -3.4, 0.5);
    pata1.castShadow = true;
    parrilla.add(pata1);

    var pata2 = new THREE.Mesh(geoPata, matMetal);
    pata2.position.set(-0.8, -3.6, 0.5);
    pata2.castShadow = true;
    parrilla.add(pata2);

    var pata3 = new THREE.Mesh(geoPata, matMetal);
    pata3.position.set(0.8,-3.8, 0.5);
    pata3.castShadow = true;
    parrilla.add(pata3);

    var pata4 = new THREE.Mesh(geoPata, matMetal);
    pata4.position.set(-0.8,-4, 0.5);
    pata4.castShadow = true;
    parrilla.add(pata4);

    parrilla.position.set(0, 6, 10.4);
    parrilla.scale.set(3, 1, 1);


    // CORONA 
    var coronaNavidena = new THREE.Group();
    var matVerdeCorona = new THREE.MeshLambertMaterial({ color: 0x0a690a });
    var matRojoAdorno = new THREE.MeshLambertMaterial({ color: 0xd91a1a });
    var matDoradoAdorno = new THREE.MeshLambertMaterial({ color: 0xffd700 });

    // Base Corona
    var geoBaseCorona = new THREE.TorusGeometry(12, 4, 16, 50);
    var baseCorona = new THREE.Mesh(geoBaseCorona, matVerdeCorona);
    baseCorona.castShadow = true; baseCorona.receiveShadow = true;
    coronaNavidena.add(baseCorona);

    var geoEsferita = new THREE.SphereGeometry(1.2, 16, 16);

    // Bolas Doradas
    var bolaD1 = new THREE.Mesh(geoEsferita, matDoradoAdorno);
    bolaD1.position.set(10, 5, 4); 
    bolaD1.castShadow = true;
    coronaNavidena.add(bolaD1);

    var bolaD2 = new THREE.Mesh(geoEsferita, matDoradoAdorno);
    bolaD2.position.set(-10, 5, 4); 
    bolaD2.castShadow = true;
    coronaNavidena.add(bolaD2);

    var bolaD3 = new THREE.Mesh(geoEsferita, matDoradoAdorno);
    bolaD3.position.set(0, 11, 4); 
    bolaD3.castShadow = true;
    coronaNavidena.add(bolaD3);

    // Bolas Rojas
    var bolaR1 = new THREE.Mesh(geoEsferita, matRojoAdorno);
    bolaR1.position.set(11, -3, 4); 
    bolaR1.castShadow = true;
    coronaNavidena.add(bolaR1);

    var bolaR2 = new THREE.Mesh(geoEsferita, matRojoAdorno);
    bolaR2.position.set(-11, -3, 4); 
    bolaR2.castShadow = true;
    coronaNavidena.add(bolaR2);

    // Moño
    var geoNudo = new THREE.SphereGeometry(2.5, 16, 16);
    var nudoMoño = new THREE.Mesh(geoNudo, matRojoAdorno);
    nudoMoño.position.set(0, -12, 4);
    nudoMoño.castShadow = true;
    coronaNavidena.add(nudoMoño);

    var geoLazo = new THREE.CylinderGeometry(2, 2, 10, 16);

    var lazoIzq = new THREE.Mesh(geoLazo, matRojoAdorno);
    lazoIzq.scale.z = 0.3;
    lazoIzq.position.set(-5, -14, 4);
    lazoIzq.rotation.z = 5; 
    lazoIzq.castShadow = true;
    coronaNavidena.add(lazoIzq);

    var lazoDer = new THREE.Mesh(geoLazo, matRojoAdorno);
    lazoDer.scale.z = 0.3; 
    lazoDer.position.set(5, -14, 4);
    lazoDer.rotation.z = -5;
    lazoDer.castShadow = true;
    coronaNavidena.add(lazoDer);

    coronaNavidena.rotation.z = 25.2;
    coronaNavidena.position.set(0, 10, 11);
    coronaNavidena.scale.set(0.1, 0.1, 0.1);

    CHIMENEA.add(
        chimenea,
        marco,
        abertura,
        muralLadrillos, pared2, pared3, pared4,
        repisa,
        caja1, caja2, caja3, caja4,
        vaso, cera, flama,
        vaso2, cera2, flama2,
        vaso3, cera3, flama3,
        hoja1, hoja2, hoja3, hoja4, hoja5, hoja6, hoja7, hoja8,
        bola1, bola2, bola3, bola4,
        botaNavidena, bota2, bota3, bota4,
        fuego,
        parrilla,
        coronaNavidena
    );

    CHIMENEA.position.set(x,y,z);
    
    return CHIMENEA;
}