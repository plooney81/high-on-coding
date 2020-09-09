const bod = document.querySelector('body');
bod.style.margin = '0';
bod.style.padding = '0';
bod.style.fontFamily = "'Roboto', sans-serif";

const mainCont = document.querySelector('#container');

// Top navbar Section --------------------------------
// div that will wrap around all navBar stuff
const navDiv = document.createElement('div');
navDiv.style.display = "flex";
navDiv.style.alignContent = "center";
navDiv.style.backgroundColor = 'rgb(63, 142, 191)';
// navDiv.style.justifyContent = "center";


const navHeading = document.createElement('h2');
navHeading.textContent = 'HighOnCoding';
navHeading.style.color = 'White';
navHeading.style.fontSize = '20px';
navHeading.style.marginLeft = '5px';
navDiv.appendChild(navHeading)


for (let index =  0; index < 2; index++){
    const navAnchors = document.createElement('a');
    navAnchors.setAttribute('href', './index.html');
    navAnchors.style.textDecoration = 'none';

    const navAnchorText = document.createElement('p');
    if (index === 0){
        navAnchorText.textContent = 'Home';
        navAnchorText.style.fontWeight = 'Bold';
    } else {
        navAnchorText.textContent = 'Categories';
    }
    navAnchorText.style.margin = "20px";
    navAnchorText.style.color = 'white';
    navAnchors.appendChild(navAnchorText);
    navDiv.appendChild(navAnchors);
}

mainCont.appendChild(navDiv);