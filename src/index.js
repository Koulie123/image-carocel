import './style.css';
import picture1 from './images/images-for-carocel/picture1.jpeg';
import picture2 from './images/images-for-carocel/picture2.jpeg';
import picture3 from './images/images-for-carocel/picture3.jpeg';


// let image = document.createElement('img');
// image.src = picture1;
// imageParent.appendChild(image);

// let imageFolder = './images/images-for-carocel/'
// let imageList = [
//     'picture1.jpeg',
//     'picture2.jpeg',
//     'picture3.jpeg'
// ]
const imageParent = document.querySelector('.image-container');

let fullImagePaths = [
    picture1,
    picture2,
    picture3
]
function addImagesToContainer(parent, fullImagePaths){
    fullImagePaths.forEach((image) => {
        let imageHolder = document.createElement('img');
        imageHolder.src = image;
        parent.appendChild(imageHolder);
    })
}
if (imageParent != null){
    addImagesToContainer(imageParent, fullImagePaths);
} else {
    console.log('ImageParent is null');
}


//Button
let translateX= 0;
let goNextButton = document.querySelector('#go-next');
goNextButton.addEventListener('click', () => {
    console.log('button clicked');
    translateX -= 10;
    imageParent.style.transform = `translateX(${translateX}%)`;
})
let goPrevButton = document.querySelector("#go-prev");
goPrevButton.addEventListener('click', () => {
    console.log('previous button clicked');
    translateX += 10;
    imageParent.style.transform = `translateX(${translateX}%)`;
})