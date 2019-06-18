import { Component } from './component';

const stylesheetElement = document.createElement('style');
stylesheetElement.innerHTML = `div {
  color: green;
}`;

class HelloWorldChild extends Component {
  constructor() {
    super({
      stylesheetElement 
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