// spread syntax ...
function createElement(tag, ...attributes){
    if(!tag){
        console.error("tag is mandatory");
        return;    
    }
    var element = document.createElement(tag);
    attributes.forEach(attribute => {
        element.setAttribute(attribute[0], attribute[1]);
    })
    
    return element;   
}
export default createElement;
