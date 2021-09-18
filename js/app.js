/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

//Where is navigationbar?
const navbar = document.querySelector('#navbar__list');

//How many Section?
const allSection = document.querySelectorAll('section');

//css class for the Word design
const classs = (document.className = 'menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */ 
 

function home() {
    const home = document.querySelector('.main__hero');
    //create list for homeButton
    const button = document.createElement('li');

    //home active nav //new
    window.onscroll = function() {
        const anchore = document.querySelector('a');
        const topPage = window.scrollY;
        if (topPage === 0) {
            anchore.classList.add('active__nav');
        }
        else {
            anchore.classList.remove('active__nav');
        }
    }

    // Scroll to section on link click
    button.innerHTML = `<a class='${classs}' data-nav='Home'
    href='#${home.getAttribute('id')}'>Home</a>`;

    //add list child to navbar
    navbar.appendChild(button);

}

function navBar() {

    //for loop
    for (let i = 0; i < allSection.length; i++) {

        //create list for each section
        const lists = document.createElement('li');

        //get name of sections
        const name = lists.textContent = 'Section ' + (i + 1);

        // Scroll to section on link click
        lists.innerHTML = `<a class='${classs}' data-nav ='section${+i+1}'
        href='#${allSection[i].getAttribute('id')}'>${name}</a>`;

        //add list child to navbar
        navbar.appendChild(lists);

    }
}

function about() {
    //Where is footer ?
    const ft = document.querySelector('.page__footer');

    //create list for aboutButton
    const footer = document.createElement('li');
 
    // Scroll to section on link click
    footer.innerHTML = `<a class='${classs}' data-nav='footer'
    href='#${ft.getAttribute('id')}'>About</a>`;

    //add list child to navbar
    navbar.appendChild(footer);
}

// Set sections as active //new
function activePage() {
    //for every section in sections
    for (section of allSection) {
        //Page Position
        const topValue = section.getBoundingClientRect().top;
        //when page position in the top of window
        if (topValue >= 0 && topValue <= 300) {
            section.classList.add('your-active-class');

        } else {
            section.classList.remove('your-active-class');
        }
    }
}

//make nav bar active while scrolling //new
function all() {
    for (section of allSection) {
        //make a varaible to store sections id 
        let activeLink = navbar.querySelector(`[data-nav=${section.id}]`);
        
        //Page Position
        const topValue = section.getBoundingClientRect().top;
        if(topValue >= 0 && topValue <= 300){
            activeLink.classList.add("active__nav");
        } else{
            activeLink.classList.remove("active__nav");
        }
    }
}

//Event to make section & navbar active when scrolling
document.addEventListener('scroll', activePage);
document.addEventListener("scroll", all);

//build home button
home();

// build the navigation
navBar();

//build About
about();

//smooth scrolling //new
const navLinks = document.querySelectorAll('a');

for (link of navLinks) {
  link.addEventListener("click", clickHand);    
}

function clickHand(event) {
  event.preventDefault();
  const id = this.getAttribute('href');  
  // get the reference to the corresponding section
  const targetSection = document.querySelector(id); 
  
  // add smooth scrolling feature
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}