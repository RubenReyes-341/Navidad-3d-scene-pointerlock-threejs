import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    var matCaja = new THREE.MeshLambertMaterial({ color: 0x49EE64, side: THREE.DoubleSide }); // Verde
    var matCinta = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide }); // Blanco
    var matMoño = new THREE.MeshLambertMaterial({ color: 0xffff00, side: THREE.DoubleSide }); // Amarillo


    // CAJA 
    var geoCaja = new THREE.BoxGeometry(50, 50, 50);
    var MeshCaja1 = new THREE.Mesh(geoCaja, matCaja);
    MeshCaja1.castShadow = true; 
    MeshCaja1.receiveShadow = true;


    // CINTAS
    // Tira Frente
    var geoCintaVert = new THREE.BoxGeometry(10, 50, 1); 
    var cintaFrente = new THREE.Mesh(geoCintaVert, matCinta);
    cintaFrente.position.set(0, 0, 25.2); 
    cintaFrente.castShadow = true; cintaFrente.receiveShadow = true;

    // Tira Atrás 
    var cintaAtras = cintaFrente.clone();
    cintaAtras.position.set(0, 0, -25.2);
    cintaAtras.castShadow = true; cintaAtras.receiveShadow = true;

    // Tira Arriba 
    var geoCintaTapa = new THREE.BoxGeometry(10, 1, 50.4); 
    var cintaArriba1 = new THREE.Mesh(geoCintaTapa, matCinta);
    cintaArriba1.position.set(0, 25.2, 0); 
    cintaArriba1.castShadow = true; cintaArriba1.receiveShadow = true;

    // Tira Izquierda
    var geoCintaLado = new THREE.BoxGeometry(1, 50, 10); 
    var cintaIzq = new THREE.Mesh(geoCintaLado, matCinta);
    cintaIzq.position.set(-25.2, 0, 0); 
    cintaIzq.castShadow = true; cintaIzq.receiveShadow = true;

    // Tira Derecha 
    var cintaDer = cintaIzq.clone();
    cintaDer.position.set(25.2, 0, 0);
    cintaDer.castShadow = true; cintaDer.receiveShadow = true;

    // Tira Arriba 
    var geoCintaTapa2 = new THREE.BoxGeometry(50.4, 1, 10); 
    var cintaArriba2 = new THREE.Mesh(geoCintaTapa2, matCinta);
    cintaArriba2.position.set(0, 25.3, 0); 
    cintaArriba2.castShadow = true; cintaArriba2.receiveShadow = true;


    // MOÑO
    // Nudo 
    var geoNudo = new THREE.BoxGeometry(4, 4, 4);
    var nudo = new THREE.Mesh(geoNudo, matMoño);
    nudo.position.set(0, 27, 0); 
    nudo.castShadow = true;

    // Lazo
    var geoLazo = new THREE.CylinderGeometry(7, 7, 8, 32, 1, true);

    // Lazo Izquierdo
    var lazo1 = new THREE.Mesh(geoLazo, matMoño);
    lazo1.position.set(-6, 28, 0); 
    lazo1.rotation.x = Math.PI / 2; 
    lazo1.rotation.z = Math.PI / 2; 
    lazo1.scale.set(1, 1, 0.3); 
    lazo1.castShadow = true;

    // Lazo Derecho 
    var lazo2 = lazo1.clone();
    lazo2.position.set(6, 28, 0); 
    lazo2.castShadow = true;

    // Lazo Pequeño 
    var lazo3 = lazo1.clone();
    lazo3.scale.set(0.7, 0.7, 0.3); 
    lazo3.position.set(0, 28, 0);
    lazo3.rotation.y = Math.PI / 2; 
    lazo3.castShadow = true;

    const REGALOVERDE = new THREE.Group();

    REGALOVERDE.add(
        MeshCaja1,
        cintaFrente, cintaAtras, cintaArriba1,
        cintaIzq, cintaDer, cintaArriba2,
        nudo, lazo1, lazo2, lazo3
    );

    REGALOVERDE.position.set(x, y, z);
    
    return REGALOVERDE;
}