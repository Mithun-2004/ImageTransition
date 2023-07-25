var imgBox = document.querySelector('.image-box');
var imgWrap = document.querySelector('.image-wrap');

var originalImg = document.querySelector('#original-img');
originalImg.style.width = imgBox.offsetWidth + "px";

var line = document.querySelector('#line');

var leftSpace = imgBox.offsetLeft;

imgBox.addEventListener('mousemove', function(e){
    var boxWidth = (e.pageX-leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
})