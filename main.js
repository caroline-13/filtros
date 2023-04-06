var narizx=0;
var narizy=0;
var nariz_roja="";
var gato="";
var ojo_derechox=0;
var ojo_izquierdox=0;
function preload(){
    nariz_roja=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
gato=loadImage("https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42100/weary-cat-emoji-clipart-md.png")
}
function setup(){
    canvas=createCanvas(300,300);
    background("lightpink");
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poses = ml5.poseNet(video,listo);
    poses.on("poses",obtenerPoses);
}
function draw(){
   image(video,0,0,300,300);
   circle(narizx,narizy,20);
   image(nariz_roja,narizx -20,narizy -20 ,40,40);
   image(gato,narizx -20,narizy -20 ,diferencia,diferencia);
}
function listo(){
    console.log("estoy listo 😸");
}
function obtenerPoses(resultado){
if(resultados.legth > 0){
    narizx = resultado[0].pose.nose.x;
    narizy = resultado[0].pose.nose.y;
    ojo_derechox = resultado[0].pose.rightEye.x;
    ojo_izquierdox = resultado[0].pose.leftEye.x;
    diferencia = ojo_derechox - ojo_izquierdox;
    console.log(diferencia);
}
}
function tomarFoto(){
save("filtro.png");
}