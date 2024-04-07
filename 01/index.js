'use strict';

const Paragraph = () => {
  return React.createElement(
    'p',
    {
      style: {
        backgroundColor: 'blue',
        fontSize: 'bold',
      },
      id: 'first-paragraph',
      className: 'paragraph',
    },
    'Lorem ipsum dolor sit amet',
  );
};

const appContainer = document.querySelector('#app');

ReactDOM.render(Paragraph(), appContainer);