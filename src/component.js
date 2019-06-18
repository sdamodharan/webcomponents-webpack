class Component extends HTMLElement {
    /**
     * 
     * @param {open|close} shadowDomMode 
     * @param {string} stylesheet 
     */
    constructor({ shadowDomMode, stylesheetElement }) {
        super();
        this.shadowRootEl = this.attachShadow({ mode: shadowDomMode || 'open' });
        if (stylesheetElement) {
            this.shadowRootEl.appendChild(stylesheetElement.cloneNode(true));
        }
        this.__slot_element = document.createElement('slot');
        this.shadowRootEl.appendChild(this.__slot_element);
        window.requestAnimationFrame(() => {
            this.__prepareRender()
        });
    }

    connectedCallback() {
        this.__do_render();
    }

    __do_render() {
        if (this.isConnected) {
            window.requestAnimationFrame(() => {
                this.__slot_element.innerHTML = '';
                this.__slot_element.appendChild(this.fragment);
            });
        }
    }

    _requestRender() {
        this.__prepareRender();
        this.__do_render();
    }

    __prepareRender() {
        this.fragment = document.createDocumentFragment();
        this.fragment.appendChild(this.render());
    }
}

export {
    Component
}