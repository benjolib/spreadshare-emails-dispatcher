# SpreadShare Email Dispatcher
An email dispatching service for spreadshare

## Dev Setup
* install `serverless`
* run `yarn dev`
* import postman api script from `/docs` into Postman and hit the api's 🍻

## Commands
See the scripts section in package.json

## Deployment
* deploy using `yarn deploy:stage` for stage deployment
* deploy using `yarn deploy:prod` for prod deployment 
* note down the api key returned by deployments. The api are private and the key is needed to be passed in `x-api-key` header for authentication.
* Please also refer serverless docs for detailed deployment config params.

## Resources
* [serverless documentation](https://serverless.com/)

## Tasks List
* [x] setup aws lambda project for email dispatching
* [x] test email api
* [x] friend joined email api
* [ ] summaries email api
* [ ] welcome email api
* [ ] new stream (followers of the curator api)
* [ ] new follower email api
* [ ] new collaboration email api
* [ ] pending collaborations email api
* [ ] new comment email api
* [ ] new subscriber email api
* [ ] curator informed email api
* [ ] post reviewed email api
* [ ] best of the week email api
* [ ] stream live email api
* [ ] unit test 
* [ ] functional test
* [x] deployment scripts
* [ ] ci-cd

--------------------------------------

## API
Following is the list of spreadshare email dispatcher api


### Test Email
`POST /email/test`

#### Request Body:

Fields:
* email - `required`
* greeting - `optional`

Example:
```
{
	"email": "shashank004@gmail.com",
	"greeting": "Hola!"
}
```

#### Response Codes:
200

-----------

### Friend Joined Email
`POST /email/friend-joined`

#### Request Body:

Fields:
* emails - Array of emails or a single email, `required`
* friend - `required`
    * name - `required`
    * fullName - `required`
    * tagLine - `required`
    * imageLink - `required`, `a valid url`
    * followLink - `required`, `a valid url`

Example:
```
{
	"emails": "shashank004@gmail.com",
	"friend": {
		"name": "Ben",
		"fullName": "Benjamin Libor",
		"tagLine": "Spreadshare founder",
		"imageLink": "https://ca.slack-edge.com/T7S34FEUD-U7RUFNSD8-223ce264a05a-72",
		"followLink": "https://google.com"
	}
}
```

#### Response Codes:
200

-----------

### Error format for all api's
Error format for all enpoints is based on [jsonApi](http://jsonapi.org/examples/#error-objects-basics) standard with `status` and `detail` field always present.
Example:
```
{
  "errors": [
    {
      "status": "422",
      "detail": "First name must contain at least three characters."
    }
  ]
}
```