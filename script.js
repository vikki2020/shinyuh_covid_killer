import './styles.scss';
import { vaccines } from './src/data';

console.log(vaccines);
const app = document.getElementById('app');
const title = '<header><h1 >COVID-KILLER</h1>';
const btnPrice = '<button type="button" class="btn btn-all">show the vaccines by descending price</button>';
const btnValidVac = '<button type="button" class="btn btn-recent">validated vaccines only</button></header>';

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
   <p class="card-text">Price:${vac.Prix_unitaire}</p>
    <p  class="card-text">Validation:${vac.Approuve}</p>
    <form action="">
    <label for="amount">amount:</label>
    <input type="number" id="amount" name="amount" value="">
    <p></p>
    <a href="#" class="btn btn-primary reserve">reserve</a>
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
