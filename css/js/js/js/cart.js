const KEY="nova-cart-v1";
export function getCart(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return []}}
function save(cart){localStorage.setItem(KEY,JSON.stringify(cart));window.dispatchEvent(new Event("cartchange"))}
export function addToCart(id){const cart=getCart(),item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});save(cart)}
export function changeQty(id,delta){let cart=getCart().map(x=>x.id===id?{...x,qty:x.qty+delta}:x).filter(x=>x.qty>0);save(cart)}
export function cartCount(){return getCart().reduce((n,x)=>n+x.qty,0)}
export function clearCart(){save([])}
