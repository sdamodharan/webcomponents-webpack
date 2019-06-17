import { Element } from './element';

class HelloWorldChild extends Element {
  constructor() {
    super({
      stylesheet: `div {
                      color: green;
                    }`
    });
  }

  render() {
    const el = document.createElement('div');
    el.innerText = 'Hello World Child';
    return el;
  }
}
HelloWorldChild._custom_tag = 'hello-world-child';

export default HelloWorldChild;