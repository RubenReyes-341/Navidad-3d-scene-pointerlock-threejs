import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    // TREN

    // Cabina
    var cabinaGeo = new THREE.BoxGeometry(4, 3, 3);
    var matCabina = new THREE.MeshLambertMaterial({ color: 0x009933 }); 
    var cabina = new THREE.Mesh(cabinaGeo, matCabina);
    cabina.position.set(0, 1.5, 0);
    cabina.castShadow = true; 
    cabina.receiveShadow = true;

    // Ventana
    var ventanaGeo = new THREE.BoxGeometry(2, 2, 0.2);
    var matVentana = new THREE.MeshLambertMaterial({ color: 0xffff66 }); 
    var ventana = new THREE.Mesh(ventanaGeo, matVentana);
    ventana.position.set(0, 1.5, 1.6);
    ventana.receiveShadow = true;

    // Techo
    var techoGeo = new THREE.BoxGeometry(4.5, 0.7, 3.5);
    var matTecho = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var techo = new THREE.Mesh(techoGeo, matTecho);
    techo.position.set(0, 3, 0);
    techo.castShadow = true; 
    techo.receiveShadow = true;

    // Frente del tren
    var frenteGeo = new THREE.BoxGeometry(3, 2.5, 3);
    var matFrente = new THREE.MeshLambertMaterial({ color: 0xff0000 }); 
    var frente = new THREE.Mesh(frenteGeo, matFrente);
    frente.position.set(-3.5, 1.2, 0);
    frente.castShadow = true; 
    frente.receiveShadow = true;

    // Chimenea
    var chimeneaGeo = new THREE.CylinderGeometry(0.4, 0.4, 2, 32);
    var matChimenea = new THREE.MeshLambertMaterial({ color: 0x000000 }); 
    var chimenea = new THREE.Mesh(chimeneaGeo, matChimenea);
    chimenea.position.set(-3.5, 3, 0);
    chimenea.castShadow = true; 
    chimenea.receiveShadow = true;


    // RUEDAS LOCOMOTORA
    var ruedaGeo = new THREE.CylinderGeometry(1, 1, 0.5, 32);
    var geoCentro = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 32);

    // Rueda 1
    var rueda1 = new THREE.Mesh(ruedaGeo, matFrente);
    rueda1.rotation.x = 1.6;
    rueda1.position.set(-4.5, 0.5, 1.7);
    rueda1.castShadow = true; rueda1.receiveShadow = true;

    var centro1 = new THREE.Mesh(geoCentro, matCabina);
    centro1.rotation.z = 4;
    centro1.position.set(-4.5, 0.5, 1.2);
    centro1.castShadow = true; centro1.receiveShadow = true;

    // Rueda 2
    var rueda2 = new THREE.Mesh(ruedaGeo, matFrente);
    rueda2.rotation.x = 1.6;
    rueda2.position.set(-4.5, 0.5, -1.7);
    rueda2.castShadow = true; rueda2.receiveShadow = true;

    var centro2 = new THREE.Mesh(geoCentro, matCabina);
    centro2.rotation.z = 4;
    centro2.position.set(-4.5, 0.5, -1.2);
    centro2.castShadow = true; centro2.receiveShadow = true;

    // Rueda 3
    var rueda3 = new THREE.Mesh(ruedaGeo, matFrente);
    rueda3.rotation.x = 1.6;
    rueda3.position.set(1.5, 0.5, 1.7);
    rueda3.castShadow = true; rueda3.receiveShadow = true;

    var centro3 = new THREE.Mesh(geoCentro, matCabina);
    centro3.rotation.z = 4;
    centro3.position.set(1.5, 0.5, 1.2);
    centro3.castShadow = true; centro3.receiveShadow = true;

    // Rueda 4
    var rueda4 = new THREE.Mesh(ruedaGeo, matFrente);
    rueda4.rotation.x = 1.6;
    rueda4.position.set(1.5, 0.5, -1.7);
    rueda4.castShadow = true; rueda4.receiveShadow = true;

    var centro4 = new THREE.Mesh(geoCentro, matCabina);
    centro4.rotation.z = 4;
    centro4.position.set(1.5, 0.5, -1.2);
    centro4.castShadow = true; centro4.receiveShadow = true;


    // LUCES NAVIDEÑAS 
    var luzGeo = new THREE.SphereGeometry(0.4, 16, 16);
    var matLuzYellow = new THREE.MeshLambertMaterial({ color:0xffff00 });
    var matLuzGreen = new THREE.MeshLambertMaterial({ color:0x00ff00 });
    var matLuzRed = new THREE.MeshLambertMaterial({ color:0xff0000 });

    // Lado 1
    var luz1 = new THREE.Mesh(luzGeo, matLuzYellow);
    luz1.position.set(0, 3.2, 1.8);
    luz1.castShadow = true;

    var luz2 = new THREE.Mesh(luzGeo, matLuzGreen);
    luz2.position.set(1, 3.2, 1.8);
    luz2.castShadow = true;

    var luz3 = new THREE.Mesh(luzGeo, matLuzRed);
    luz3.position.set(-1, 3.2, 1.8);
    luz3.castShadow = true;

    // Lado 2
    var luz4 = new THREE.Mesh(luzGeo, matLuzYellow);
    luz4.position.set(0, 3.2, -1.8);
    luz4.castShadow = true;

    var luz5 = new THREE.Mesh(luzGeo, matLuzGreen);
    luz5.position.set(1, 3.2, -1.8);
    luz5.castShadow = true;

    var luz6 = new THREE.Mesh(luzGeo, matLuzRed);
    luz6.position.set(-1, 3.2, -1.8);
    luz6.castShadow = true;


    // VAGÓN 1

    // Cuerpo Vagón
    var vagonGeo = new THREE.BoxGeometry(5, 2, 3);
    var matVagon = new THREE.MeshLambertMaterial({ color: 0xff3333 }); 
    var vagon1 = new THREE.Mesh(vagonGeo, matVagon);
    vagon1.position.set(7, 1, 0);
    vagon1.castShadow = true; vagon1.receiveShadow = true;

    // Ruedas Vagón 1
    var vr1 = new THREE.Mesh(ruedaGeo, matFrente);
    vr1.rotation.x = 1.6;
    vr1.position.set(6, 0.5, 1.7); 
    vr1.castShadow = true; vr1.receiveShadow = true;

    var vr2 = new THREE.Mesh(ruedaGeo, matFrente);
    vr2.rotation.x = 1.6;
    vr2.position.set(6, 0.5, -1.7); 
    vr2.castShadow = true; vr2.receiveShadow = true;

    var vr3 = new THREE.Mesh(ruedaGeo, matFrente);
    vr3.rotation.x = 1.6;
    vr3.position.set(8, 0.5, 1.7); 
    vr3.castShadow = true; vr3.receiveShadow = true;

    var vr4 = new THREE.Mesh(ruedaGeo, matFrente);
    vr4.rotation.x = 1.6;
    vr4.position.set(8, 0.5, -1.7); 
    vr4.castShadow = true; vr4.receiveShadow = true;

    // Regalo 1
    var regaloGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    var matReg1 = new THREE.MeshLambertMaterial({ color: 0x27ABB7 });
    var regalo1 = new THREE.Mesh(regaloGeo, matReg1);
    regalo1.position.set(6, 2.5, 0);
    regalo1.castShadow = true; regalo1.receiveShadow = true;

    // Lazos Regalo 1
    var lazoGeo = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
    var matLazo = new THREE.MeshLambertMaterial({ color: 0xff0000 }); 
    
    var lazoReg1_1 = new THREE.Mesh(lazoGeo, matLazo);
    lazoReg1_1.rotation.x = 10;
    lazoReg1_1.position.set(6, 3, 0);
    lazoReg1_1.castShadow = true;

    var lazoReg1_2 = new THREE.Mesh(lazoGeo, matLazo);
    lazoReg1_2.rotation.x = 40;
    lazoReg1_2.position.set(6, 3, 0.2);
    lazoReg1_2.castShadow = true;

    // Regalo 2 
    var matReg2 = new THREE.MeshLambertMaterial({ color: 0xff9900 });
    var regalo2 = new THREE.Mesh(regaloGeo, matReg2);
    regalo2.position.set(8, 2.5, 0);
    regalo2.castShadow = true; regalo2.receiveShadow = true;

    // Lazos Regalo 2
    var lazoReg2_1 = new THREE.Mesh(lazoGeo, matLazo);
    lazoReg2_1.rotation.x = 10;
    lazoReg2_1.position.set(8, 3, 0);
    lazoReg2_1.castShadow = true;

    var lazoReg2_2 = new THREE.Mesh(lazoGeo, matLazo);
    lazoReg2_2.rotation.x = 40;
    lazoReg2_2.position.set(8, 3, 0.2);
    lazoReg2_2.castShadow = true;

    // Regalo 3
    var regaloGeoSmall = new THREE.BoxGeometry(1, 1.5, 1.5);
    var matReg3 = new THREE.MeshLambertMaterial({ color: 0x26B632 });
    var regalo3 = new THREE.Mesh(regaloGeoSmall, matReg3);
    regalo3.position.set(7, 4, 0);
    regalo3.castShadow = true; regalo3.receiveShadow = true;

    // Lazos Regalo 3
    var lazoGeoSmall = new THREE.TorusGeometry(0.4, 0.1, 16, 100);
    var lazoReg3_1 = new THREE.Mesh(lazoGeoSmall, matLazo);
    lazoReg3_1.rotation.x = 10;
    lazoReg3_1.position.set(7, 4.6, 0);
    lazoReg3_1.castShadow = true;

    var lazoReg3_2 = new THREE.Mesh(lazoGeoSmall, matLazo);
    lazoReg3_2.rotation.x = 40;
    lazoReg3_2.position.set(7, 4.6, 0.2);
    lazoReg3_2.castShadow = true;


    // VAGÓN 2 

    // Cuerpo Vagón 2
    var matVagon2 = new THREE.MeshLambertMaterial({ color: 0xff4444 });
    var vagon2 = new THREE.Mesh(vagonGeo, matVagon2);
    vagon2.position.set(14, 1, 0);
    vagon2.castShadow = true; vagon2.receiveShadow = true;

    // Ruedas Vagón 2
    var rv1 = new THREE.Mesh(ruedaGeo, matFrente);
    rv1.rotation.x = 1.6;
    rv1.position.set(13, 0.5, 1.7); 
    rv1.castShadow = true; rv1.receiveShadow = true;

    var rv2 = new THREE.Mesh(ruedaGeo, matFrente);
    rv2.rotation.x = 1.6;
    rv2.position.set(13, 0.5, -1.7); 
    rv2.castShadow = true; rv2.receiveShadow = true;

    var rv3 = new THREE.Mesh(ruedaGeo, matFrente);
    rv3.rotation.x = 1.6;
    rv3.position.set(15, 0.5, 1.7); 
    rv3.castShadow = true; rv3.receiveShadow = true;

    var rv4 = new THREE.Mesh(ruedaGeo, matFrente);
    rv4.rotation.x = 1.6;
    rv4.position.set(15, 0.5, -1.7); 
    rv4.castShadow = true; rv4.receiveShadow = true;

    // Árbol Navideño
    var cono1 = new THREE.ConeGeometry(1.5, 2, 32);
    var cono2 = new THREE.ConeGeometry(2, 2, 32);
    var cono3 = new THREE.ConeGeometry(2.5, 2, 32);
    var arbol1 = new THREE.Mesh(cono1, matCabina);
    arbol1.position.set(14, 5, 0);
    arbol1.castShadow = true; arbol1.receiveShadow = true;

    var arbol2 = new THREE.Mesh(cono2, matCabina);
    arbol2.position.set(14, 4, 0);
    arbol2.castShadow = true; arbol2.receiveShadow = true;

    var arbol3 = new THREE.Mesh(cono3, matCabina);
    arbol3.position.set(14, 3, 0);
    arbol3.castShadow = true; arbol3.receiveShadow = true;

    // Estrella
    var estrellaGeo = new THREE.TetrahedronGeometry(0.4);
    var matEstrella = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    var estrella = new THREE.Mesh(estrellaGeo, matEstrella);
    estrella.position.set(14, 6.5, 0);
    estrella.castShadow = true;

    const TREN = new THREE.Group();
    
    TREN.add(
        cabina, ventana, techo, frente, chimenea,
        rueda1, centro1, rueda2, centro2, rueda3, centro3, rueda4, centro4,
        luz1, luz2, luz3, luz4, luz5, luz6,
        vagon1, vr1, vr2, vr3, vr4,
        regalo1, lazoReg1_1, lazoReg1_2,
        regalo2, lazoReg2_1, lazoReg2_2,
        regalo3, lazoReg3_1, lazoReg3_2,
        vagon2, rv1, rv2, rv3, rv4,
        arbol1, arbol2, arbol3, estrella
    );

    TREN.position.set(x,y,z);

    return TREN;
}