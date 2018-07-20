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
          type: 'array',
          items: {
            type: 'string',
            format: 'email'
          },
          uniqueItems: true,
          minItems: 1
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
