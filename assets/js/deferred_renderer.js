(async() => {

  var vertexShaderSource = `#version 300 es

  in vec4 a_position;

  void main() {
    gl_Position = a_position;
  }
  `;

  var fragmentShaderSource = `#version 300 es

  // pick high precision
  precision highp float;

  out vec4 outColor;

  void main() {
    outColor = vec4(1, 0.5, 0.5, 1);
  }
  `;

   var canvas = document.querySelector("#c");
   var gl = canvas.getContext("webgl2");

   const response = await fetch("assets/gltf/reach_spartan/scene.gltf");
   const gltfJson = await response.json();
   console.log(gltfJson);

   if (!gl) {
     console.log("No WebGL2");
   } else {
     console.log("WebGL2 supported");
   }

 })();
