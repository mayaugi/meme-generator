'use strict'

var gLineId = 0;
var gLineFocus = 1;

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
    }
}



function drawText() {
    console.log('in drawText')
    // gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gMeme.lines[gLineId].size}px Impact`
    // gCtx.textAlign = 'center'
    var elColor = document.querySelector('input[name=prefColor]').value;
    gCtx.fillStyle = elColor

    for (var i = 0; i < gMeme.lines.length ; i++) {
        gCtx.fillText(gMeme.lines[i].txt, gMeme.lines[i].lineWidth, gMeme.lines[i].lineHight, gMeme.lines[i].size);
        gCtx.strokeText(gMeme.lines[i].txt, gMeme.lines[i].lineWidth, gMeme.lines[i].lineHight, gMeme.lines[i].size);
    }
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
    if(val === '+') {
        gMeme.lines[gLineId].lineHight -=10;
    }
    if(val==='-'){
        gMeme.lines[gLineId].lineHight +=10;
    }
    drawImg()

}


function addLine() {
    console.log('in addLine');
    gMeme.lineCount += 1;
    gMeme.lines.push({
        txt: '',
        size: 50, 
        align: 'left',
        color: 'red',
        lineWidth: 100,
        lineHight: (gMeme.lineCount+1) * 120})

    var addInput = `<input type="text" placeholder="Enter text" autocomplete="off" class="meme-text" id=${gMeme.lineCount} oninput="updateGmeme(this.value, 100, 200)" onfocus="updateId(this.id)">`
    document.querySelector('.control-box').innerHTML += addInput
    var elInput = document.querySelector('input[class=meme-text]')
    elInput.value = ''
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

function updateGmeme(txt, x, y) {
    console.log('in updateGmem')
    console.log(gLineId)
    gMeme.lines[parseInt(gLineId)].txt = txt;
    drawText(gMeme.lines[gLineId].txt, x, y)
    drawImg()
}

function swichLineFocus() {
    if(gLineFocus <= gMeme.lineCount){
        document.getElementById("0").focus()
        gLineFocus +=1
    } else {
        document.getElementById("1").focus()
        gLineFocus--

    }
    console.log('gLineFocus', gLineFocus);
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

