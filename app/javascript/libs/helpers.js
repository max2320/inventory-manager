import React from 'react';
import { render } from 'react-dom';
import Provider from './apollo';

const safeRender = (target, Component) => {
  const targetDOM = document.querySelector(target);

  if(targetDOM) {
    render(<Provider>
      <Component {...targetDOM.dataset} />
    </Provider>, targetDOM)
  } else {
    console.log(`DOMElement ${target} not found!!`);
  }
};

export { safeRender };
