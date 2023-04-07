import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'with', '--TS'], ' ');

  return element;
}

export default () => {
  document.body.appendChild(component());

  console.log('Hello World!');
};
