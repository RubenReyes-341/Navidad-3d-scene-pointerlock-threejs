import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    // CUERPO
    var geoCuerpo = new THREE.SphereGeometry(1.1, 16, 16);
    var matOso = new THREE.MeshLambertMaterial({ color: 0xc48c52 });
    var cuerpo = new THREE.Mesh(geoCuerpo, matOso);
    cuerpo.scale.set(1, 1, 0.8);
    cuerpo.position.set(20, 4.3, 8.2);
    cuerpo.castShadow = true;
    cuerpo.receiveShadow = true;

    //CABEZA
    var geoCabeza = new THREE.SphereGeometry(0.9, 16, 16);
    var cabeza = new THREE.Mesh(geoCabeza, matOso);
    cabeza.position.set(20, 5.6, 8.45);
    cabeza.castShadow = true;
    cabeza.receiveShadow = true;

    // Oreja 1
    var geoOreja1 = new THREE.SphereGeometry(0.28, 16, 16);
    var oreja1 = new THREE.Mesh(geoOreja1, matOso);
    oreja1.position.set(19.55, 6.4, 8.4);
    oreja1.castShadow = true;
    oreja1.receiveShadow = true;

    // Oreja 2
    var geoOreja2 = new THREE.SphereGeometry(0.28, 16, 16);
    var oreja2 = new THREE.Mesh(geoOreja2, matOso);
    oreja2.position.set(20.45, 6.4, 8.4);
    oreja2.castShadow = true;
    oreja2.receiveShadow = true;

    // Brazo 1
    var geoBrazo1 = new THREE.SphereGeometry(0.45, 16, 16);
    var brazo1os = new THREE.Mesh(geoBrazo1, matOso);
    brazo1os.position.set(19.3, 4.7, 8.5);
    brazo1os.castShadow = true;
    brazo1os.receiveShadow = true;

    // Brazo 2
    var geoBrazo2 = new THREE.SphereGeometry(0.45, 16, 16);
    var brazo2os = new THREE.Mesh(geoBrazo2, matOso);
    brazo2os.position.set(20.5, 4.7, 8.5);
    brazo2os.castShadow = true;
    brazo2os.receiveShadow = true;

    // Pierna 1
    var geoPierna1 = new THREE.SphereGeometry(0.55, 16, 16);
    var pierna1os = new THREE.Mesh(geoPierna1, matOso);
    pierna1os.position.set(19.3, 4 , 8.5);
    pierna1os.castShadow = true;
    pierna1os.receiveShadow = true;

    // Pierna 2
    var geoPierna2 = new THREE.SphereGeometry(0.55, 16, 16);
    var pierna2os = new THREE.Mesh(geoPierna2, matOso);
    pierna2os.position.set(20.5, 4, 8.5);
    pierna2os.castShadow = true;
    pierna2os.receiveShadow = true;

    // Panza
    var geoPanza = new THREE.SphereGeometry(0.6, 16, 16);
    var matPanza = new THREE.MeshLambertMaterial({ color: 0xf1c99a }); 
    var panza = new THREE.Mesh(geoPanza, matPanza);
    panza.scale.set(0.8, 0.7, 0.2);
    panza.position.set(20, 4.35, 9);
    panza.castShadow = true;
    panza.receiveShadow = true;

    // Ojo 1
    var geoOjo1 = new THREE.SphereGeometry(0.08, 8, 8);
    var matOjos = new THREE.MeshLambertMaterial({ color: 0x000000 }); 
    var ojo1 = new THREE.Mesh(geoOjo1, matOjos);
    ojo1.position.set(19.8, 5.7,9.3);
    ojo1.castShadow = true;
    ojo1.receiveShadow = true;

    // Ojo 2
    var geoOjo2 = new THREE.SphereGeometry(0.08, 8, 8);
    var ojo2 = new THREE.Mesh(geoOjo2, matOjos); 
    ojo2.position.set(20.2, 5.7, 9.3);
    ojo2.castShadow = true;
    ojo2.receiveShadow = true;

    // Nariz
    var geoNariz = new THREE.SphereGeometry(0.12, 8, 8);
    var matNariz = new THREE.MeshLambertMaterial({ color: 0x402000 }); 
    var nariz = new THREE.Mesh(geoNariz, matNariz);
    nariz.position.set(20, 5.55, 9.3);
    nariz.castShadow = true;
    nariz.receiveShadow = true;

    const OSI = new THREE.Group();
    
    OSI.add(
        cuerpo, cabeza,
        oreja1, oreja2,
        brazo1os, brazo2os,
        pierna1os, pierna2os,
        panza,
        ojo1, ojo2, nariz
    );
    
    OSI.position.set(x,y,z);

    return OSI;
}