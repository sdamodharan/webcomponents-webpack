import * as style from './hello-world.scss';
import { Component } from './component';

const stylesheetElement = document.createElement('style');
stylesheetElement.innerHTML = style.toString();

class HelloWorld extends Component {

  constructor() {
    super({ stylesheetElement });
    this.data = [];
    setInterval(()=> {
      this.data = [];
      for (let index = 0; index < 1000; index++) {
        this.data.push(index);
      }
      this._requestRender();
    },2000);
  }

  render() {
    const elements = [];
    this.data.forEach((num) => {
      elements.push(<li><hello-world-child >{num}</hello-world-child></li>);
    });
    return <div classList={["hw"]}>
      Hello World Parent
    <ol>
      {elements}
    </ol>
    </div>;
  }
}
HelloWorld._custom_tag = 'hello-world';

export default HelloWorld;