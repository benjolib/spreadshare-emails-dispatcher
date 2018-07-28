export const testEmailSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      required: ['email'],
      properties: {
        email: {
          type: 'string',
          format: 'email'
        },
        greeting: {
          type: 'string'
        }
      }
    }
  }
};

export const userProfileSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      required: ['emails', 'friend'],
      properties: {
        emails: {
          anyOf: [
            {
              type: 'array',
              items: {
                type: 'string',
                format: 'email'
              },
              uniqueItems: true,
              minItems: 1
            },
            {
              type: 'string',
              format: 'email'
            }
          ]
        },
        friend: {
          type: 'object',
          required: ['name', 'fullName', 'tagLine', 'imageLink', 'followLink'],
          properties: {
            name: {
              type: 'string'
            },
            fullName: {
              type: 'string'
            },
            tagLine: {
              type: 'string'
            },
            imageLink: {
              type: 'string',
              format: 'url'
            },
            followLink: {
              type: 'string',
              format: 'url'
            }
          }
        }
      }
    }
  }
};

export const commentSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      required: ['emails', 'commentInfo'],
      properties: {
        emails: {
          anyOf: [
            {
              type: 'array',
              items: {
                type: 'string',
                format: 'email'
              },
              uniqueItems: true,
              minItems: 1
            },
            {
              type: 'string',
              format: 'email'
            }
          ]
        },
        commentInfo: {
          type: 'object',
          required: ['person', 'streamName', 'replyLink', 'comment'],
          properties: {
            person: {
              type: 'object',
              required: ['name', 'fullName', 'imageLink'],
              properties: {
                name: {
                  type: 'string'
                },
                fullName: {
                  type: 'string'
                },
                imageLink: {
                  type: 'string',
                  format: 'url'
                }
              }
            },
            stream: {
              type: 'object',
              required: ['name', 'link'],
              properties: {
                name: {
                  type: 'string'
                },
                link: {
                  type: 'string',
                  format: 'url'
                }
              }
            },
            replyLink: {
              type: 'string',
              format: 'url'
            },
            comment: {
              type: 'string'
            }
          }
        }
      }
    }
  }
};

export const subscriptionDigestSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      required: ['emails', 'frequency', 'publication'],
      properties: {
        emails: {
          anyOf: [
            {
              type: 'array',
              items: {
                type: 'string',
                format: 'email'
              },
              uniqueItems: true,
              minItems: 1
            },
            {
              type: 'string',
              format: 'email'
            }
          ]
        },
        frequency: {
          type: 'string',
          enum: ['daily', 'weekly', 'monthly']
        },
        publication: {
          type: 'object',
          required: ['title', 'description', 'posts'],
          properties: {
            title: { type: 'string' },
            description: { type: 'string' },
            posts: {
              type: 'array',
              items: {
                type: 'object',
                required: ['title', 'description'],
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' }
                }
              },
              uniqueItems: true,
              minItems: 1
            }
          }
        }
      }
    }
  }
};
