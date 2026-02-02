import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    //ÁRBOL

    //Punta
    var cono1 = new THREE.ConeGeometry(1.5, 2, 32);
    var matArbol = new THREE.MeshLambertMaterial({ color: 0x009933 }); 
    var arbol1 = new THREE.Mesh(cono1, matArbol);
    arbol1.position.set(0, 5, 0);
    arbol1.castShadow = true; 
    arbol1.receiveShadow = true;

    // Parte del Medio
    var cono2 = new THREE.ConeGeometry(2, 2, 32);
    var arbol2 = new THREE.Mesh(cono2, matArbol);
    arbol2.position.set(0, 4, 0);
    arbol2.castShadow = true; 
    arbol2.receiveShadow = true;

    // Base del árbol
    var cono3 = new THREE.ConeGeometry(2.5, 2, 32);
    var arbol3 = new THREE.Mesh(cono3, matArbol);
    arbol3.position.set(0, 3, 0);
    arbol3.castShadow = true; 
    arbol3.receiveShadow = true;

    // Estrella
    var estrellaGeo = new THREE.TetrahedronGeometry(0.4);
    var matEstrella = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    var estrella = new THREE.Mesh(estrellaGeo, matEstrella);
    estrella.position.set(0, 6.5, 0);
    estrella.rotation.x = 0.5;
    estrella.castShadow = true;


    //ESFERAS

    // Esfera Roja
    var geoEsfera1 = new THREE.SphereGeometry(0.25, 12, 12);
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    var esfera1 = new THREE.Mesh(geoEsfera1, matRojo);
    esfera1.position.set(0, 2.5, 2.2); 
    esfera1.castShadow = true;

    // Esfera amarilla
    var geoEsfera2 = new THREE.SphereGeometry(0.25, 12, 12);
    var matDorado = new THREE.MeshLambertMaterial({ color: 0xffd700 });
    var esfera2 = new THREE.Mesh(geoEsfera2, matDorado);
    esfera2.position.set(1.8, 2.5, 1); 
    esfera2.castShadow = true;

    // Esfera Azul
    var geoEsfera3 = new THREE.SphereGeometry(0.25, 12, 12);
    var matAzul = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    var esfera3 = new THREE.Mesh(geoEsfera3, matAzul);
    esfera3.position.set(-1.8, 2.5, 1); 
    esfera3.castShadow = true;

    // Esfera amarilla
    var geoEsfera4 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera4 = new THREE.Mesh(geoEsfera4, matDorado); 
    esfera4.position.set(0, 2.5, -2.2); 
    esfera4.castShadow = true;

    // Esfera Azul
    var geoEsfera5 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera5 = new THREE.Mesh(geoEsfera5, matAzul);
    esfera5.position.set(0.8, 3.8, 1.5); 
    esfera5.castShadow = true;

    // Esfera Roja
    var geoEsfera6 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera6 = new THREE.Mesh(geoEsfera6, matRojo);
    esfera6.position.set(-0.8, 3.8, 1.5); 
    esfera6.castShadow = true;

    // Esfera Roja 
    var geoEsfera7 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera7 = new THREE.Mesh(geoEsfera7, matRojo);
    esfera7.position.set(1.5, 3.8, -0.5); 
    esfera7.castShadow = true;

    // Esfera Dorada
    var geoEsfera8 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera8 = new THREE.Mesh(geoEsfera8, matDorado);
    esfera8.position.set(-1.5, 3.8, -0.5); 
    esfera8.castShadow = true;

    // Esfera Dorada
    var geoEsfera9 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera9 = new THREE.Mesh(geoEsfera9, matDorado);
    esfera9.position.set(0, 4.8, 1.2); 
    esfera9.castShadow = true;

    // Esfera Azul 
    var geoEsfera10 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera10 = new THREE.Mesh(geoEsfera10, matAzul);
    esfera10.position.set(1, 4.8, -0.5); 
    esfera10.castShadow = true;

    // Esfera Roja
    var geoEsfera11 = new THREE.SphereGeometry(0.25, 12, 12);
    var esfera11 = new THREE.Mesh(geoEsfera11, matRojo);
    esfera11.position.set(-1, 4.8, -0.5); 
    esfera11.castShadow = true;


    // CINTAS
    
    // Cinta Inferior
    var geoCinta1 = new THREE.TorusGeometry(1.6, 0.1, 8, 30);
    var matCinta = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var cinta1 = new THREE.Mesh(geoCinta1, matCinta);
    cinta1.position.set(0, 3.5, 0);
    cinta1.rotation.set(1.7, 0.2, 0);

    // Cinta Superior
    var geoCinta2 = new THREE.TorusGeometry(1.1, 0.1, 8, 30);
    var cinta2 = new THREE.Mesh(geoCinta2, matCinta);
    cinta2.position.set(0, 4.5, 0);
    cinta2.rotation.set(-1.7, 0.2, 0);

    const ARBOL = new THREE.Group();

    ARBOL.add(
        arbol1, arbol2, arbol3, estrella,
        esfera1, esfera2, esfera3, esfera4,
        esfera5, esfera6, esfera7, esfera8,
        esfera9, esfera10, esfera11,
        cinta1, cinta2
    );

    ARBOL.position.set(x,y,z);

    return ARBOL;
}