let x, y, partes, width;

function setup() {
  createCanvas(windowWidth, windowHeight);
  width = windowWidth / 4;
}

function draw() {
  strokeWeight(3);
  fill("#BC2B54");

  ellipse(width-100, 300, 300, 300);
  ellipse(width * 2, 300, 300, 300);
  ellipse(width * 3 + 100, 300, 300, 300);
  strokeWeight(1);
  noLoop();
}


function partirPizza() {
  partes = parseInt(document.querySelector("#inputPizza").value);

  if (partes > 1) {
    let radio = 150;
    let grados = 360 / partes;
    let aux = grados;
    
    let xPizza1 = width - 100;
    let xPizza2 = width * 2;
    let xPizza3 = width * 3 + 100;
    let yCentro = 300;

    draw();

    while (grados <= 360) {
      let x2 = radio * Math.cos((grados * Math.PI) / 180);
      let y2 = radio * Math.sin((grados * Math.PI) / 180);

      let x2P1 = xPizza1 + x2;
      let x2P2 = xPizza2 + x2;
      let x2P3 = xPizza3 + x2;
      y2 = yCentro + y2;

      x2P1 = floor(x2P1);
      x2P2 = floor(x2P2);
      x2P3 = floor(x2P3);
      y2 = floor(y2);

      grados += aux;

      ecuapp(xPizza1, yCentro, x2P1, y2);
      dda(xPizza2, yCentro, x2P2, y2);
      breshm(xPizza3, yCentro, x2P3, y2);
    }
  }
}
