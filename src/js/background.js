import * as THREE from "three";

const container = document.getElementById(
    "background-canvas"
);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({

    alpha: true,
    antialias: true

});
renderer.setSize(
    window.innerWidth,
    window.innerHeight
);
container.appendChild(
    renderer.domElement
);

// NEURAL NODES
const nodes = [];
const nodeCount = 80;
const nodeGeometry =
new THREE.SphereGeometry(
    0.035,
    12,
    12
);
const nodeMaterial =
new THREE.MeshBasicMaterial({

    color: 0x7c3aed,
    transparent:true,
    opacity:0.8

});
for(let i=0;i<nodeCount;i++){

    const node =
    new THREE.Mesh(
        nodeGeometry,
        nodeMaterial
    );
    node.position.x =
    (Math.random()-0.5)*8;

    node.position.y =
    (Math.random()-0.5)*5;

    node.position.z =
    (Math.random()-0.5)*4;

    scene.add(node);
    nodes.push(node);

}

// CONNECTION LINES
const lineMaterial =
new THREE.LineBasicMaterial({

    color:0xA78BFA,
    transparent:true,
    opacity:0.25

});
const lineGeometry =
new THREE.BufferGeometry();

const linePositions = [];

for(let i=0;i<nodes.length;i++){

    for(let j=i+1;j<nodes.length;j++){

        const distance =
        nodes[i].position.distanceTo(
            nodes[j].position
        );

        if(distance < 1.3){

            linePositions.push(

                nodes[i].position.x,
                nodes[i].position.y,
                nodes[i].position.z,

                nodes[j].position.x,
                nodes[j].position.y,
                nodes[j].position.z

            );

        }

    }

}
lineGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(
        linePositions,
        3
    )

);
const lines =
new THREE.LineSegments(
    lineGeometry,
    lineMaterial
);
scene.add(lines);

// ANIMATION
function animate(){

    requestAnimationFrame(
        animate
    );
    nodes.forEach(
        (node,index)=>{

            node.position.y +=
            Math.sin(
                Date.now()*0.001+index
            )*0.0005;

        }
    );

    scene.rotation.y +=0.0008;
    renderer.render(
        scene,
        camera
    );

}
animate();

// RESPONSIVE
window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

    window.innerWidth,
    window.innerHeight

);
});