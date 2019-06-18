import HelloWorld from './hello-world';
import HelloWorldChild from './hello-world-child';

function createJSXElement() {
    const [node, path, ...children] = arguments;
    const element = document.createElement(node);
    Object.assign(element,path||{});
    // console.dir(arguments);
    const appendChild = (child) => {
        if(typeof child !== 'object') {
            element.appendChild(document.createTextNode(child));
        } else if (Array.isArray(child)) {
            child.forEach(appendChild);
        } else {
            try{
                element.appendChild(child);
                } catch(e) {
                    console.error(e);
                    console.error(child);
                }
        }
    }
    appendChild(children);
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