var gCanvas;
var gCtx;
var gKeywords = {'happy': 12, 'funny': 1 }

var gImgs = [
    { id: 1, url: 'img/meme-imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/meme-imgs/2.jpg', keywords: ['funny'] },
    { id: 3, url: 'img/meme-imgs/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/meme-imgs/4.jpg', keywords: ['happy'] },
];

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



function openEditor() {
    document.querySelector('.canvas-container').style.display = 'block';    
    document.querySelector('.main-container').style.display = 'none';    
}