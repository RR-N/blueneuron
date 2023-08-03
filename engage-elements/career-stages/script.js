let selectedImageId = null;
let clickCount = 0;

window.addEventListener('resize', function() {
    positionImages();
    if (selectedImageId) {
        handleClick(selectedImageId);
    }
});

function positionImages() {
    const zoom = document.getElementById('zoom');
    const zoomWidth = zoom.offsetWidth;
    const zoomHeight = zoom.offsetHeight;

    const images = {
        srprof: { x: 0.504, y: 0.507, w: 0.436, h: 0.345 },
        jrprof: { x: 0.059, y: 0.507, w: 0.436, h: 0.345 },
        phdstud: { x: 0.505, y: 0.149, w: 0.435, h: 0.344 },
        undergrad: { x: 0.059, y: 0.148, w: 0.436, h: 0.345 }
    };

    const container = document.getElementById('zoom-container');

    for (let id in images) {
        const img = document.getElementById(id);
        const coords = images[id];

        img.style.left = `${coords.x * zoomWidth}px`;
        img.style.top = `${coords.y * zoomHeight}px`;
        img.style.width = `${coords.w * zoomWidth}px`;
        img.style.height = `${coords.h * zoomHeight}px`;

        // Remove existing event listeners
        const newImg = img.cloneNode(true);
        img.parentNode.replaceChild(newImg, img);

        newImg.addEventListener('click', function() {
            console.log(`Image ${id} was clicked.`);
            selectedImageId = id;
            handleClick(id);
        });

        newImg.addEventListener('mouseover', function() {
            container.classList.add('darken');
        });

        newImg.addEventListener('mouseout', function() {
            container.classList.remove('darken');
        });
    }
}

function handleClick(id) {
    const zoom = document.getElementById('zoom');
    const zoomWidth = zoom.offsetWidth;
    const zoomHeight = zoom.offsetHeight;

    // Remove existing preText and preRaven images
    const existingPreText = document.getElementById('pre-text');
    if (existingPreText) {
        existingPreText.remove();
    }

    const existingPreRaven = document.getElementById('pre-raven');
    if (existingPreRaven) {
        existingPreRaven.remove();
    }

    if (clickCount === 2) {
        // Reset everything to initial state
        zoom.src = 'images/zoom.png';
        const overlays = document.getElementsByClassName('overlay');
        for (let i = 0; i < overlays.length; i++) {
            overlays[i].style.display = 'block';
            overlays[i].classList.remove('pulse');
        }
        clickCount = 0;
        positionImages();
        return;
    }

    zoom.src = 'images/zoom-share.png';

    const overlays = document.getElementsByClassName('overlay');
    for (let i = 0; i < overlays.length; i++) {
        if (overlays[i].id !== id) {
            overlays[i].style.display = 'none';
            overlays[i].classList.remove('pulse');
        } else {
            overlays[i].style.left = `${zoomWidth - overlays[i].offsetWidth - 25}px`;
            overlays[i].style.top = '49px';
            overlays[i].style.maxWidth = '484px';
            overlays[i].style.maxHeight = 'calc(34px + 74px + ' + overlays[i].offsetHeight + 'px + 15px)';
            overlays[i].classList.add('pulse');
        }
    }

    const preText = new Image();
    preText.id = 'pre-text';
    preText.src = clickCount === 1 ? 'images/post-text-' + id + '.png' : 'images/pre-text-' + id + '.png';
    preText.style.position = 'absolute';
    preText.style.left = '25px';
    preText.style.top = '50%';
    preText.style.transform = 'translateY(-50%)';
    preText.style.maxWidth = '484px';
    document.getElementById('zoom-container').appendChild(preText);

    const preRaven = new Image();
    preRaven.id = 'pre-raven';
    preRaven.src = clickCount === 1 ? 'images/post-raven-' + id + '.png' : 'images/pre-raven-' + id + '.png';
    preRaven.style.position = 'absolute';
    preRaven.style.maxWidth = '484px';
    preRaven.style.maxHeight = `calc(${document.getElementById(id).offsetHeight * 1.25}px)`;
    preRaven.style.left = `${document.getElementById(id).offsetLeft + document.getElementById(id).offsetWidth / 2}px`;
    preRaven.style.top = `calc(50% + ${document.getElementById(id).offsetHeight / 2}px)`;
    preRaven.style.transform = 'translate(-50%, -50%)';
    document.getElementById('zoom-container').appendChild(preRaven);

    // Increment clickCount
    clickCount++;
}

window.addEventListener('load', positionImages);