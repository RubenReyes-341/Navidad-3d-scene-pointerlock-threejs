import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    // ÁRBOL  NORMAL

    // Punta
    var cono1 = new THREE.ConeGeometry(1.5, 2, 32);
    var matArbol = new THREE.MeshLambertMaterial({ color: 0x009933 }); 
    var arbol1 = new THREE.Mesh(cono1, matArbol);
    arbol1.position.set(0, 5, 0);
    arbol1.castShadow = true; 
    arbol1.receiveShadow = true;

    // Medio
    var cono2 = new THREE.ConeGeometry(2, 2, 32);
    var arbol2 = new THREE.Mesh(cono2, matArbol); 
    arbol2.position.set(0, 4, 0);
    arbol2.castShadow = true; 
    arbol2.receiveShadow = true;

    // Base 
    var cono3 = new THREE.ConeGeometry(2.5, 2, 32);
    var arbol3 = new THREE.Mesh(cono3, matArbol); 
    arbol3.position.set(0, 3, 0);
    arbol3.castShadow = true; 
    arbol3.receiveShadow = true;
    
    const ARBOLNORMAL = new THREE.Group();
    
    ARBOLNORMAL.add(
        arbol1, arbol2, arbol3
    );

    ARBOLNORMAL.position.set(x,y,z);

    return ARBOLNORMAL;
}