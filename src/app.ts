// import * as yup from 'yup';
// import onChange from 'on-change';
// import * as _ from 'lodash';
// import _ from 'lodash';

export default () => {
  //   const validateURL = async (url, parsedLinks) => {
  //     const schema = yup.string().url().notOneOf(parsedLinks).required();
  //     return schema.validate(url);
  //   };

  const elements = {
    form: document.querySelector('.rss-form') as HTMLInputElement,
    input: document.querySelector('#url-input') as HTMLInputElement
  };

  //   const state = {
  //     loadingProcess: 'ready to load feed',
  //     valid: false,
  //     error: ''
  //   };

  //   const watchedState = onChange(state, (path, value, previousValue) => {
  //     switch (path) {
  //       case 'loadingProcess':
  //       case 'error':
  //         // handleFormAccessibility(elements, watchedState);
  //         // handleErrors(state.error, state);
  //         break;
  //       case 'parsedFeeds':
  //         // renderFeed(elements, state);
  //         break;
  //       default:
  //         break;
  //     }
  //   });

  elements.form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    const data: FormData = new FormData(e.target as HTMLFormElement);
    const currentURL = data.get('url'); // .trim();
    console.log('currentURL =', currentURL);
    // watchedState.loadingProcess = 'loading';
    // const parsedLinks = watchedState.parsedFeeds.map((feed) => feed.feedsURL);
    // validateURL(currentURL, parsedLinks).catch((error) => {
    //   watchedState.valid = false;
    //   watchedState.loadingProcess = 'failed loading';
    //   handleErrors(error.message, watchedState);
    // });
  });

  //   elements.form.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     const data = new FormData(e.target);
  //     const currentUrl = data.get('url').trim();
  //     watchedState.field.url = currentUrl;
  //     if (validateURL(currentUrl, watchedState)) {
  //       watchedState.valid = true;
  //       renderFeed(elements, watchedState);
  //     } else {
  //       watchedState.valid = _.isEmpty(watchedState.errors);
  //       renderFeed(elements, watchedState);
  //     }
  //   });

  console.log('Hello World!');
};
