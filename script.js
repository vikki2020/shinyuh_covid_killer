import './styles.scss';
import { vaccines } from './src/data';

console.log(vaccines);// check the data is well stored.
const app = document.getElementById('app');

// create html elements
const title = '<header><h1 >COVID-KILLER</h1>';
const btnPrice = '<button type="button" class="btn btn-all">show the vaccines by descending price</button>';
const btnValidVac = '<button type="button" class="btn btn-recent btn-valid-vac">validated vaccines only</button></header>';
// put the html elements in render function
function render() {
  app.innerHTML = '';
  let container = '<main class="card-columns">';
  for (const vac of vaccines) {
    container += `
  <div class="card" style="width: 18rem;">
    <img src="${vac.Image}" style="" class="card-img-top" alt="...">
    <div class="card-body" id="${vac.Id}">
        <h5 class="card-title">${vac.Nom}</h5>
   <p class="card-text"> Inventors:${vac.Inventeurs}</p>
  <p class="card-text">Production Location:${vac.Lieux_de_production}</p>
    <p class="card-text">Technology:${vac.Technologie}</p>

<p class="card-text">Quantity:${vac.Quantite}</p>
   <p class="card-text">Price(USD):${vac.Prix_unitaire}</p>
    <p  class="card-text">Validation:${vac.Approuve}</p>
    <form action="">
    <label for="amount">amount:</label>
    <input type="number" id="amount" name="amount" value="">
    <p></p>
    <a href="#" id="reserveBtn" class="btn btn-primary reserve">reserve</a>
  </form>
   
     
      
    </div>
  </div>
  `;
  }
  const foot = `
<footer>
  <div class="basket__title">
      <i class="fas fa-shopping-basket"></i>
      <span>View your basket (0)</span>
  </div>  
  <div class="basket__content">
  </div>
  <a href="#" class="btn btn-primary order">place the order</a>
</footer>
`;

  const endContainer = '</main>';
  app.innerHTML += title + btnPrice + btnValidVac
  + container + endContainer + foot;
}
render();// execute render

// to display validated vaccines only, then change to show all vaccine with render()
const btnVac = document.querySelector('.btn-valid-vac');
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-valid-vac')) {
    const allVac = app.querySelectorAll('.card');
    // console.log(allVac);
    for (let i = 0; i < vaccines.length; i++) {
      if (vaccines[i].Approuve === false) {
        console.log(vaccines[i].Approuve);
        allVac[i].style.display = 'none';
        btnVac.innerHTML = 'All vaccines';// only shows one time,need to modify
        e.target.classList.add('btn-all-vac');
        e.target.classList.remove('btn-valid-vac');
      }
    }
  } else if (e.target.matches('.btn-all-vac')) {
    render();
    e.target.classList.remove('btn-all-vac');
    e.target.classList.add('btn-valid-vac');
    // btnVac.innerHTML = '<span>validated vaccines only</span>';
  }
});
// reserve vaccines to backet
// working on add the specified value of each vaccine to backet
// then set the input to none
// disable the reserve btn 10mins
let count = 0;
const titleBasket = document.querySelector('.basket__title');
const contentBasket = document.querySelector('.basket__content');
const reserve = document.getElementById('amount').value;// try to get the user input number...still working on it.
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.reserve')) {
    const { id } = e.target.parentNode.parentNode;
    console.log(id);
    count += 1;
    titleBasket.innerHTML = `
        <i class="fas fa-shopping-basket"></i>
        <span>View your basket (${count})</span>
    `;
    contentBasket.innerHTML += `
        <div class="borrowedBook"><a href="#">${vaccines[id].Nom} </a>
        </div>
    `;
    document.getElementById('reserveBtn').disabled = true;// disable after clicking on reserve btn,working on it..
  }
});

// When a user clicks on "place order" in the footer:
// the page is completely empty
// a message indicates "The order has been registered ..."

// create a function to render the new page with a message displayed
function renderOrder() {
  app.innerHTML = '';
  let newContainer = '<div class="new">';
  newContainer += '<p>THANK YOU!</br> your order has been registered,</br> please be patient and wait for another <span class="red">180</span> days.</p></br><a href="#" class="btn btn-primary back">back to website</a></div>';
  app.innerHTML += newContainer;
}
// to test whether the renderOrder()works
// renderOrder();

// event delegation to renderOrder() to new page, and back to website when clicking the back btn
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.order')) {
    console.log(e.target);
    renderOrder();
  } else if (e.target.matches('.back')) {
    console.log(e.target);
    render();
  }
});

// not solved bugs:
// 1)the all vaccine btn can be displayed only once..
// 2)the basket can only be added when the website is reloaded,
// if I click on the btn to show the validated vaccines or the btn to place the order
// (which all include the render()function in the event delegation conditions),
// the basket stays empty even I reserve the vaccines.
// 3)still working on 2nd part of dynamic exercises ;(..
