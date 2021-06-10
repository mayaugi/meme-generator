'use strict'

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderImage()
    
}



function renderImage() {
    var images = getImages()
    var strHtml = images.map((img) => {
        gMeme.selectedImgId = img.id;
        return `<img src="${img.url}" onclick="getId(${img.id})"></img>`
    })
    document.querySelector('.grid-container').innerHTML = strHtml.join('')

}



function drawImg() {
    console.log('in drawImg')
    var img = new Image()
    img.src = `${gImgs[gMeme.selectedImgId - 1].url}`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[0].txt, 100, 100, gMeme.lines[0].size)
    }
}


// function clearCanvas(){
//     gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
//     drawImg()
// }

function updateGmeme(txt, x, y) {
    console.log('in updateGmem')
    gMeme.lines[0].txt = txt;
    drawText(gMeme.lines[0].txt, x, y)
}

function drawText(text, x, y, fontSize=70) {
    console.log('in drawText')
    // gCtx.lineWidth = 3;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${fontSize}px Impact`
    // gCtx.textAlign = 'center'
    gCtx.fillText(text, x, gMeme.lines[0].lineHight)
    gCtx.strokeText(text, x, gMeme.lines[0].lineHight)
}


function changeSize(val) {
    console.log('in changeSize')
    if (val === '+') {
        gMeme.lines[0].size += 10;
    } else if (val === '-') {
        gMeme.lines[0].size -= 10;
    }
    drawImg()
}


function moveLineUp() {
    gMeme.lines[0].lineHight -=10;
    drawText()
    drawImg()
}

function moveLineDown() {
    gMeme.lines[0].lineHight +=10;
    drawText()
    drawImg()
}

function addRemoveLine(text, x, y, fontSize=70) {
    gMeme.lines.push({
        txt: '',
        size: 70, 
        align: 'left',
        color: 'red',
        lineHight: 200})
    gCtx.fillText(gMeme.lines[1].txt, 100, 200)
    gCtx.strokeText(gMeme.lines[1].txt, 100, 200)
    
    var addInput = `<input type="text" placeholder="Enter text" autocomplete="off" class="meme-text" oninput="updateGmeme(this.value, 100, 200)">`
    document.querySelector('.meme-editor').innerHTML += addInput
    gMeme.selectedLineIdx = 1;

}

// function swichLine() {
   
// }

// getLineIdx 

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