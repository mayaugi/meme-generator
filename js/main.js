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
    img.src = `${gImgs[gMeme.selectedImgId-1].url}`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[gLineId].txt, 100, gMeme.lines[gLineId].lineHight, gMeme.lines[gLineId].size)
        if(gMeme.selectedLineIdx === 1) {
            drawText(gMeme.lines[gLineId-1].txt, 100, gMeme.lines[gLineId-1].lineHight, gMeme.lines[gLineId-1].size)
        }
        
    }
}



function drawText(text, x, y, fontSize=50) {
    console.log('in drawText')
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${fontSize}px Impact`
    // gCtx.textAlign = 'center'
    var elColor = document.querySelector('input[name=prefColor]').value;
    gCtx.fillStyle = elColor
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


function moveLines(val) {
    if(val === "+") {
        gMeme.lines[gLineId].lineHight -=10;
    }
    if(val==='-'){
        gMeme.lines[gLineId].lineHight +=10;
    }
    drawImg()

}


function addLine(text, x, y, fontSize=70) {
    console.log('in addLine');
    gMeme.lines.push({
        txt: '',
        size: 70, 
        align: 'left',
        color: 'red',
        lineHight: 200})
        gCtx.fillText(gMeme.lines[gLineId].txt, 100, 200)
        gCtx.strokeText(gMeme.lines[gLineId].txt, 100, 200)

    var addInput = `<input type="text" placeholder="Enter text" autocomplete="off" class="meme-text" id=${gMeme.lineCount+1} oninput="updateGmeme(this.value, 100, 200)" onfocus="updateId(this.id)">`
    document.querySelector('.control-box').innerHTML += addInput
    var elInput = document.querySelector('input[class=meme-text]')
    elInput.value = ''
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



function toggleMenu() {
    document.querySelector('.main-screen').classList.toggle('menu-open')
    document.querySelector('.main-nav').classList.toggle('menu-open')

}

function openEditor() {
    document.querySelector('.canvas-container').style.display = 'block';
    document.querySelector('.editor-bg').style.display = 'block';
    document.querySelector('.main-content').style.display = 'none';
}

function movoToGallery() {
    document.querySelector('.canvas-container').style.display = 'none';
    document.querySelector('.editor-bg').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}

// function updateColor ('fill',this.value) {
//     var elColor = document.querySelector('input[name=prefColor]').value;
// }