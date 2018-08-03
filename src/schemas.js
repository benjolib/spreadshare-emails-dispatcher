export const testEmailSchema = {
  type: 'object',
  required: ['body'],
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

export const welcomeEmailSchema = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      required: ['email', 'name'],
      properties: {
        email: {
          type: 'string',
          format: 'email'
        },
        name: {
          type: 'string'
        }
      }
    }
  }
};

export const userProfileSchema = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      required: ['emails', 'person'],
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
        person: {
          type: 'object',
          required: ['name', 'fullName', 'tagline', 'followLink'],
          properties: {
            name: {
              type: 'string'
            },
            fullName: {
              type: 'string'
            },
            tagline: {
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
  required: ['body'],
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
          required: ['person', 'stream', 'replyLink', 'comment'],
          properties: {
            person: {
              type: 'object',
              required: ['name', 'fullName'],
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

export const subscriberSchema = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      required: ['emails', 'subscription'],
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
        subscription: {
          type: 'object',
          required: ['subscriber', 'stream'],
          properties: {
            subscriber: {
              type: 'object',
              required: ['name', 'fullName', 'tagline', 'followLink'],
              properties: {
                name: {
                  type: 'string'
                },
                fullName: {
                  type: 'string'
                },
                tagline: {
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
            }
          }
        }
      }
    }
  }
};

export const digestSchema = {
  type: 'object',
  required: ['context', 'body'],
  properties: {
    context: {
      type: 'object',
      required: ['requestId'],
      properties: {
        requestId: {
          type: 'string'
        }
      }
    },
    body: {
      type: 'object',
      required: ['emails', 'digest'],
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
        digest: {
          type: 'object',
          required: ['frequency', 'name', 'link', 'digest'],
          properties: {
            frequency: {
              type: 'string',
              enum: ['daily', 'weekly', 'monthly']
            },
            name: { type: 'string' },
            link: {
              type: 'string',
              format: 'url'
            },
            digest: {
              type: 'array',
              items: {
                type: 'object',
                required: [
                  'columns',
                  'votesCount',
                  'commentsCount',
                  'imageLink',
                  'contributor'
                ],
                properties: {
                  columns: {
                    type: 'object',
                    required: ['text'],
                    properties: {
                      text: { type: 'string' },
                      link: { type: 'string', format: 'url' }
                    }
                  },
                  votesCount: { type: 'number' },
                  commentsCount: { type: 'number' },
                  imageLink: { type: 'string', format: 'url' },
                  contributor: {
                    type: 'object',
                    required: ['name', 'fullName'],
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
                  }
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
