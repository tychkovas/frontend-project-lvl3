// import * as yup from 'yup';
// import onChange from 'on-change';
// import * as _ from 'lodash';
// import _ from 'lodash';

export default () => {
  const elements = {
    form: document.querySelector('.rss-form') as HTMLInputElement,
    input: document.querySelector('#url-input') as HTMLInputElement
  };

  elements.form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    const data: FormData = new FormData(e.target as HTMLFormElement);
    const currentURL = data.get('url');
    console.log('currentURL =', currentURL);
  });

  console.log('Hello World!');
};
