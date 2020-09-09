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
reviewsDiv.style.backgroundColor = 'rgb(210, 210, 210)';
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
// END REVIEWS SECTION ----------------------------


// Hello Section ----------------------------------

const helloDiv = document.createElement('div');
helloDiv.style.width = '85%';
helloDiv.style.padding = '10px';
helloDiv.style.margin = '20px auto';
helloDiv.style.borderRadius = '5px';

    const helloHeader = document.createElement('h5');
    helloHeader.style.fontSize = '20px';
    helloHeader.style.color = 'rgb(60, 142, 191)';
    helloHeader.textContent = 'Hello WatchKit';

    const helloPar = document.createElement('p');
    helloPar.style.fontSize = '14px';
    helloPar.textContent = `Last month Apple released the anticipated WatchKit Framework for developers in teh for of iOS 8.2 beta SDK release.
    The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basicas of getting 
    started with the WatchKit framework and developing apps for the Apple Watch.`

    const helloCommentDiv = document.createElement('div');
    helloCommentDiv.style.display = 'flex';
    helloCommentDiv.style.backgroundColor = 'orange';
    helloCommentDiv.style.borderRadius = '5px';

        const helloComments = document.createElement('p');
        helloComments.style.marginRight = '30px';
        helloComments.style.color = 'white';
        helloComments.textContent = '12 comments';

        const helloLikes = document.createElement('p');
        helloLikes.textContent = '124 likes';
        helloLikes.style.color = 'white';
    helloCommentDiv.appendChild(helloComments);
    helloCommentDiv.appendChild(helloLikes);


helloDiv.appendChild(helloHeader);
helloDiv.appendChild(helloPar);
helloDiv.appendChild(helloCommentDiv);

mainCont.appendChild(helloDiv);

// END HELLO SECTION ------------------------------

// Introduction Section ---------------------------

const introDiv = document.createElement('div');
introDiv.style.width = '85%';
introDiv.style.padding = '10px';
introDiv.style.margin = '20px auto';
introDiv.style.borderRadius = '5px';

    const introHeader = document.createElement('h5');
    introHeader.style.fontSize = '20px';
    introHeader.style.color = 'rgb(60, 142, 191)';
    introHeader.textContent = 'Introduction to Swift';

    const introPar = document.createElement('p');
    introPar.style.fontSize = '14px';
    introPar.textContent = `Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. 
    Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will 
    revolve around the basic concepts in the Swift language and how you can get started.`

    const introCommentDiv = document.createElement('div');
    introCommentDiv.style.display = 'flex';
    introCommentDiv.style.backgroundColor = 'orange';
    introCommentDiv.style.borderRadius = '5px';

        const introComments = document.createElement('p');
        introComments.style.marginRight = '30px';
        introComments.style.color = 'white';
        introComments.textContent = '15 comments';

        const introLikes = document.createElement('p');
        introLikes.textContent = '45 likes';
        introLikes.style.color = 'white';
    introCommentDiv.appendChild(introComments);
    introCommentDiv.appendChild(introLikes);


introDiv.appendChild(introHeader);
introDiv.appendChild(introPar);
introDiv.appendChild(introCommentDiv);

mainCont.appendChild(introDiv);

// END INTRODUCTION SECTION -----------------------