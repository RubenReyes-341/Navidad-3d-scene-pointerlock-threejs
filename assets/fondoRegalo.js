import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//FONDO DE MONTAÑAS
    var foto=new THREE.PlaneGeometry(50,50);
    var textFoto=new THREE.TextureLoader().load("./assets/montañas.jpg");
    var materialFoto=new THREE.MeshLambertMaterial({map:textFoto,side: THREE.DoubleSide});
    var meshFoto=new THREE.Mesh(foto,materialFoto);
    meshFoto.position.set(0,0,0);

    const MONTAÑA=new THREE.Group();
            MONTAÑA.add(meshFoto);
            MONTAÑA.position.set(x,y,z);
        
            return MONTAÑA;
}