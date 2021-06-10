'use strict'



function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderImage()
}



function renderImage() {
    var images = getImages()
    var strHtml = images.map((img)=> {
        gMeme.selectedImgId = img.id;
        return `<img src="${img.url}" onclick="getId(${img.id})"></img>`

    })
    document.querySelector('.grid-container').innerHTML = strHtml

}



function drawImg() {
    var img = new Image()
    img.src = getSrcUrl()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


function getSrcUrl(){
    var img = gImgs.filter((img) =>{
        if(gMeme.selectedImgId === img.id) {
            return img
        }
    })
    return img[0].url
}


function updateGmeme(txt, x, y) {
    gMeme.lines[0].txt = txt;
    drawText(gMeme.lines[0].txt, x, y)
}

function drawText(text, x, y) {
    // gCtx.lineWidth = 3;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '70px Impact'
    // gCtx.textAlign = 'center'
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