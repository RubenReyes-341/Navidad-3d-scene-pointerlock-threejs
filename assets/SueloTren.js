import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//CUADRO PARA FOTO

//  "FOTO"
    var foto=new THREE.PlaneGeometry(50,50);
    var textFoto=new THREE.TextureLoader().load("./assets/SUELOTREN2.jpg");
    var materialFoto=new THREE.MeshLambertMaterial({map:textFoto,side: THREE.DoubleSide});
    var meshFoto=new THREE.Mesh(foto,materialFoto);
    meshFoto.position.set(0,0,0);
    
    meshFoto.receiveShadow = true;
    //scene.add(mesh9);

    const RIELES=new THREE.Group();
            RIELES.add(meshFoto);
            RIELES.position.set(x,y,z);
        
            return RIELES;
}