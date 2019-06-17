import HelloWorld from './hello-world';
import HelloWorldChild from './hello-world-child';

function createJSXElement() {
    const [node, path, ...children] = arguments;
    const element = document.createElement(node);
    Object.assign(element,path||{});
    children.forEach(child => {
        if(typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

window.createJSXElement = createJSXElement;
window.customElements.define(HelloWorld._custom_tag, HelloWorld);
window.customElements.define(HelloWorldChild._custom_tag, HelloWorldChild);

export {
    HelloWorld,
    HelloWorldChild,
    createJSXElement
}