import {products} from "./data.js";
import {addToCart,getCart,changeQty,cartCount,clearCart} from "./cart.js";
import {route} from "./router.js";
const app=document.querySelector("#app"),count=document.querySelector("#cart-count"),toast=document.querySelector("#toast");
let category="All";
const money=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
function notify(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}
function renderHome(){app.innerHTML=`<section class="hero"><div><span class="eyebrow">The NOVA edit · 2026</span><h1>Make room for<br>the good things.</h1><p>Thoughtful everyday essentials, chosen to make your space feel a little more like you.</p><a class="button" href="#products">Explore the collection</a></div><div class="hero-art"><img src="assets/planter.svg" alt="Illustration of a simple ceramic planter"></div></section><section class="section" id="products"><div class="section-head"><div><span class="eyebrow">Small things, thoughtfully chosen</span><h2>Shop the collection</h2></div><div class="filters">${["All","Home","Accessories","Living"].map(c=>`<button class="filter ${category===c?"active":""}" data-category="${c}">${c}</button>`).join("")}</div></div><div class="grid">${products.filter(p=>category==="All"||p.category===category).map(p=>`<article class="card"><div class="product-image"><img loading="lazy" src="${p.image}" alt="${p.name}"></div><div class="card-info"><h3>${p.name}</h3><div class="meta"><span>${p.category}</span><span class="price">${money(p.price)}</span></div><button class="add" data-add="${p.id}">Add to bag</button></div></article>`).join("")}</div></section>`}
function renderAbout(){app.innerHTML=`<section class="p
