## CRUD

>The CRUD README describes the different REST API calls available.

## GET

>route: '/comments'

Retrieve all comments sorted by when they were most recently updated.

## POST

>route: '/comments'

Creates a new comment based on text from request. Requires new text to be added from user in the request's body.

## PUT

>route: '/comments/:id'

Updates a comment's text based on an ID and text from request. Requires an ID specified in params and new text to be updated from user in the request's body.

## DELETE

>route: '/comments/:id'

Deletes a comment based on an ID from request. Requires an ID specified in params