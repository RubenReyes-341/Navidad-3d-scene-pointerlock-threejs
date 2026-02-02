import * as THREE from '../js/three.module.js'; 

export default function E01({x,y,z}){

    // --- MATERIALES Y TEXTURAS ---
    
    var texturaTapete = new THREE.TextureLoader().load("./assets/tapete.jpg");
    var textTapete = new THREE.MeshLambertMaterial({map:texturaTapete, side: THREE.DoubleSide});
    //tapete
    var tapete = new THREE.PlaneGeometry(50,70);
    var mesh1011 = new THREE.Mesh(tapete, textTapete);
    mesh1011.rotation.x = 1.57;
    mesh1011.position.y = 1;
    mesh1011.receiveShadow = true; 

    // --- AGRUPACIÓN FINAL ---
    const TAPETEENORME = new THREE.Group();

    TAPETEENORME.add(
    mesh1011
    );

    TAPETEENORME.position.set(x,y,z);
    
    return TAPETEENORME;
}