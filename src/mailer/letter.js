// @flow

import mjml2html from 'mjml';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import components from '../components/html';

const renderReact = (component, data) => {
  const rootElemComponent = React.createElement(component, data);
  return ReactDOMServer.renderToStaticMarkup(rootElemComponent);
};

const renderHtml = (type, data): string => {
  const component = components[type];
  const mjmlDom = renderReact(component, data);
  return mjml2html(mjmlDom).html;
};

export default renderHtml;
