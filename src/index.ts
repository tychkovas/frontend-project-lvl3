// Import our custom CSS
import './scss/styles.scss';

// import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';

import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'with', 'TS'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('Hello World!');
