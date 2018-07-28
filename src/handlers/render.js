// @flow

import letter from '../mailer/letter';
import type { RenderHtmlEvent } from '../types';

const data = {
  test: {
    greeting: 'Hola!'
  },
  newComment: {
    stream: {
      name: 'Design Tools',
      link: 'https://google.com'
    },
    person: {
      name: 'Benjamin',
      fullName: 'Benjamin Libor',
      imageLink: 'https://ca.slack-edge.com/T7S34FEUD-U7RUFNSD8-223ce264a05a-72'
    },
    replyLink: 'https://google.com',
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
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
