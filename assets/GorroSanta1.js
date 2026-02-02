import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

var matBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff });

// Cono rojo
var gorroGeo = new THREE.ConeGeometry(1.2, 2.5, 32);
var matRojoGorro = new THREE.MeshLambertMaterial({ color: 0xff0000 });
var gorro = new THREE.Mesh(gorroGeo, matRojoGorro);
gorro.position.set(0,3, 0);
gorro.rotation.x = 6.2; 

// Borde blanco 
var bordeGorroGeo = new THREE.TorusGeometry(1.1, 0.2, 16, 100);
var bordeGorro = new THREE.Mesh(bordeGorroGeo, matBlanco);
bordeGorro.position.set(0, 1.8, 0);
bordeGorro.rotation.x = 1.5;

var bolaGeo = new THREE.SphereGeometry(0.25, 16, 16);
var bola = new THREE.Mesh(bolaGeo, matBlanco);
bola.position.set(0, 4.1, 0);

        const GORRO=new THREE.Group();
        GORRO.add(gorro,bordeGorro,bola);
        GORRO.position.set(x,y,z);
    
        return GORRO;
}