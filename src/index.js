const messages = require('./messages');
import Button from './button';
// const newMessage = () =>(
//   `<p>${messages.hi} ${messages.event} from ${messages.who}</p>`
// )
console.log(Button);

const newMessage = () => (Button.button);

const app = document.getElementById('app');
app.innerHTML = newMessage();

Button.attachEl();

if (module.hot) {
  module.hot.accept();
}
