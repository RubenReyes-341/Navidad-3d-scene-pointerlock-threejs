import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//  FONDO DE RIELES
    var foto=new THREE.PlaneGeometry(50,50);
    var textFoto=new THREE.TextureLoader().load("./assets/estaciontren.jpg");
    var materialFoto=new THREE.MeshLambertMaterial({map:textFoto,side: THREE.DoubleSide});
    var meshFoto=new THREE.Mesh(foto,materialFoto);
    meshFoto.position.set(0,0,0);

    const ESTACION=new THREE.Group();
            ESTACION.add(meshFoto);
            ESTACION.position.set(x,y,z);
        
            return ESTACION;
}