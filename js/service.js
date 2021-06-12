const KEY = 'meme'

var gCanvas;
var gCtx;
var gKeywords = { 'happy': 1, 'funny': 1 }

var gImgs = [
    { id: 1, url: 'img/meme-imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/meme-imgs/2.jpg', keywords: ['funny'] },
    { id: 3, url: 'img/meme-imgs/3.jpg', keywords: ['politics'] },
    { id: 4, url: 'img/meme-imgs/4.jpg', keywords: ['crazy'] },
    { id: 5, url: 'img/meme-imgs/5.jpg', keywords: ['funny'] },
    { id: 6, url: 'img/meme-imgs/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/meme-imgs/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/meme-imgs/8.jpg', keywords: ['geeks'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['geeks'] },

 
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lineCount: 0,
    lines: [
        {
            txt: '',
            size: 50,
            posY: 60,
            posX: 60,
            align: 'left',
            color: 'red',
        }
    ]
}

function getImages() {
    return gImgs;
}


function getId(id) {
    gMeme.selectedImgId = id;
    openEditor()
    drawImg()
}


function saveMemeToStorage() {
    saveToStorage(key, gMeme)
}