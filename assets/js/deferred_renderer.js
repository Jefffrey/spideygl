 var canvas = document.querySelector("#c");
 var gl = canvas.getContext("webgl2");
 
 if (!gl) {
   console.log("No WebGL2");
 } else {
   console.log("WebGL2 supported");
 }
 
