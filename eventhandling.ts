//Event Handling
export function initFunction() {
    const element = document.getElementById("sample");
    //element?.addEventListener("click", listenerFunction);
   // element?.addEventListener("mouseenter", listenerFunction1);
    element?.addEventListener("mouseenter", listenerFunction1);
}
//click & mouseenter
// function listenerFunction(this: HTMLElement, ev: Event) {
//     ev.preventDefault();//prevent the default action
//     this.style.backgroundColor = "red";
//     this.style.marginLeft = '800px';
//     this.style.borderRadius = '10px';
//     this.style.height = '100px';
//     this.style.width = '100px';
// }
//mouseleave
function listenerFunction1(this: HTMLElement, ev: Event) {
    ev.preventDefault();//prevent the default action
    this.style.backgroundColor = "black";
    this.style.marginLeft = '400px';
    this.style.borderRadius = '40px';
    this.style.height = '150px';
    this.style.width = '150px';
}
