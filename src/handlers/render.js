// @flow

import letter from '../mailer/letter';
import type { RenderHtmlEvent } from '../types';

const data = {
  update: { name: 'Shashank', body: 'Mjml test email' }
};

export const handler = async (event: RenderHtmlEvent) => {
  const { type } = event.pathParameters;
  const result = letter(type, data[type]);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: result
  };
};
