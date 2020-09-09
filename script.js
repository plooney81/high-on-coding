const bod = document.querySelector('body');
bod.style.margin = '0';
bod.style.padding = '0';
bod.style.boxSizing = 'border-box';
bod.style.fontFamily = "'Roboto', sans-serif";

const mainCont = document.querySelector('#container');

// Navbar Section --------------------------------
// div that will wrap around all navBar stuff
const navDiv = document.createElement('div');
navDiv.style.display = "flex";
navDiv.style.alignContent = "center";
navDiv.style.backgroundColor = 'rgb(63, 142, 191)';
navDiv.style.borderBottomLeftRadius = '5px';
navDiv.style.borderBottomRightRadius = '5px';
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
// END NAVBAR SECTION ----------------------------

// Reviews Section --------------------------------

const reviewsDiv = document.createElement('div');
reviewsDiv.style.backgroundColor = 'rgb(181, 181, 181)';
reviewsDiv.style.width = '85%';
reviewsDiv.style.padding = '10px';
reviewsDiv.style.margin = '20px auto';
reviewsDiv.style.borderRadius = '5px';

const reviewsHead = document.createElement('h3');
reviewsHead.textContent = 'Curse of the Current Reviews';

const reviewsPar = document.createElement('p');
reviewsPar.textContent = `When you want to buy an application from the Apple iTunes store you have more choices than you can handle. 
Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. 
Their choice is dependent on three important factors price, screenshot and reviews.
`

reviewsDiv.appendChild(reviewsHead);
reviewsDiv.appendChild(reviewsPar);

mainCont.appendChild(reviewsDiv);