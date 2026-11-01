export function route(){const path=location.hash.replace(/^#/, "")||"/";window.dispatchEvent(new CustomEvent("routechange",{detail:path}))}
export function navigate(path){location.hash=path}
window.addEventListener("hashchange",route);
