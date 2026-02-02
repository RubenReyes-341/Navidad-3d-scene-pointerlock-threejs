import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    // MESA 
    var matMadera = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });

    // TABLERO
    var geoTablero = new THREE.BoxGeometry(4, 0.25, 2);
    var tablero = new THREE.Mesh(geoTablero, matMadera);
    tablero.position.set(10, 3 , 9);
    tablero.castShadow = true; 
    tablero.receiveShadow = true;

    // PATAS
    var geoPata = new THREE.BoxGeometry(0.25, 2.5, 0.25);

    var pata1 = new THREE.Mesh(geoPata, matMadera);
    pata1.position.set(8.6, 1.6, 8.1);
    pata1.castShadow = true; 
    pata1.receiveShadow = true;

    var pata2 = new THREE.Mesh(geoPata, matMadera);
    pata2.position.set(11.4, 1.6, 8.1);
    pata2.castShadow = true; 
    pata2.receiveShadow = true;

    var pata3 = new THREE.Mesh(geoPata, matMadera);
    pata3.position.set(8.6, 1.6, 9.9);
    pata3.castShadow = true; 
    pata3.receiveShadow = true;

    var pata4 = new THREE.Mesh(geoPata, matMadera);
    pata4.position.set(11.4, 1.6, 9.9);
    pata4.castShadow = true; 
    pata4.receiveShadow = true;

    const MESASOLA = new THREE.Group();
    
    MESASOLA.add(
        pata1, pata2, pata3, pata4, 
        tablero
    );
    
    MESASOLA.position.set(x,y,z);

    return MESASOLA;
}