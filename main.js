
var firebaseConfig = {
  apiKey: "AIzaSyA4MJrvvyL1mG1jSyomkFMdFkWQv_u6IKE",
  authDomain: "test-b618a.firebaseapp.com",
  databaseURL: "https://test-b618a-default-rtdb.firebaseio.com",
  projectId: "test-b618a",
  storageBucket: "test-b618a.appspot.com",
  messagingSenderId: "174954815369",
  appId: "1:174954815369:web:475daed2942353a92c8b58",
  measurementId: "G-8377W3SEWP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var playerRef1 = firebase.database().ref("players/");
var x;
var y;
playerRef1.on("child_added", function(data) {
  newPlayer = data.val();

  console.log("x: " + newPlayer.x);
  console.log("y: " + newPlayer.y);
  x = newPlayer.x;
  y = newPlayer.y;
  draw()
});

function preload() {
  people = loadImage("people.png");
}
function setup() {
  canvas = createCanvas(1000, 600);
  canvas.background("#1983c3");
  canvas.center();
}

function draw() {
  image(people, x, y, 50, 100);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed==38){
      console.log("up");
      up();
    }
    if(keypressed==40){
      console.log("down");
      down();
    }
    if(keypressed==37){
      console.log("left");
      left();
    }
    if(keypressed==39){
      console.log("right");
      right();
    }
    if (keypressed == 50){
      console.log("switch");
      switchPeople();
    }
}
function up() {
  if(y >= 10){
    y-=10;
    background("#1983c3");
    playerRef1.update({
      Player1: {
        x: x,
        y: y
      }
  });
  draw();
  }
}
function down() {
  if(y <= 475){
    y+=10;
    background("#1983c3");
    playerRef1.update({
      Player1: {
        x: x,
        y: y
      }
  });
  draw();
  }
}
function right() {
  if(x <= 925){
    x+=10;
    background("#1983c3");
    playerRef1.update({
      Player1: {
        x: x,
        y: y
      }
  });
  draw();
  }
}
function left() {
  if(x >= 10){
    x-=10;
    background("#1983c3");
    playerRef1.update({
      Player1: {
        x: x,
        y: y
      }
  });
  draw();
  }
}