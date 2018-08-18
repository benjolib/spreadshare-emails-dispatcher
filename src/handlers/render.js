// @flow

import letter from '../mailer/letter';
import type { RenderHtmlEvent } from '../types';
import { errorRes } from '../utils/http';

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
  },
  friendJoined: {
    name: 'Benjamin',
    fullName: 'Benjamin Libor',
    tagline:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    followLink: 'https://google.com'
  },
  newFollower: {
    name: 'Benjamin',
    fullName: 'Benjamin Libor',
    tagline:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    followLink: 'https://google.com'
  },
  newSubscriber: {
    stream: {
      name: 'Design Tools',
      link: 'https://google.com'
    },
    subscriber: {
      name: 'Benjamin',
      fullName: 'Benjamin Libor',
      imageLink:
        'https://ca.slack-edge.com/T7S34FEUD-U7RUFNSD8-223ce264a05a-72',
      tagline: 'An awesome subscriber',
      followLink: 'https://google.com'
    }
  },
  digest: {
    frequency: 'monthly',
    name: 'Design Tools',
    link: 'https://google.com',
    digest: [
      {
        votesCount: 5,
        imageLink: 'https://spreadshare.co/rowimages/26344.png',
        contributor: {
          name: 'Benjamin',
          fullName: 'Benjamin Libor',
          imageLink:
            'https://ca.slack-edge.com/T7S34FEUD-U7RUFNSD8-223ce264a05a-72'
        },
        columns: [
          {
            text: 'Werner Vogels'
          },
          {
            text: 'CTO'
          },
          {
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          },
          {
            text: 'ASAP'
          },
          {
            text: 'werner_vogels',
            link: 'https://google.com'
          }
        ]
      },
      {
        votesCount: 5,
        imageLink: 'https://spreadshare.co/rowimages/26344.png',
        contributor: {
          name: 'Shashank',
          fullName: 'Shashank Tomar'
        },
        columns: [
          {
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          },
          {
            text: 'CTO'
          },
          {
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          },
          {
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            link: 'https://google.com'
          },
          {
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          },
          {
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          },
          {
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          },
          {
            text: 'ASAP'
          },
          {
            text:
              'werner_vogels says hi gagd sgdasf asffas fasfdads sdfaasdf sdfasf',
            link: 'https://google.com'
          }
        ]
      },
      {
        votesCount: 3,
        contributor: {
          name: 'Benjamin',
          fullName: 'Benjamin Libor'
        },
        columns: [
          {
            text: 'Kerner Vogels'
          },
          {
            text: 'CTO'
          },
          {
            text: 'Amazon'
          },
          {
            text: 'ASAP'
          },
          {
            text: 'werner_vogels',
            link: 'https://google.com'
          }
        ]
      }
    ]
  },
  newStream: {
    stream: {
      name: 'Slack Communities for Blockchain & Crypto',
      link: 'https://google.com',
      imageLink: 'https://spreadshare.co/tableimages/22.png',
      tagline:
        'A list of public Slack groups to engage with blockchain and crypto enthusiasts.',
      description:
        "By today, we're one of the 0,05% top upvoted products on the platform, won a Golden Kitty award and created this list of best practices for you to prepare right. Please share with your friends and people who plan to launch a product soon."
    },
    creator: {
      name: 'Benjamin',
      fullName: 'Benjamin Libor',
      imageLink: 'https://ca.slack-edge.com/T7S34FEUD-U7RUFNSD8-223ce264a05a-72'
    }
  }
};

export const handler = async (event: RenderHtmlEvent) => {
  const { type } = event.pathParameters;
  let result = null;
  try {
    result = letter(type, data[type]);
  } catch (err) {
    return errorRes(500, err.message);
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: result
  };
};
