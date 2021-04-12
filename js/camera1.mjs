import * as THREE from '/js/modules/threejs/three.module.js';

import Stats from '/js/modules/threejs/stats.module.js';

let container, camera, scene, renderer, effect, stats;


const objects = [];

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

document.addEventListener( 'mousemove', onDocumentMouseMove );

init();
animate();



function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
    camera.position.z = 3200;

    scene = new THREE.Scene();

    for ( let i = 0; i < 500; i ++ ) {
        let mat = new THREE.MeshBasicMaterial( { color: globals.colors[Math.floor(Math.random() * globals.colors.length)], wireframe: true } );
        let mesh = new THREE.Mesh(
            new THREE.SphereGeometry( 100, 1, Math.floor((Math.random() * 4) + 1) ),
            mat  
        );

        scene.add( mesh );
        objects.push( mesh );

    }


    //

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    stats = new Stats();
    container.appendChild( stats.dom );

    //
    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    effect.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX ) * 10;
    mouseY = ( event.clientY - windowHalfY ) * 10;

}

//

function animate() {

    if (state.doRender){
        for ( let i = 0; i < 500; i ++ ) {
            const color = globals.colors[Math.floor(Math.random() * globals.colors.length)];
            objects[i].material.color.setHex(color);
        }
    
        requestAnimationFrame( animate );
        render();
    }
    else
    {
        requestAnimationFrame( animate );
        if(!state.flushedAfterDoRender)
        {
            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY - camera.position.y ) * .05;
            camera.lookAt( scene.position );
            renderer.render( scene, camera );
            state.flushedAfterDoRender = true;
        }
    }

    stats.update();
    // GLOBAL WEBGL TIC INCREMENT
    state.webgl.tic++;

}

function render() {

    const timer = 0.0001 * Date.now();

    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );

    for ( let i = 0, il = objects.length; i < il; i ++ ) {

        const sphere = objects[ i ];

        sphere.position.x = 5000 * Math.cos( timer + i );
        sphere.position.y = 5000 * Math.sin( timer + i * 1.1 );

    }

    renderer.render( scene, camera );

}