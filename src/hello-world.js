import * as style from './hello-world.scss';
import { Element } from './element';

class HelloWorld extends Element {

  constructor() {
    super({ stylesheet: style.toString() });
  }

  render() {
    return <div classList={["hw"]}>
      Hello World Parent
    <hello-world-child></hello-world-child>
    </div>;
  }
}
HelloWorld._custom_tag = 'hello-world';

export default HelloWorld;