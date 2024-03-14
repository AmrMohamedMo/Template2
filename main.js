// InputSearch
let Inputsearch = document.querySelector(`input`);
let search = document.querySelector(`.search`);
let searchMenu = document.querySelector(`.search-menu`); //console.log(searchMenu);
let trend = document.querySelectorAll(`.search-menu .trend`); //console.log(trend);
let AllButton = document.querySelector(`button`);
let allButton = document.querySelector(`button span`);
let Allbutton = document.querySelector(`button .material-symbols-outlined`);
let iconSearch = document.querySelector(`.search-icon`); // console.log(iconSearch)
search.style.border = `3px solid transparent`;
Inputsearch.onfocus = function Fo() {
    search.style.border = `3px solid #ffa734`;
    search.style.borderRadius = `6px`;
    // console.log(allButton.innerHTML)
    // searchMenu.classList.toggle(`active`);
    // window.location.reload()
    // window.preventDefault()
    // if (allButton.innerHTML === `All &amp; Departments`){
    //     let red = `red`;
    //     Inputsearch.style.backgroundColor = red;
    // };
};
Inputsearch.onblur = function Bl() {
    search.style.border = `3px solid transparent`;
    search.style.borderRadius = `6px`;
    // searchMenu.classList.remove(`active`);
};
document.addEventListener(`click`, (e) => {
    e.stopPropagation();
    if (e.target === AllButton || e.target === allButton || e.target === Allbutton) {
        AllButton.classList.toggle(`active`);
    } else {
        AllButton.classList.remove(`active`);
    };
    if (e.target === iconSearch){
        iconSearch.classList.toggle(`active`);
    } else {
        iconSearch.classList.remove(`active`);
    };
});

let overlay = document.querySelector(`.overlay`);               // console.log(overlay)
let deliver = document.querySelector(`.deliver`);               // console.log(deliver)
let delH3   = document.querySelector(`.deliver h3`);            // console.log(delH3)
let delImg  = document.querySelector(`.deliver img`);           // console.log(delImg)
let delSpan = document.querySelector(`.deliver span`);          // console.log(delSpan)
// location 
let loc     = document.querySelector(`.location`);
// country
let country = document.querySelector(`.country button`);        // console.log(country);
let couMenu = document.querySelector(`.country-menu`);          // console.log(couMenu);
let contris = document.querySelectorAll(`.country-menu span`);  // console.log(couMenu);
let done    = document.querySelector(`.small-container .done`); // console.log(done);
// All menu
let AllMenu = document.querySelector(`.all-search-menu`);       // console.log(AllMenu) 
let almnuSpn = document.querySelectorAll(`.all-search-menu span`) ; // console.log(almnuSpn)
// e.target
document.addEventListener(`click` , (e) => {
    e.stopPropagation();
    // Overlay Active
    if (e.target === deliver || e.target === delH3 || e.target === delImg 
        || e.target === delSpan || e.target === overlay || e.target === done) {
            overlay.classList.add(`active`);
            loc.classList.add(`active`);
    };
    if (e.target === overlay || e.target === done) {
        overlay.classList.remove(`active`);
        loc.classList.remove(`active`);
        searchMenu.classList.remove(`active`);
        }
    // click on Button To Open Menu
    if (e.target === country) {
        couMenu.classList.add(`active`);
    };
    // All menu
    if (e.target === allButton  || e.target === AllButton ||
        e.target === AllMenu    || e.target === Allbutton){
            // Add active on allbutton to open by display block
            AllMenu.classList.toggle(`active`);
            // loop on Allspans to choose s click one
            almnuSpn.forEach(span => {
                span.addEventListener(`click`, (s) => {
                    // all button width fit-content
                    // AllButton.classList.add(`fit`);
                    // Put text span in all menu
                    allButton.innerHTML = s.target.textContent;
                    // local all button menu set
                    localStorage.setItem(`my_select`, s.target.textContent);
                });
            });
            
    } else {
        AllMenu.classList.remove(`active`);
    };
    // inputSearch 
    if (e.target === Inputsearch){
        searchMenu.classList.add(`active`);
        overlay.classList.add(`active`);
    }; // Value
    trend.forEach(tre => {
        tre.onclick = (e) => {
            // e.stopPropagation();
            Inputsearch.value = e.target.textContent;
            searchMenu.classList.remove(`active`);
        };
    });
    // 
    // console.log(e.target)
});




// localStorage.clear()
// Default
// // AllMenu
let getMenuSpn = localStorage.getItem(`my_select`);
if (getMenuSpn !== null) {
    // get select from local & put it in all button 
    allButton.innerHTML = getMenuSpn;
};
// Country
let getCountry = localStorage.getItem(`my_country`);
if (getCountry !== null) {
    // get country from local & put it in Country button 
    country.firstChild.textContent = getCountry;
    // get country from local & put it in Deliver button
    delH3.textContent = getCountry;
};
// select conrty
contris.forEach(con => {
    con.addEventListener(`click` , (e) => {
        // Remove All Span Active
        contris.forEach(con => {con.classList.remove(`active`)});
        // Add Active on Target span        
        e.target.classList.add(`active`);   
        // put Choosed Country in Button
        country.firstChild.textContent = e.target.textContent;
        // h3
        delH3.textContent = e.target.textContent;
        // Close contry Menu                // local
        couMenu.classList.remove(`active`); localStorage.setItem(`my_country`, e.target.textContent);
        // ADd Active on Country button
        country.classList.add(`active`);
    });
});
//--------------

// language 
let language = document.querySelector(`.header .language`); // console.log(language)
// language-menu
let langMenu = document.querySelector(`.language .language-menu`); // console.log(langMenu)
// account 
let account = document.querySelector(`.account`); // console.log(account)
// account-menu 
let accMenu = document.querySelector(`.account-menu`); // console.log(accMenu)
// hover OverLAy && Menu
function mix(l,A) {
    l.onmouseenter =_=> {Add(overlay);Add(langMenu);};
    A.onmouseenter =_=> {Add(overlay);Add(accMenu);};
    l.onmouseleave =_=> {Remove(overlay);Remove(langMenu)};
    A.onmouseleave =_=> {Remove(overlay);Remove(accMenu);};
};
mix(language,account);
//-------------- let  = document.querySelector(`.`)

// Global Function

// ADd && Remove Global
function Add(e) {
    if(e !== null){
        e.classList.add(`active`);
    }
};
function Remove(e) {
    e.classList.remove(`active`);
};
function Tog(e) {
    e.classList.toggle(`active`);
};
function z(l){
    return document.querySelector(`${l}`);
};
function zA(l){
    return document.querySelectorAll(`${l}`);
};
function RvAlAv(el){
    el.forEach(function (e) {
        e.classList.remove(`active`);
    });
};
function lopAl(el){
    el.forEach((e) =>{
        e;
    });
};
// display none all childens
function noChilds(el){
    el.forEach(function (e) {
        e.style.display = `none`;
    });
};
// display none this element ((now))
function no(e){
    e.style.display = `none`;
};
// display none this element ((when on click))
function delet(e){
    e.onclick = function (e) {
        e.target.style.display = `none`;
    };
};
// if element have classlist active make it block
function bl(e){
    (e.classList.contains(`active`)) ?
        e.style.display = `block` :
        e.style.display = `none`;
};
// Active && block
function AvAB(e){
    if (! e.classList.contains(`active`)) {
        e.classList.add(`active`);e.style.display = `block`;
    } else {e.classList.remove(`active`);e.style.display = `none`;}
};
// console.log(z(`.`))
function c(e){
    console.log(e);
};
let seTimNon = function (){
    setTimeout((e) => {
        if (! closList.classList.contains(`active`)) {
            closList.style.display = `none`;
            console.log(`closList`);
        } 
    }, 2000);
};
let seTimblk = function (){
    setTimeout((e) => {
        if ( closList.classList.contains(`active`)) {
            closList.style.display = `block`;
            closList.style.opacity = `1`;
        } 
    }, 0);
};
// function crEl() {
//     return document.createElement(`div`);
// }
// crEl.classList = `sss`;
// document.body.appendChild(crEl())
// c(z(`.sss`))
// Elements.forEach(el => {
//     Element.forEach(e=>{e.classList.remove(`active`)})
//     el.currentTarget.classList.add(`active`)
// })
//------------


// Loop language-menu a
let langs = document.querySelectorAll(`.language-menu .english a.links`); // console.log(langs)
// Default local my_language
let GetLang = localStorage.getItem(`my_language`)
if (GetLang !== null){
    langs.forEach(lang => {
        if (GetLang === lang.lastElementChild.textContent){
            lang.classList.add(`active`);
        };
    });
};


// Loop language-menu a
langs.forEach(lang => {
    lang.addEventListener(`click`, (e) => {
        e.preventDefault();e.stopPropagation();
        // Active
        langs.forEach(lang => {lang.classList.remove(`active`)})
        e.currentTarget.classList.add(`active`);
        // local
        localStorage.setItem(`my_language`, e.currentTarget.lastElementChild.textContent);
    });
});

// function Active(Els) {
//     Els.forEach(lang => {
//         lang.addEventListener(`click`, (e) => {
//             e.preventDefault();e.stopPropagation();
//             Els.forEach(lang => {lang.classList.remove(`active`)})
//             e.currentTarget.classList.add(`active`);
//         });
//     });
// };
// Active(langs);
//---------------


// hidden-list
// --------------
let hidnLsit = document.querySelector(`.hidden-list`); // console.log(hidnLsit)
// all-menu buger
let burger = document.querySelector(`.header-menu .header-box`); // console.log(burger)
// close
let closList = document.querySelector(`.close-list`); // console.log(closList)
// burger on click
burger.onclick = function (e) {
    e.stopPropagation();
    Add(hidnLsit);Add(closList);
    overlay.classList.add(`active-list`);
    closList.classList.remove(`not-active`);
    // seTimblk();
    if (hidnLsit.classList.contains(`active`)) {
        Add(document.body);
    };
};
// Active Hidden list
let HidnCont = z(`.hidden-container`);
document.addEventListener(`click`, (e) => {
    if (e.target === closList || e.target === overlay) {
        e.stopPropagation();
        Remove(closList);Remove(hidnLsit);
        overlay.classList.remove(`active-list`);
        Remove(document.body);
        // seTimNon();
    };
});









let secMnDvs = zA(`.sec-menu div`);
// sec-menu back
z(`.main-menu-back a`).onclick = function (e) {
    e.stopPropagation();Remove(HidnCont);
};
// click on any left-menu a links && remove all active divs in sec-menu
zA(`.left-menu a`).forEach(a => {
    a.addEventListener(`click`, (e)=>{
        if (! e.currentTarget.classList.contains(`see-all`)) {
            e.stopPropagation();Add(HidnCont);RvAlAv(secMnDvs);
            Add(z(`.sec-menu .${e.currentTarget.className}`));
        };
    });
});
// -----------









// see-all
// -------

z(`.see-all.shop`).addEventListener(`click`, (e) => {
    e.stopPropagation();Tog(z(`.see-all-line.shop`));
    zA(`.see-all.shop .s`).forEach(e=>{Tog(e)});Tog(z(`.see-all-list.shop`));
    (z(`.see-all-list.shop`).classList.contains(`active`))?
    z(`.see-all.shop span`).textContent = `See less` : 
    z(`.see-all.shop span`).textContent = `See all` ;
});


z(`.see-all.programs`).addEventListener(`click`, (e) => {
    e.stopPropagation();Tog(z(`.see-all-line.programs`));
    zA(`.see-all.programs .s`).forEach(e=>{Tog(e)});Tog(z(`.see-all-list.programs`));
    (z(`.see-all-list.programs`).classList.contains(`active`))?
    z(`.see-all.programs span`).textContent = `See less` : 
    z(`.see-all.programs span`).textContent = `See all` ;
});


// -------------


// landing
// -----------
let n = 1,imgs;
// default
let getBack = localStorage.getItem(`my_background`);
let getWit = localStorage.getItem(`my_wit`);
if ( getBack !== null && getWit !== null) {
    z(`.landing`).style.backgroundImage = getBack;
    z(`.fa-chevron-right`).style.color = getWit;
    z(`.fa-chevron-left`).style.color = getWit;
};// right
z(`.fa-chevron-right`).onclick =(e)=>{
    n++;if(n > 7){n = 1;};ss(e);
};// left
z(`.fa-chevron-left`).onclick =(e)=>{
    n--;if(n < 1){n = 7;};ss(e);
};function ss(e){
    imgs =`url(imgs/${n}.jpg)`;
    z(`.landing`).style.backgroundImage = imgs;
    localStorage.setItem(`my_background`, imgs);
    wit(z(`.fa-chevron-right`));wit(z(`.fa-chevron-left`));
};// white
function wit(e){
    (n===6 || n===2)?e.style.color=`white`:e.style.color=`black`;
    localStorage.setItem(`my_wit`,e.style.color);
};

// ------------


// landing-box
// ------------
let prosCopy = z(`.pros-box`).cloneNode(true);


window.onresize = (e) => {
    if(window.innerWidth < 1231) {
        c(window.innerWidth);
        prosCopy.style.display = `block`;
        (z(`.list-products`)).appendChild(prosCopy);
    } else {
        prosCopy.style.display = `none`;
    }
}
window.onload = (e) => {
    if(window.innerWidth < 1231) {
        c(window.innerWidth);
        prosCopy.style.display = `block`;
        (z(`.list-products`)).appendChild(prosCopy);
    } else {
        prosCopy.style.display = `none`;
    }
}























// deliver [[after]] header
let delv_H = document.querySelector(`.header`).nextElementSibling; // console.log(delv_H)
delv_H.onclick = function (e) {
    Add(overlay);
    Add(loc);
};
//--------------



















// console.log(document.styleSheets[3].rules[21].style.width)
// console.log(window)
let mybtn = document.querySelector(`.search button`); //console.log(mybtn)
// console.log(iconSearch.offsetWidth)
// console.log(mybtn.offsetWidth)
// console.log(Inputsearch.offsetWidth)
// console.log(iconSearch.offsetWidth)
// searchMenu.style.width = `${search.offsetWidth - mybtn.offsetWidth}px`;
// console.log(`${((Inputsearch.offsetWidth + iconSearch.offsetWidth)/100)}%`)
// window.onload;
// window.onresize = function(){
//     window.onload
// }
searchMenu.style.width = `${Inputsearch.offsetWidth + iconSearch.offsetWidth}px`;
// window.location.reload()
// searchMenu.style.width = `100%` - `${((Inputsearch.offsetWidth + iconSearch.offsetWidth)/100)}%`;
// window.onresize = function(){
//     window.location.reload()
// }

// document.onclick = function (){window.onload}
// window.onload
// let hand = `100%`;
// console.log(hand)
// searchMenu.style.width =  `${hand - AllButton.offsetWidth}`;
// console.log(searchMenu.style.width)
// console.log(Inputsearch.offsetWidth)
// console.log(allButton.offsetWidth)
// console.log( Inputsearch.offsetWidth + allButton.offsetWidth)


// window.addEventListener(`load`, (e) => {
//     document.onresize
// })


// sign-in
// let signIn = document.querySelector(`.location button.sign-in`); // console.log(signIn)














































// console.log(e.target.textContent)



// countryButton.firstChild.textContent = myCountry.textContent;

        // e.target.classList.add(`active`);
        
        // console.log(myCountry.textContent)
        // console.log(countryButton.firstChild)
        // countryMenu.classList.remove(`active`);
        // if (countryButton.firstChild.textContent !== ``){

        // }




// --------------------------------


// -------------
// overlay
// let deliver = document.querySelector(`.header .deliver`);
// let deliverImg = document.querySelector(`.header .deliver img`);
// let deliverSpan = document.querySelector(`.header .deliver span`);
// let deliverSpanH3 = document.querySelector(`.header .deliver span h3`);
// let overlay = document.createElement(`div`);
// let loc = document.createElement(`div`);
// document.addEventListener(`click`, (e) => {
//     e.stopPropagation();
//     if (e.target === deliver || e.target === deliverImg || e.target === deliverSpan || e.target === deliverSpanH3) {
//         // overlay
//         overlay.className = `overlay`;
//         document.body.appendChild(overlay);
//         // location
//         loc.className = `location`;
//         loc.innerHTML = 
//         `
//         <h3 class="choose">
//         Choose Your Location
//     </h3>
//     <div class="small-container">

//         <p>Delivery options 
//             and delivery
//             speeds may vary for different locations
//         </p>
//         <button>
//             Sign in to see your addresses
//         </button>
//         <div class="us-code">
//             <span></span>
//             <span>or enter a US zip code</span>
//             <span></span>
//         </div>
        
//         <form>
//             <input type="text">
//             <button>Apply</button>
//         </form>
        
//         <div class="or">
//             <span></span>
//             <span>or</span>
//             <span></span>
//         </div>
        
//         <div class="country">
//             <button>Country<span class="material-symbols-outlined">expand_more</span>
//             </button>
            
//             <div class="country-menu">
//                 <div class="high">
//                     <span>Australia</span>
//                     <span>Canada</span>
//                     <span>China</span>
//                     <span>Japan</span>
//                     <span>Mexico</span>
//                     <span>Singapore</span>
//                     <span>United Kingdom</span>
//                 </div>
//                 <div class="low">
//                     <span>Afghanistan</span>
//                     <span>Aland Islands</span>
//                     <span>Albania</span>
//                     <span>Algeria</span>
//                     <span>American Samoa</span>
//                     <span>Andorra</span>
//                     <span>Angola</span>
//                     <span>Anguilla</span>
//                     <span>Antigua and Barbuda</span>
//                     <span>Argentina</span>
//                     <span>Armenia</span>
//                     <span>Aruba</span>
//                     <span>Australia</span>
//                     <span>Austria</span>
//                     <span>Azerbaijan</span>
//                     <span>Bahamas, The</span>
//                     <span>Bahrain</span>
//                     <span>Bangladesh</span>
//                     <span>Barbados</span>
//                     <span>Belarus</span>
//                     <span>Belgium</span>
//                     <span>Belize</span>
//                     <span>Benin</span>
//                     <span>Bermuda</span>
//                     <span>Bhutan</span>
//                     <span>Bolivia</span>
//                     <span>Bonaire, Saint Eustatius and Saba</span>
//                     <span>Bosnia and Herzegovina</span>
//                     <span>Botswana</span>
//                     <span>Bouvet Island</span>
//                     <span>Brazil</span>
//                     <span>British Indian Ocean Territory</span>
//                     <span>Brunei Darussalam</span>
//                     <span>Bulgaria</span>
//                     <span>Burkina Faso</span>
//                     <span>Burundi</span>
//                     <span>Cambodia</span>
//                     <span>Cameroon</span>
//                     <span>Canada</span>
//                     <span>Cape Verde</span>
//                     <span>Cayman Islands</span>
//                     <span>Chad</span>
//                     <span>Chile</span>
//                     <span>China</span>
//                     <span>Christmas Island</span>
//                     <span>Cocos (Keeling) Islands</span>
//                     <span>Colombias</span>
//                     <span>Comoros</span>
//                     <span>Congo</span>
//                     <span>Congo, The Democratic Republic of the</span>
//                     <span>Cook Islands</span>
//                     <span>Costa Rica</span>
//                     <span>Cote D'ivoire</span>
//                     <span>Croatia</span>
//                     <span>Curaçao</span>
//                     <span>Cyprus</span>
//                     <span>Czech Republic</span>
//                     <span>Denmark</span>
//                     <span>Djibouti</span>
//                     <span>Dominica</span>
//                     <span>Dominican Republic</span>
//                     <span>Ecuador</span>
//                     <span>Egypt</span>
//                     <span>El Salvador</span>
//                     <span>Equatorial Guineas</span>
//                     <span>Eritreas</span>
//                     <span>Estonia</span>
//                     <span>Ethiopia</span>
//                     <span>Falkland Islands (Malvinas)</span>
//                     <span>Faroe Islands</span>
//                     <span>FijiFaroe Islands</span>
//                     <span>Finland</span>
//                     <span>France</span>
//                     <span>French Guiana</span>
//                     <span>French Polynesia</span>
//                     <span>French Southern Territories</span>
//                     <span>Gabon</span>
//                     <span>Gambia, The</span>
//                     <span>Georgia</span>
//                     <span>Germany</span>
//                     <span>Ghana</span>
//                     <span>Gibraltar</span>
//                     <span>Greece</span>
//                     <span>Greenland</span>
//                     <span>Grenada</span>
//                     <span>Guadeloupe</span>
//                     <span>Guatemala</span>
//                     <span>Guernsey</span>
//                     <span>Guinea</span>
//                     <span>Guinea-Bissau</span>
//                     <span>Guyana</span>
//                     <span>Haiti</span>
//                     <span>Heard Island and the McDonald Islands</span>
//                     <span>Holy See</span>
//                     <span>Honduras</span>
//                     <span>Hong Kong</span>
//                     <span>Hungary</span>
//                     <span>Iceland</span>
//                     <span>India</span>
//                     <span>Indonesia</span>
//                     <span>Iraq</span>
//                     <span>Ireland</span>
//                     <span>Isle of Man</span>
//                     <span>Israel</span>
//                     <span>Italy</span>
//                     <span>Jamaica</span>
//                     <span>Japan</span>
//                     <span>Jersey</span>
//                     <span>Jordan</span>
//                     <span>Kazakhstan</span>
//                     <span>Kenya</span>
//                     <span>Kiribati</span>
//                     <span>Kosovo</span>
//                     <span>Kuwait</span>
//                     <span>Kyrgyzstan</span>
//                     <span>Lao People's Democratic Republic</span>
//                     <span>Latvia</span>
//                     <span>Lebanon</span>
//                     <span>Lesotho</span>
//                     <span>Liberia</span>
//                     <span>Libya</span>
//                     <span>Liechtenstein</span>
//                     <span>Lithuania</span>
//                     <span>Luxembourg</span>
//                     <span>Macao</span>
//                     <span>Macedonia, The Former Yugoslav Republic of</span>
//                     <span>Madagascar</span>
//                     <span>Malawi</span>
//                     <span>Malaysia</span>
//                     <span>Maldives</span>
//                     <span>Mali</span>
//                     <span>Malta</span>
//                     <span>Marshall Islands</span>
//                     <span>Martinique</span>
//                     <span>Mauritania</span>
//                     <span>Mauritius</span>
//                     <span>Mayotte</span>
//                     <span>Mexico</span>
//                     <span>Micronesia, Federated States of</span>
//                     <span>Moldova, Republic of</span>
//                     <span>Monaco</span>
//                     <span>Mongolia</span>
//                     <span>Montenegro</span>
//                     <span>Montserrat</span>
//                     <span>Morocco</span>
//                     <span>Mozambique</span>
//                     <span>Myanmar</span>
//                     <span>Namibia</span>
//                     <span>Nauru</span>
//                     <span>Nepal</span>
//                     <span>Netherlands</span>
//                     <span>Netherlands Antilles</span>
//                     <span>New Caledonia</span>
//                     <span>New Zealand</span>
//                     <span>Nicaragua</span>
//                     <span>Niger</span>
//                     <span>Nigeria</span>
//                     <span>Niue</span>
//                     <span>Norfolk Island</span>
//                     <span>Norway</span>
//                     <span>Oman</span>
//                     <span>Pakistan</span>
//                     <span>Palau</span>
//                     <span>Palestinian Territories</span>
//                     <span>Panama</span>
//                     <span>Papua New Guinea</span>
//                     <span>Paraguay</span>
//                     <span>Peru</span>
//                     <span>Philippines</span>
//                     <span>Pitcairn</span>
//                     <span>Poland</span>
//                     <span>Portugal</span>
//                     <span>Qatar</span>
//                     <span>Republic of Korea</span>
//                     <span>Reunion</span>
//                     <span>Romania</span>
//                     <span>Russian Federation</span>
//                     <span>Rwanda</span>
//                     <span>Saint Barthelemy</span>
//                     <span>Saint Helena, Ascension and Tristan da Cunha</span>
//                     <span>Saint Kitts and Nevis</span>
//                     <span>Saint Lucia</span>
//                     <span>Saint Martin</span>
//                     <span>Saint Pierre and Miquelon</span>
//                     <span>Saint Vincent and the Grenadines</span>
//                     <span>Samoa</span>
//                     <span>San Marino</span>
//                     <span>Sao Tome and Principe</span>
//                     <span>Saudi Arabia</span>
//                     <span>Senegal</span>
//                     <span>Serbia</span>
//                     <span>Seychelles</span>
//                     <span>Sierra Leone</span>
//                     <span>Singapore</span>
//                     <span>Sint Maarten</span>
//                     <span>Slovakia</span>
//                     <span>Slovenia</span>
//                     <span>Solomon Islands</span>
//                     <span>Somalia</span>
//                     <span>South Africa</span>
//                     <span>South Georgia and the South Sandwich Islands</span>
//                     <span>Spain</span>
//                     <span>Sri Lanka</span>
//                     <span>Suriname</span>
//                     <span>Svalbard and Jan Mayen</span>
//                     <span>Swaziland</span>
//                     <span>Sweden</span>
//                     <span>Switzerland</span>
//                     <span>Taiwan</span>
//                     <span>Tajikistan</span>
//                     <span>Tanzania, United Republic of</span>
//                     <span>Thailand</span>
//                     <span>Timor-leste</span>
//                     <span>Togo</span>
//                     <span>Tokelau</span>
//                     <span>Tonga</span>
//                     <span>Trinidad and Tobago</span>
//                     <span>Tunisia</span>
//                     <span>Turkey</span>
//                     <span>Turkmenistan</span>
//                     <span>Turks and Caicos Islands</span>
//                     <span>Tuvalu</span>
//                     <span>Uganda</span>
//                     <span>Ukraine</span>
//                     <span>United Arab Emirates</span>
//                     <span>United Kingdom</span>
//                     <span>United States Minor Outlying Islands</span>
//                     <span>Uruguay</span>
//                     <span>Uzbekistan</span>
//                     <span>Vanuatu</span>
//                     <span>Venezuela</span>
//                     <span>Vietnam</span>
//                     <span>Virgin Islands, British</span>
//                     <span>Wallis and Futuna</span>
//                     <span>Western Sahara</span>
//                     <span>Yemen</span>
//                     <span>Zambia</span>
//                     <span>Zimbabwe</span>

//                 </div>
//             </div>
//         </div>
        
//         <div class="done">Done</div>




//     </div>
//         `
//         document.body.appendChild(loc);

//     } else {
//         overlay.remove();
//         loc.remove();
//     };
// });


// country
// let countries = document.querySelectorAll(`.country-menu span`); // console.log(countries);
// let countryMenu = document.querySelector(`.country-menu`);
// let countryButton = document.querySelector(`.small-container .country button`); // console.log(countryButton.firstChild)
// countryButton.onclick = function () {
//     countryMenu.style.display = `block`;
// };
// document.addEventListener(`click`, (e) => {
//     // countryMenu.style.display = `block`;
//     if (e.target === countryMenu) {
//         countryMenu.style.display = `block`;
//     }
// })
// // local Default
// let getCountry = localStorage.getItem(`my_country`);
// if (getCountry !== null) {
//     countryButton.firstChild.textContent = getCountry;
//     countryButton.classList.add(`active`);
// };
// countries.forEach(con => {
//     con.addEventListener(`click`, (e) => {
//         let myCountry = e.target;
//         countries.forEach(con => {
//             if (con.classList.contains(`active`)) {
//                 countries.forEach(cont => {cont.classList.remove(`active`)});
//                 countryButton.firstChild.textContent = myCountry.textContent;
//                 localStorage.setItem(`my_country`, countryButton.firstChild.textContent);
//             };
//             e.target.classList.add(`active`);
//         });
//         countryMenu.style.display = `none`;
//     });
// });
// --------------------------------






// overlay
// language.addEventListener(`mouseenter`, (e) => {
//     overlay.classList.add(`active`);
// });
// language.addEventListener(`mouseleave`, (e) => {
//     overlay.classList.remove(`active`);
// });

// account.addEventListener(`mouseenter`, (e) => {
//     overlay.classList.add(`active`);
// });
// account.addEventListener(`mouseleave`, (e) => {
//     overlay.classList.remove(`active`);
// });











// function get(e,X = document.querySelector(`.${e}`)){
//     let my = X;
// }
// get(`myp`)
// console.log(my)

// let my;
// function get(e,l){
//     e = document.querySelector(`.${l}`)
// }
// get(my,`myp`)
// console.log(get(my,`myp`))

// let myElement = function (e){
//     document.querySelector(`.${e}`)
// }
// console.log(myElement(myp))







// let my;
// function get(e){
//     my = document.querySelector(`.${e}`)
// }
// get(`myp`)
// console.log(my)

// myEl = function (e){
//     console.log(document.querySelector(`.${e}`));
// }
// myEl(`myp`)

// E = function (e){
//     my = document.querySelector(`.${e}`);
// }
// E(`myp .content`)
// console.log(my)
// myel = (e)=>{e}
// function myel(e){
//     let my = document.querySelector(`.${e}`)
//     return my;
// }
// console.log(myel(`myp`))








// let my;
// function get(my,e){
//     my = document.querySelector(`.${e}`)
// }
// get(myp,`myp`)
// console.log(myp)









// function mix(e) {
//     e.onmouseenter = (e) => {
//         if (e.target === language){
//         Add(overlay);Add(langMenu);
//     } else if (e.target === account){
//         Add(overlay);
//     }
// };
//     e.onmouseleave = (e) => {
//         if (e.target === language){
//         Remove(overlay);Remove(langMenu);
//     } else if (e.target === account){
//         Remove(overlay);
//     }
// };



// function mix(lO = lO.onmouseenter, AO = AO.onmouseenter,lV = lV.onmouseleave, AV = AV.onmouseleave) {
//     lO =(e)=> {Add(overlay);Add(langMenu);};
//     AO =(e)=> {Add(overlay);};
//     lV =(e)=> {Remove(overlay);Remove(langMenu)};
//     AV =(e)=> {Remove(overlay);};
// }
// mix(language,account,language,account)








// function mix(l) {
//     l.onmouseenter =_=> {Tgl(overlay);Tgl(langMenu);};
//     l.onmouseleave =_=> {Tgl(overlay);};
//     // l.onmouseleave =_=> {Remove(overlay);Remove(langMenu)};
//     // A.onmouseleave =_=> {Remove(overlay);};
// };
// mix(language);
// mix(account);

















// function HoverAccount(e) {
//     e.onmouseenter =_=>{Add(overlay);Add(langMenu);};
//     e.onmouseleave =_=>{Remove(overlay);Remove(langMenu);};
// };
// HoverAccount(language);


// hover OverLAy && Menu
// function HoverMenu(e) {
//     e.onmouseenter =_=>{Add(overlay)};
//     e.onmouseleave =_=>{Remove(overlay)};
// };
// HoverMenu(language);
// HoverMenu(account);











// function Tgl(e) {
//     e.target.classList
// };





// Add & Remove
// function ADDAndRemove(e) {
//     e.onmouseenter =_=>{Add(langMenu)};
//     e.onmouseleave =_=>{Remove(langMenu)} ;
// };


// ADDAndRemove(language)
// function ADDAndRemove(e){
//     function Add(el) {
//         el.classList.add(`active`);
//     };
//     function Remove(el) {
//         el.classList.remove(`active`);
//     };
// };

// langMenu.classList.add(`active`)







// console.log(e.currentTarget)
// console.log(e.target)








// let n;
// function z(l){
//     n = document.querySelector(`.${l}`)
// }
// z(`container`)
// console.log(n)




// function z(l){
//     return document.querySelector(`.${l}`);
// };

// console.log(z(`container`));





// function z(l){
//     return document.querySelector(`.${l}`);
// };
// let container = z(`container`);
// console.log(container);











// z(`.amazon-music`).onclick = function (e) {
//     e.stopPropagation();Add(HidnCont);
// };
// z(`.main-menu-back a`).onclick = function (e) {
//     e.stopPropagation();Remove(HidnCont);
// };







// z(`.stream-music`).style.transition = `display 3s ease`
// z(`.stream-music`).style.backgroundColor = `red`





// function s(l){
//     z(`.left-menu .${l}`).onclick = function (e) {
//         e.stopPropagation();Add(HidnCont);
//         Add(z(`.sec-menu .${l}`));
//     };
// }
// s(document.addEventListener(`click`, (e) => {return e.target.classList} ))




// document.addEventListener(`click`, function (e) {
//     e.stopPropagation();
//     console.log(e.target)
//     z(`.left-menu .${e.target.classList}`).onclick = function (e) {
//         e.stopPropagation();Add(HidnCont);
//         Add(z(`.sec-menu .${e.target.classList}`));
//     };
// })









// function o(element){
//     element.addEventListener(`click`, (e) => {
//         e.stopPropagation();
//         // console.log(e.currentTarget)
//         Add(z(`.sec-menu .kindle`));
//     });
// };
// o(z(`.left-menu a.kindle`))





// hidden-list 
// left  
// function go(el){
//     el.onclick = function (e) {
//         e.stopPropagation();Add(HidnCont);
//         console.log(e.currentTarget)
//         if (e.currentTarget === el){
//             Add(el)
//         }
//     };
// };
// go(z(`.amazon-music`));
// // right
// function bk(el){
//     el.onclick =  (e) => {
//         e.stopPropagation();Remove(HidnCont);
//     };
// };
// bk(z(`.main-menu-back a`));


        // secMnDvs.forEach(function (e) {
        //     e.classList.remove(`active`);
        // });


        // z(`.amazon-music`).onclick = function (e) {
//     e.stopPropagation();Add(HidnCont);
//     Add(z(`.stream-music`));
// };

// z(`.left-menu .kindle`).onclick = function (e) {
//     e.stopPropagation();Add(HidnCont);
//     Add(z(`.sec-menu .kindle`));
// };







// z(`.sec-menu .${e.currentTarget.className}`).classList.add(`active`);




// zA(`.left-menu a`).forEach(a => {
//     a.addEventListener(`click`, (e)=>{
//         e.stopPropagation();Add(HidnCont);RvAlAv(secMnDvs);
//         Add(z(`.sec-menu .${e.currentTarget.className}`));
//     });
// });










// zA(`.left-menu a`).forEach(a => {
//     a.addEventListener(`click`, (e)=>{
//         e.stopPropagation();Add(HidnCont);
//         // RvAlAv(secMnDvs);zA(`.sec-menu div`).forEach(e=>{e.style.display = `none`})
//         RvAlAv(secMnDvs);noChild(zA(`.sec-menu div`));
//         Add(z(`.sec-menu .${e.currentTarget.className}`));
//         bl(z(`.sec-menu .${e.currentTarget.className}`))
//     });
// });




// no()
// function no(e){
//     e.addEventListener(`click`, (e) => {
//         e.stopPropagation();e.preventDefault()
//         e.target.style.display = `none`;
//     });
//     // e.style.display = `none`;
// };
// no(z(`.hidden-list`))
// display none
// function no(e){
//     e.stopPropagation();
//     e.onclick
//     e.style.display = `none`;
// };
// no(z(`.hidden-list`));
// document.addEventListener(`click`, (e) => {
//     e.stopPropagation();e.preventDefault()
//     e.target.style.display = `none`;
// })


// no(z(`.hidden-list`));










// zA(`.left-menu a`).forEach(a => {
//     a.addEventListener(`click`, (e)=>{
//         e.stopPropagation();Add(HidnCont);
//         // RvAlAv(secMnDvs);zA(`.sec-menu div`).forEach(e=>{e.style.display = `none`})
//         RvAlAv(secMnDvs);noChild(zA(`.sec-menu div`));
//         Add(z(`.sec-menu .${e.currentTarget.className}`));
//         bl(z(`.sec-menu .${e.currentTarget.className}`))
//     });
// });








// lopAl()
// c()
// c(lopAl(document.querySelectorAll(`div`)))
// c(z(`.see-all`))




    // Tog(lopAl(zA(`.see-all .material-symbols-outlined`)));
    // zA(`.see-all .material-symbols-outlined`).forEach(e=>{
    //     Tog(e)
    // })




    // c(z(`.see-all`));
// z(`.see-all`).onclick = (e) => {
//     e.stopPropagation();
//     Tog(z(`.see-all-line`));
//     // Tog(lopAl(zA(`.see-all .material-symbols-outlined`)));
//     c(zA(`.see-all .material-symbols-outlined`).forEach)
// };






// z(`.see-all`).addEventListener(`click`, (e) => {
//     e.stopPropagation();Tog(z(`.see-all-line`));
//     console.log(e.target.classList)
//     zA(`.see-all .s`).forEach(e=>{Tog(e)});Tog(z(`.see-all-list`));
//     (z(`.see-all-list`).classList.contains(`active`))?
//     z(`.see-all span`).textContent = `See less` : 
//     z(`.see-all span`).textContent = `See all` ;
// });








// z(`.see-all`).addEventListener(`click`, (e) => {
//     e.stopPropagation();
//     if (e.currentTarget.classList.contains(`shop`)){
//         Tog(z(`.see-all-line.shop`));
//     }; 
//     if (e.currentTarget.classList.contains(`programs`)) {
//         Tog(z(`.see-all-line.programs`));
//     }
//     // zA(`.see-all.programs .s`).forEach(e=>{Tog(e)});Tog(z(`.see-all-list.programs`));
//     // (z(`.see-all-list.programs`).classList.contains(`active`))?
//     // z(`.see-all.programs span`).textContent = `See less` : 
//     // z(`.see-all.programs span`).textContent = `See all` ;
// });    



// function q(el) {
//     z(`.see-all ${el}`).addEventListener(`click`, (e) => {
//         e.stopPropagation();Tog(z(`.see-all-line ${el}`));
//         console.log(e.target.classList)
//         zA(`.see-all .s`).forEach(e=>{Tog(e)});Tog(z(`.see-all-list`));
//         (z(`.see-all-list`).classList.contains(`active`))?
//         z(`.see-all span`).textContent = `See less` : 
//         z(`.see-all span`).textContent = `See all` ;
//     });
// }
// q(z(`shop`))
// q(z(`.see-all`))






// let n = 1;

// z(`.fa-chevron-right`).onclick = function (e) {
//     n++;z(`.landing`).style.backgroundImage = `url(imgs/${n}.jpg)`;
//     if (n === 7){n = 1;};
// };
// z(`.fa-chevron-left`).onclick = function (e) {
//     n++;z(`.landing`).style.backgroundImage = `url(imgs/${n}.jpg)`;
//     if (n === 7){n = 1;};
// };

// z(`.fa-chevron-left`).onclick = function (e) {
//     if (n === 1){n = 7;};
//     --n;z(`.landing`).style.backgroundImage = `url(imgs/${n}.jpg)`;
    
// };







// // landing
// // -----------
// let n = 0,imgs;
// // default
// let getBack = localStorage.getItem(`my_background`);
// if ( getBack !== null) {
//     z(`.landing`).style.backgroundImage = getBack;
// };// right
// z(`.fa-chevron-right`).onclick = function (e) {
//     n++;if(n > 7){n = 1;};
//     ss(e)
// };// left
// z(`.fa-chevron-left`).onclick = function (e) {
//     n--;if(n < 1){n = 7;};
//     imgs =`url(imgs/${n}.jpg)`;
//     z(`.landing`).style.backgroundImage = imgs;
//     localStorage.setItem(`my_background`, imgs);
// };
// function ss(e){
//     imgs =`url(imgs/${n}.jpg)`;
//     z(`.landing`).style.backgroundImage = imgs;
//     localStorage.setItem(`my_background`, imgs);
// }




// let getBack = localStorage.getItem(`my_background`);
// if ( getBack !== null) {
//     z(`.landing`).style.backgroundImage = getBack;
// };




// z(`.fa-chevron-right`).onclick = function (e) {
//     // n++;
//     // if (n >= 1){n++}
//     if (n < 8){n++}
//     z(`.landing`).style.backgroundImage = `url(imgs/${n}.jpg)`;
//     // localStorage.setItem(`my_background`, `url(imgs/${n}.jpg)`);
//     // if (n > 7){n--;};
    
//     c(n)
// };

// z(`.fa-chevron-left`).onclick = function (e) {
//     if (n === 1){n = 7;};
//     --n;z(`.landing`).style.backgroundImage = `url(imgs/${n}.jpg)`;
//     // localStorage.setItem(`my_background`, `url(imgs/${n}.jpg)`);
// };







    // if(n===6){
    //     z(`.fa-chevron-right`).style.color = `white`;
    //     z(`.fa-chevron-left`).style.color = `white`;
    // } else {
    //     z(`.fa-chevron-right`).style.color = `black`;
    //     z(`.fa-chevron-left`).style.color = `black`;





        // if(n===6){
    //     e.style.color = `white`;
    // } else {
    //     e.style.color = `black`;
    // };








    // setTimeout(() => {
//     n++;ss(z(`.fa-chevron-right`))
//     c(n)
// }, 1000);











// setTimeout(() => {
//     setInterval(() => {
//         n++;if(n > 7){n = 1;};ss(z(`.fa-chevron-right`))
//     }, 3000000);
// }, 1000);















// c(n)
// if (n === 6){
//     z(`.fa-chevron-right`).style.color = `white`
// }
// z(`.fa-chevron-right`).style.color = `white`





// if (z(`.landing`).style.backgroundImage === "url(imgs/6.jpg)"){
//     z(`.fa-chevron-left`).style.Color = `white`;
// }






// console.log(`url(imgs/)`)
// console.log(window.document.URL)
// console.log(`<img src="imgs"/>`)
// let di = document.createElement(`div`);
// di.src = `imgs`;
// console.log(di.src)

// di.style.display = `none`;
// document.body.appendChild(di)
// di.innerHTML = `
// <img class="zz" src="imgs/1.jpg"/>
// <img class="zz" src="imgs/2.jpg"/>
// <img class="zz" src="imgs/3.jpg"/>
// <img class="zz" src="imgs/4.jpg"/>
// <img class="zz" src="imgs/5.jpg"/>
// <img class="zz" src="imgs/6.jpg"/>
// <img class="zz" src="imgs/7.jpg"/>
// `;
// console.log(di.children)


// zA(`.zz`).forEach(ee=>{
//     z(`.fa-chevron-right`).onclick = function (e){
//         c(ee.previousElementSibling)
//     }
// })






// window.localStorage.removeItem(`my-wit`)







// prosCopy.style.display = `block`;
// (z(`.list-products`)).appendChild(prosCopy);


// if(window.innerWidth < 950) {
//     c(window.innerWidth);
//     prosCopy.style.display = `block`;

// } 
// if(window.innerWidth > 950) {
//     c(window.innerWidth);
//     prosCopy.style.display = `none`;
// } 

// else {
//     prosCopy.style.display = `none`;
// };