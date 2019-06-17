class Element extends HTMLElement {
    /**
     * 
     * @param {open|close} shadowDomMode 
     * @param {string} stylesheet 
     */
    constructor({ shadowDomMode, stylesheet }) {
        super();
        console.log({shadowDomMode, stylesheet});
        this.shadowRootEl = this.attachShadow({ mode: shadowDomMode || 'open' });
        if (stylesheet) {
            const __style_element = document.createElement('style');
            __style_element.innerHTML = stylesheet;
            this.shadowRootEl.appendChild(__style_element);
        }    
        this.__slot_element = document.createElement('slot');
        this.shadowRootEl.appendChild(this.__slot_element);
    }

    connectedCallback() {
        this.__do_render();
    }

    __do_render() {
        window.requestAnimationFrame(() => {
          this.__slot_element.innerHTML = '';
          this.__slot_element.appendChild(this.render());
        });
    }
}

export {
    Element
}