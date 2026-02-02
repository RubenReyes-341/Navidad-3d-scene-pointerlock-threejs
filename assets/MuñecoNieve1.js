import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    //MUÑECO DE NIEVE

    // Base
    var esferaBase = new THREE.SphereGeometry(1, 16, 16);
    var matNieve = new THREE.MeshLambertMaterial({ color: 0xffffff }); 
    var meshBase = new THREE.Mesh(esferaBase, matNieve);
    meshBase.position.set(0, 1, 0);
    meshBase.castShadow = true; 
    meshBase.receiveShadow = true;

    // Medio
    var esferaMedio = new THREE.SphereGeometry(0.7, 16, 16);
    var meshMedio = new THREE.Mesh(esferaMedio, matNieve); 
    meshMedio.position.set(0, 2.2, 0);
    meshMedio.castShadow = true; 
    meshMedio.receiveShadow = true;

    // Cabeza
    var esferaCabeza = new THREE.SphereGeometry(0.5, 16, 16);
    var meshCabeza = new THREE.Mesh(esferaCabeza, matNieve);
    meshCabeza.position.set(0, 3.2, 0);
    meshCabeza.castShadow = true; 
    meshCabeza.receiveShadow = true;

    // Sombrero 
    var baseSombrero = new THREE.CylinderGeometry(0.6, 0.6, 0.2, 12);
    var matSombrero = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var meshBaseSombrero = new THREE.Mesh(baseSombrero, matSombrero);
    meshBaseSombrero.position.set(0, 3.6, 0);
    meshBaseSombrero.castShadow = true; 
    meshBaseSombrero.receiveShadow = true;

    // Sombrero
    var copaSombrero = new THREE.CylinderGeometry(0.3, 0.3, 0.7, 12);
    var meshCopaSombrero = new THREE.Mesh(copaSombrero, matSombrero);
    meshCopaSombrero.position.set(0, 4, 0);
    meshCopaSombrero.castShadow = true; 
    meshCopaSombrero.receiveShadow = true;

    // Ojo 1
    var ojoGeo1 = new THREE.SphereGeometry(0.05, 8, 8);
    var ojo1 = new THREE.Mesh(ojoGeo1, matSombrero); 
    ojo1.position.set(0.2, 3.3, 0.5);
    ojo1.castShadow = true; 
    ojo1.receiveShadow = true;

    // Ojo 2
    var ojoGeo2 = new THREE.SphereGeometry(0.05, 8, 8);
    var ojo2 = new THREE.Mesh(ojoGeo2, matSombrero);
    ojo2.position.set(-0.1, 3.3, 0.5);
    ojo2.castShadow = true; 
    ojo2.receiveShadow = true;

    // Nariz
    var narizGeo = new THREE.ConeGeometry(0.08, 0.4, 12);
    var matNariz = new THREE.MeshLambertMaterial({ color: 0xff6600 }); 
    var nariz = new THREE.Mesh(narizGeo, matNariz);
    nariz.position.set(0, 3.2, 0.6);
    nariz.rotation.x = 1.57; 
    nariz.castShadow = true; 
    nariz.receiveShadow = true;

    // Bufanda (Anillo)
    var bufandaParte1 = new THREE.TorusGeometry(0.45, 0.08, 12, 24);
    var matBufanda = new THREE.MeshLambertMaterial({ color: 0xff0000 }); 
    var meshBufanda = new THREE.Mesh(bufandaParte1, matBufanda);
    meshBufanda.position.set(0, 2.9, 0);
    meshBufanda.rotation.x = 1.6; 
    meshBufanda.castShadow = true; 
    meshBufanda.receiveShadow = true;

    // Bufanda 
    var bufandaCaida = new THREE.BoxGeometry(0.2, 0.5, 0.2);
    var meshBufandaCaida = new THREE.Mesh(bufandaCaida, matBufanda);
    meshBufandaCaida.position.set(0.3, 2.6, 0.4);
    meshBufandaCaida.rotation.z = -0.5;
    meshBufandaCaida.castShadow = true; 
    meshBufandaCaida.receiveShadow = true;

    const MUÑECO = new THREE.Group();
    
    MUÑECO.add(
        meshBase, meshMedio, meshCabeza,
        meshBaseSombrero, meshCopaSombrero,
        ojo1, ojo2,
        nariz,
        meshBufanda, meshBufandaCaida
    );

    MUÑECO.position.set(x,y,z);

    return MUÑECO;
}