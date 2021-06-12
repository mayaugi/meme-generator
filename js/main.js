'use strict'

var gLineId = 0

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
        drawText(gMeme.lines[gLineId].txt, 100, 100, gMeme.lines[gLineId].size)
    }
}


function updateGmeme(txt, x, y) {
    console.log('in updateGmem')
    gMeme.lines[gLineId].txt = txt;
    drawText(gMeme.lines[gLineId].txt, x, y)
}

function drawText(text, x, y, fontSize=50) {
    console.log('in drawText')
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${fontSize}px Impact`
    // gCtx.textAlign = 'center'
    gCtx.fillText(text, x, gMeme.lines[gLineId].lineHight)
    gCtx.strokeText(text, x, gMeme.lines[gLineId].lineHight)
}



function changeSize(val) {
    console.log('in changeSize')
    if (val === '+') {
        gMeme.lines[gLineId].size += 10;
    } else if (val === '-') {
        gMeme.lines[gLineId].size -= 10;
    }
    drawImg()
}


function moveLineUp() {
    gMeme.lines[gLineId].lineHight -=10;
    drawImg()

}

function moveLineDown() {
    gMeme.lines[gLineId].lineHight +=10;
    drawImg()
}

function addLine(text, x, y, fontSize=70) {
    gMeme.lines.push({
        txt: '',
        size: 70, 
        align: 'left',
        color: 'red',
        lineHight: 200})
        gCtx.fillText(gMeme.lines[gLineId].txt, 100, 200)
        gCtx.strokeText(gMeme.lines[gLineId].txt, 100, 200)
        
    
    var addInput = `<input type="text" placeholder="Enter text" autocomplete="off" class="meme-text" id=${gMeme.lineCount+1} oninput="updateGmeme(this.value, 100, 200)" onfocus="updateId(this.id)">`
    // document.querySelector('.control-box').innerHTML += addInput
    gMeme.lineCount += 1;
    drawImg()

}

function deleteLine() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImg()
    gMeme.lines[gLineId].txt = '';
     
}

function updateId (id) {
    gMeme.selectedLineIdx = id
    gLineId = gMeme.selectedLineIdx    
}


function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    console.log('DATA', data);
    elLink.href = data
    elLink.download = 'my-meme'
}
