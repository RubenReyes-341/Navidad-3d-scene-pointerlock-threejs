import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    const CASA = new THREE.Group();
    //TEXTURAS
    var loader = new THREE.TextureLoader();
    var texPared = loader.load("./assets/pared2.jpeg");
    var texTapete = loader.load("./assets/tapete.jpg");
    var texTecho = loader.load("./assets/techo.png");
    texTecho.wrapS = THREE.RepeatWrapping;
    texTecho.wrapT = THREE.RepeatWrapping;
    texTecho.repeat.set(4, 1);
    var texVentana = loader.load("./assets/ventana.png");
    var texDulce = loader.load("./assets/baston dulce.png");
    var texDulce2 = loader.load("./assets/dulcementa1.png");

    // Pared Trasera
    var paredT = new THREE.BoxGeometry(100, 50, 10);
    var textParedes = new THREE.MeshLambertMaterial({ map: texPared, side: THREE.DoubleSide }); 
    var mesh1 = new THREE.Mesh(paredT, textParedes);
    mesh1.position.set(0, 25, -50);
    mesh1.castShadow = true; 
    mesh1.receiveShadow = true;

    // Pared  Derecha
    var paredLD = new THREE.BoxGeometry(10, 50, 100);
    var mesh2 = new THREE.Mesh(paredLD, textParedes); 
    mesh2.position.set(50, 25, 0);
    mesh2.castShadow = true; 
    mesh2.receiveShadow = true;

    // Pared Izquierda
    var paredLI = new THREE.BoxGeometry(10, 50, 100);
    var mesh3 = new THREE.Mesh(paredLI, textParedes);
    mesh3.position.set(-50, 25, 0);
    mesh3.castShadow = true; 
    mesh3.receiveShadow = true;

    // Pared Frontal Izquierda
    var paredDIzq = new THREE.BoxGeometry(25, 50, 10);
    var mesh4 = new THREE.Mesh(paredDIzq, textParedes);
    mesh4.position.set(-35, 25, 50);
    mesh4.castShadow = true; 
    mesh4.receiveShadow = true;

    // Pared Frontal Derecha
    var paredDDer = new THREE.BoxGeometry(25, 50, 10);
    var mesh5 = new THREE.Mesh(paredDDer, textParedes);
    mesh5.position.set(35, 25, 50);
    mesh5.castShadow = true; 
    mesh5.receiveShadow = true;

    // Pared Frontal Centro 
    var paredCentro = new THREE.BoxGeometry(45, 5, 10);
    var mesh6 = new THREE.Mesh(paredCentro, textParedes);
    mesh6.position.set(0, 47.8, 50);
    mesh6.castShadow = true; 
    mesh6.receiveShadow = true;

    // Marco De Puerta
    var puerta = new THREE.CylinderGeometry(32, 32, 10, 4, 2, true);
    var mesh7 = new THREE.Mesh(puerta, textParedes);
    mesh7.rotation.set(1.57, 0.78, 0);
    mesh7.position.set(0, 22.6, 50);
    mesh7.castShadow = true; 
    mesh7.receiveShadow = true;

    // Techo 
    var techo = new THREE.ConeGeometry(80, 50, 4, 1, true);
    var textTecho = new THREE.MeshLambertMaterial({ map: texTecho, side: THREE.DoubleSide }); 
    var mesh8 = new THREE.Mesh(techo, textTecho);
    mesh8.rotation.y = 0.78;
    mesh8.position.set(0, 74, 0);
    mesh8.castShadow = true; 
    mesh8.receiveShadow = true;

    // Suelo 
    var suelo = new THREE.PlaneGeometry(101, 110);
    var textsuelo = new THREE.MeshLambertMaterial({ color: 0xc58345, side: THREE.DoubleSide }); 
    var mesh10 = new THREE.Mesh(suelo, textsuelo);
    mesh10.rotation.x = 1.57;
    mesh10.position.y = 0.2;
    mesh10.receiveShadow = true;

    // Techo Interno
    var suelo2 = new THREE.PlaneGeometry(101, 110);
    var mesh101 = new THREE.Mesh(suelo2, textsuelo); 
    mesh101.rotation.x = 1.57;
    mesh101.position.y = 50;
    mesh101.receiveShadow = true;

    // Tapete 
    var tapete = new THREE.PlaneGeometry(50, 70);
    var textTapete = new THREE.MeshLambertMaterial({ map: texTapete, side: THREE.DoubleSide }); 
    var mesh1011 = new THREE.Mesh(tapete, textTapete);
    mesh1011.rotation.x = 1.57;
    mesh1011.position.y = 1;
    mesh1011.receiveShadow = true;

    // Ventana Derecha
    var ventanaGeo1 = new THREE.BoxGeometry(15, 15, 1);
    var materialVentana = new THREE.MeshLambertMaterial({ map: texVentana, side: THREE.DoubleSide }); 
    var mesh9 = new THREE.Mesh(ventanaGeo1, materialVentana);
    mesh9.position.set(35, 35, 55);
    mesh9.castShadow = true;

    // Ventana Izquierda
    var ventanaGeo2 = new THREE.BoxGeometry(15, 15, 1);
    var ventana3 = new THREE.Mesh(ventanaGeo2, materialVentana);
    ventana3.position.set(-35, 35, 55);
    ventana3.castShadow = true;

    // Bastón 1
    var geoBaston1 = new THREE.CylinderGeometry(5, 5, 50, 15, 2);
    var materialDulce = new THREE.MeshLambertMaterial({ map: texDulce, side: THREE.DoubleSide }); 
    var baston1 = new THREE.Mesh(geoBaston1, materialDulce);
    baston1.position.set(50, 25, 50);
    baston1.castShadow = true; 
    baston1.receiveShadow = true;

    // Bastón 2
    var geoBaston2 = new THREE.CylinderGeometry(5, 5, 50, 15, 2);
    var baston2 = new THREE.Mesh(geoBaston2, materialDulce);
    baston2.position.set(-50, 25, 50);
    baston2.castShadow = true; 
    baston2.receiveShadow = true;

    // Bastón 3
    var geoBaston3 = new THREE.CylinderGeometry(5, 5, 50, 15, 2);
    var baston3 = new THREE.Mesh(geoBaston3, materialDulce);
    baston3.position.set(50, 25, -50);
    baston3.castShadow = true; 
    baston3.receiveShadow = true;

    // Bastón 4
    var geoBaston4 = new THREE.CylinderGeometry(5, 5, 50, 15, 2);
    var baston4 = new THREE.Mesh(geoBaston4, materialDulce);
    baston4.position.set(-50, 25, -50);
    baston4.castShadow = true; 
    baston4.receiveShadow = true;

    // Dulce de Menta 
    var dulce = new THREE.CylinderGeometry(10, 10, 1, 20, 1);
    var materialDulce2 = new THREE.MeshLambertMaterial({ map: texDulce2, side: THREE.DoubleSide });
    var mesh11 = new THREE.Mesh(dulce, materialDulce2);
    mesh11.position.set(0, 65, 40);
    mesh11.rotation.x = 0.7;
    mesh11.castShadow = true; 
    mesh11.receiveShadow = true;

    //ARBUSTOS

    // Grupo de Arbustos
    var grupoArbustos = new THREE.Group();    var textArbus = new THREE.MeshLambertMaterial({ color: 0x7db880, side: THREE.DoubleSide }); 

    var arbustoGeo1 = new THREE.SphereGeometry(5, 15, 15);
    var arbusto1 = new THREE.Mesh(arbustoGeo1, textArbus);
    arbusto1.position.set(0, 0, 0);
    arbusto1.castShadow = true; arbusto1.receiveShadow = true;
    grupoArbustos.add(arbusto1);

    var arbustoGeo2 = new THREE.SphereGeometry(5, 15, 15);
    var arbusto2 = new THREE.Mesh(arbustoGeo2, textArbus);
    arbusto2.position.set(9, 0, 0);
    arbusto2.castShadow = true; arbusto2.receiveShadow = true;
    grupoArbustos.add(arbusto2);

    var arbustoGeo3 = new THREE.SphereGeometry(5, 15, 15);
    var arbusto3 = new THREE.Mesh(arbustoGeo3, textArbus);
    arbusto3.position.set(18, 0, 0);
    arbusto3.castShadow = true; arbusto3.receiveShadow = true;
    grupoArbustos.add(arbusto3);

    grupoArbustos.position.set(27, 3, 57);

    // Grupo de Arbustos 
    var grupoArbustos2 = new THREE.Group();

    var arbustoGeo4 = new THREE.SphereGeometry(5, 15, 15);
    var arbusto4 = new THREE.Mesh(arbustoGeo4, textArbus);
    arbusto4.position.set(0, 0, 0);
    arbusto4.castShadow = true; arbusto4.receiveShadow = true;
    grupoArbustos2.add(arbusto4);

    var arbustoGeo5 = new THREE.SphereGeometry(5, 15, 15);
    var arbusto5 = new THREE.Mesh(arbustoGeo5, textArbus);
    arbusto5.position.set(9, 0, 0);
    arbusto5.castShadow = true; arbusto5.receiveShadow = true;
    grupoArbustos2.add(arbusto5);

    var arbustoGeo6 = new THREE.SphereGeometry(5, 15, 15);
    var arbusto6 = new THREE.Mesh(arbustoGeo6, textArbus);
    arbusto6.position.set(18, 0, 0);
    arbusto6.castShadow = true; arbusto6.receiveShadow = true;
    grupoArbustos2.add(arbusto6);

    grupoArbustos2.position.set(-46, 3, 57);

    var textCosaBlanca = new THREE.MeshLambertMaterial({ color: 0xfee2cc, side: THREE.DoubleSide });
    var geoNieve = new THREE.SphereGeometry(2, 15, 15);

    // BOLAS DE TECHO
    var nieve1 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve1.position.set(-50, 56, 50);
    nieve1.castShadow = true; nieve1.receiveShadow = true;

    var nieve2 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve2.position.set(-40, 65, 40);
    nieve2.castShadow = true; nieve2.receiveShadow = true;

    var nieve3 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve3.position.set(-30, 74, 30);
    nieve3.castShadow = true; nieve3.receiveShadow = true;

    var nieve4 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve4.position.set(-20, 83, 20);
    nieve4.castShadow = true; nieve4.receiveShadow = true;

    var nieve5 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve5.position.set(-10, 92, 10);
    nieve5.castShadow = true; nieve5.receiveShadow = true;

    // BOLAS DE TECHO EN LA PUNTA
    var nievePunta = new THREE.Mesh(geoNieve, textCosaBlanca);
    nievePunta.position.set(0, 99, 5);
    nievePunta.castShadow = true; nievePunta.receiveShadow = true;

    // BOLAS DE TECHO
    var nieve6 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve6.position.set(10, 92, 10);
    nieve6.castShadow = true; nieve6.receiveShadow = true;

    var nieve7 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve7.position.set(20, 83, 20);
    nieve7.castShadow = true; nieve7.receiveShadow = true;

    var nieve8 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve8.position.set(30, 74, 30);
    nieve8.castShadow = true; nieve8.receiveShadow = true;

    var nieve9 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve9.position.set(40, 65, 40);
    nieve9.castShadow = true; nieve9.receiveShadow = true;

    var nieve10 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieve10.position.set(50, 56, 50);
    nieve10.castShadow = true; nieve10.receiveShadow = true;

    // BOLAS DE TECHO
    var nieveBajo1 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo1.position.set(-40, 56, 50); 
    nieveBajo1.castShadow = true; nieveBajo1.receiveShadow = true;

    var nieveBajo2 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo2.position.set(-30, 56, 50); 
    nieveBajo2.castShadow = true; nieveBajo2.receiveShadow = true;

    var nieveBajo3 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo3.position.set(-20, 56, 50); 
    nieveBajo3.castShadow = true; nieveBajo3.receiveShadow = true;

    var nieveBajo4 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo4.position.set(-10, 56, 50); 
    nieveBajo4.castShadow = true; nieveBajo4.receiveShadow = true;

    var nieveBajo5 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo5.position.set(0, 56, 50); 
    nieveBajo5.castShadow = true; nieveBajo5.receiveShadow = true;

    var nieveBajo6 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo6.position.set(10, 56, 50); 
    nieveBajo6.castShadow = true; nieveBajo6.receiveShadow = true;

    var nieveBajo7 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo7.position.set(20, 56, 50); 
    nieveBajo7.castShadow = true; nieveBajo7.receiveShadow = true;

    var nieveBajo8 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo8.position.set(30, 56, 50); 
    nieveBajo8.castShadow = true; nieveBajo8.receiveShadow = true;

    var nieveBajo9 = new THREE.Mesh(geoNieve, textCosaBlanca);
    nieveBajo9.position.set(40, 56, 50); 
    nieveBajo9.castShadow = true; nieveBajo9.receiveShadow = true;

    CASA.add(
        mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh10, mesh101, mesh1011,
        mesh9, ventana3, 
        baston1, baston2, baston3, baston4, 
        mesh11,
        grupoArbustos, grupoArbustos2,
        nieve1, nieve2, nieve3, nieve4, nieve5, nievePunta, 
        nieve6, nieve7, nieve8, nieve9, nieve10,
        nieveBajo1, nieveBajo2, nieveBajo3, nieveBajo4, nieveBajo5, 
        nieveBajo6, nieveBajo7, nieveBajo8, nieveBajo9
    );

    CASA.position.set(x,y,z);
    
    return CASA;
}