import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//ESFERA
    var esfera = new THREE.SphereGeometry( 15, 32, 16 ); 
    var matEsfera = new THREE.MeshLambertMaterial({
        color: 0xa6181e,side:THREE.DoubleSide
    }); 
    var meshEsfera = new THREE.Mesh(esfera,matEsfera);

//LO DE ARRIBA
    var sosten = new THREE.CylinderGeometry(5,5,5,25);
    var matSos = new THREE.MeshBasicMaterial({
        color:0xdaba4f,side:THREE.DoubleSide
    });
    var meshSos= new THREE.Mesh(sosten,matSos);
    meshSos.position.set(0,16,0);

//ARITO
    var arito = new THREE.TorusGeometry(4,.5, 16, 100 ); 
    var matArito = new THREE.MeshBasicMaterial({
        color: 0xffff00,side:THREE.DoubleSide
    }); 
    var meshArito = new THREE.Mesh(arito,matArito);
    meshArito.position.set(0,18,0);

        const ESFERA=new THREE.Group();
        ESFERA.add(meshEsfera,meshArito,meshSos);
        ESFERA.position.set(x,y,z);
    
        return ESFERA;
}