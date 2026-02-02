import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//  FONDO DE ESTACION
    var foto=new THREE.PlaneGeometry(50,50);
    var textFoto=new THREE.TextureLoader().load("./assets/estacion.png");
    var materialFoto=new THREE.MeshLambertMaterial({map:textFoto,side: THREE.DoubleSide});
    var meshFoto=new THREE.Mesh(foto,materialFoto);
    meshFoto.position.set(0,0,0);

    const ESTACION2=new THREE.Group();
            ESTACION2.add(meshFoto);
            ESTACION2.position.set(x,y,z);
        
            return ESTACION2;
}