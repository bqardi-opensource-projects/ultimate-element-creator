// spread syntax ...
function createElement(tag, ...attributes){
    if(!tag){
        console.error(`The argument "tag" is mandatory! Examples: "div", "header", "img", "p".`);
        return;    
    }
    var element = document.createElement(tag);
    attributes.forEach(attribute => {
        element.setAttribute(attribute[0], attribute[1]);
    })
    
    return element;   
}
export default createElement;
