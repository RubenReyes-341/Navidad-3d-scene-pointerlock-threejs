import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    //SILLON
    var matSillon = new THREE.MeshLambertMaterial({ color: 0xcd3b39 });

    var asiento = new THREE.Mesh(new THREE.BoxGeometry(4, 1, 3), matSillon);
    asiento.position.set(20, 3.5, 8);
    asiento.castShadow = true; 
    asiento.receiveShadow = true;

    var respaldo = new THREE.Mesh(new THREE.BoxGeometry(4, 5, 1), matSillon);
    respaldo.position.set(20, 6, 6.5);
    respaldo.castShadow = true;
    respaldo.receiveShadow = true;

    var brazo1 = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 4, 16), matSillon);
    brazo1.rotation.x = 11;
    brazo1.position.set(18, 4.8, 8);
    brazo1.castShadow = true;
    brazo1.receiveShadow = true;

    var brazo2 = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 4, 16), matSillon);
    brazo2.rotation.x = 11;
    brazo2.position.set(22, 4.8, 8);
    brazo2.castShadow = true;
    brazo2.receiveShadow = true;

    var cojin1 = new THREE.Mesh(new THREE.SphereGeometry(1.3, 16, 16), matSillon);
    cojin1.scale.set(1.6, 0.6, 1);
    cojin1.position.set(20, 4.5, 7.5);
    cojin1.castShadow = true;
    cojin1.receiveShadow = true;

    // OSO
    var matOso = new THREE.MeshLambertMaterial({ color: 0xc48c52 });
    var matPanza = new THREE.MeshLambertMaterial({ color: 0xf1c99a });
    var matOjos = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var matNariz = new THREE.MeshLambertMaterial({ color: 0x402000 });

    var cuerpo = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 16), matOso);
    cuerpo.scale.set(1, 1, 0.8);
    cuerpo.position.set(20, 4.3, 8.2);
    cuerpo.castShadow = true;
    cuerpo.receiveShadow = true;

    // CABEZA
    var cabeza = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), matOso);
    cabeza.position.set(20, 5.6, 8.45);
    cabeza.castShadow = true;
    cabeza.receiveShadow = true;

    var oreja1 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), matOso);
    oreja1.position.set(19.55, 6.4, 8.4);
    oreja1.castShadow = true;
    oreja1.receiveShadow = true;

    var oreja2 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), matOso);
    oreja2.position.set(20.45, 6.4, 8.4);
    oreja2.castShadow = true;
    oreja2.receiveShadow = true;

    // BRAZOS
    var brazo1os = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), matOso);
    brazo1os.position.set(19.3, 4.7, 8.5);
    brazo1os.castShadow = true;
    brazo1os.receiveShadow = true;

    var brazo2os = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), matOso);
    brazo2os.position.set(20.5, 4.7, 8.5);
    brazo2os.castShadow = true;
    brazo2os.receiveShadow = true;

    //PIERNAS
    var pierna1os = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), matOso);
    pierna1os.position.set(19.3, 4 , 8.5);
    pierna1os.castShadow = true;
    pierna1os.receiveShadow = true;

    var pierna2os = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), matOso);
    pierna2os.position.set(20.5, 4, 8.5);
    pierna2os.castShadow = true;
    pierna2os.receiveShadow = true;

    // PANZA
    var panza = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), matPanza);
    panza.scale.set(0.8, 0.7, 0.2);
    panza.position.set(20, 4.35, 9);
    panza.castShadow = true;
    panza.receiveShadow = true;

    // CARA
    var ojo1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), matOjos);
    ojo1.position.set(19.8, 5.7,9.3);
    ojo1.castShadow = true;
    ojo1.receiveShadow = true;

    var ojo2 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), matOjos);
    ojo2.position.set(20.2, 5.7, 9.3);
    ojo2.castShadow = true;
    ojo2.receiveShadow = true;

    var nariz = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), matNariz);
    nariz.position.set(20, 5.55, 9.3);
    nariz.castShadow = true;
    nariz.receiveShadow = true;

    const SILLON = new THREE.Group();
    
    SILLON.add(
        nariz, ojo2, ojo1, 
        panza, pierna2os, pierna1os, brazo2os, brazo1os, 
        oreja2, oreja1, cabeza, cuerpo, 
        cojin1, brazo2, brazo1, respaldo, asiento
    );
    
    SILLON.position.set(x,y,z);

    return SILLON;
}