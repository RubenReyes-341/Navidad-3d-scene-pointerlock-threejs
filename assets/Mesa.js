import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    // MESA

    // Tablero
    var geoTablero = new THREE.BoxGeometry(4, 0.25, 2);
    var matMadera = new THREE.MeshLambertMaterial({ color: 0x8b5a2b }); 
    var tablero = new THREE.Mesh(geoTablero, matMadera);
    tablero.position.set(10, 3 , 9);
    tablero.castShadow = true; 
    tablero.receiveShadow = true;

    // Pata 1
    var geoPata1 = new THREE.BoxGeometry(0.25, 2.5, 0.25);
    var pata1 = new THREE.Mesh(geoPata1, matMadera);
    pata1.position.set(8.6, 1.6, 8.1);
    pata1.castShadow = true; 
    pata1.receiveShadow = true;

    // Pata 2
    var geoPata2 = new THREE.BoxGeometry(0.25, 2.5, 0.25);
    var pata2 = new THREE.Mesh(geoPata2, matMadera);
    pata2.position.set(11.4, 1.6, 8.1);
    pata2.castShadow = true; 
    pata2.receiveShadow = true;

    // Pata 3
    var geoPata3 = new THREE.BoxGeometry(0.25, 2.5, 0.25);
    var pata3 = new THREE.Mesh(geoPata3, matMadera);
    pata3.position.set(8.6, 1.6, 9.9);
    pata3.castShadow = true; 
    pata3.receiveShadow = true;

    // Pata 4
    var geoPata4 = new THREE.BoxGeometry(0.25, 2.5, 0.25);
    var pata4 = new THREE.Mesh(geoPata4, matMadera);
    pata4.position.set(11.4, 1.6, 9.9);
    pata4.castShadow = true; 
    pata4.receiveShadow = true;


    //TAZA Y PAN

    // Taza
    var geoCuerpoTaza = new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32);
    var matTaza = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var taza = new THREE.Mesh(geoCuerpoTaza, matTaza);
    taza.position.set(10.2, 3.5, 9);
    taza.castShadow = true; 
    taza.receiveShadow = true;

    // Café
    var geoCafe = new THREE.CylinderGeometry(0.3, 0.3, 0.01, 32); 
    var matCafe = new THREE.MeshLambertMaterial({ color: 0x3e2723 });
    var cafe = new THREE.Mesh(geoCafe, matCafe);
    cafe.position.set(10.2, 3.91 , 9);
    cafe.receiveShadow = true;

    // Asa de Taza
    var geoAsa = new THREE.TorusGeometry(0.25, 0.07, 16, 40);
    var asa = new THREE.Mesh(geoAsa, matTaza);
    asa.position.set(10.55, 3.5, 9);
    asa.rotation.z = 1.57;
    asa.castShadow = true; 
    asa.receiveShadow = true;

    // Pan
    var geoPan = new THREE.SphereGeometry(0.35, 16, 16);
    var matPan = new THREE.MeshLambertMaterial({ color: 0xd9a066 }); 
    var pan = new THREE.Mesh(geoPan, matPan);
    pan.position.set(11.5, 3.4, 9.2);
    pan.scale.set(2,1,1);
    pan.rotation.y = 10;
    pan.castShadow = true; 
    pan.receiveShadow = true;


    //CAFETERA

    // Cuerpo Cafetera
    var geoCuerpoCafetera = new THREE.SphereGeometry(0.7,16, 32);
    var matMetal = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
    var cafetera = new THREE.Mesh(geoCuerpoCafetera, matMetal);
    cafetera.position.set(9, 3.6, 8.4);
    cafetera.castShadow = true; 
    cafetera.receiveShadow = true;

    // Tapa Cafetera
    var geoTapa = new THREE.CylinderGeometry(0.55, 0.55, 0.2, 32);
    var tapa = new THREE.Mesh(geoTapa, matMetal);
    tapa.position.set(9, 4.3, 8.4);
    tapa.castShadow = true; 
    tapa.receiveShadow = true;

    // Asa Cafetera
    var geoAsaCaf = new THREE.TorusGeometry(0.3, 0.08, 16, 40);
    var asaCaf = new THREE.Mesh(geoAsaCaf, matMetal);
    asaCaf.position.set(9.6, 3.8, 8.4);
    asaCaf.rotation.z = 1.57;
    asaCaf.castShadow = true; 
    asaCaf.receiveShadow = true;

    // Pico Cafetera
    var geoPico = new THREE.BoxGeometry(1.25, 0.25, 0.3);
    var pico1 = new THREE.Mesh(geoPico, matMetal);
    pico1.position.set(8.35, 3.8, 8.4);
    pico1.rotation.z = -10;
    pico1.castShadow = true; 
    pico1.receiveShadow = true;

    const MESA = new THREE.Group();
    
    MESA.add(
        tablero,
        pata1, pata2, pata3, pata4,
        taza, cafe, asa,
        pan,
        cafetera, tapa, asaCaf, pico1
    );
    
    MESA.position.set(x,y,z);

    return MESA;
}