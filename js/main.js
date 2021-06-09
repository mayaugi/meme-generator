'use strict'

var gCanvas;
var gCtx;
var gKeywords = {'happy': 12, 'funny': 1 }
var gImgs = [{ id: 1, url: '/img/meme-imgs/1.jpg', keywords: ['happy, cheers'] }];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    drawImg2()
    drawText(text, x, y)
}










// function drawImg() {
//     var elImg = document.querySelector('img')
//     gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
//     // console.log(gCanvas.width);
// }

function drawImg2() {
    var img = new Image()
    img.src = '/img/meme-imgs/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Montserrat-Regular'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


// function downloadCanvas(elLink) {
//     const data = gCanvas.toDataURL()
//     console.log('DATA', data);
//     elLink.href = data
//     elLink.download = 'puki'
// }

// window.addEventListener('resize', function(){
//     gCanvas.width = window.innerWidth
//     gCanvas.height = window.innerHeight
//     resizeCanvas()
// })

// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container');
//     // Note: changing the canvas dimension this way clears the canvas
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }

// function saveAndRestoreExample() {
//     gCtx.strokeStyle = 'red'
//     gCtx.fillStyle = 'white'
//     drawText('Before save', 180, 60)
//     gCtx.save()
//     gCtx.strokeStyle = 'black'
//     gCtx.fillStyle = 'red'
//     drawText('After save and change', 180, 160)
//     gCtx.restore()
//     drawText('After restore', 100, 360)
// }