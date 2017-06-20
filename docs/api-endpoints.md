# API Endpoints

## HTML

### Root

Method | URI | Description
-------|-----|--------------------
`GET`  | `/` | Loads Index (Feed)

### Users

Method  | URI                    | Description
--------|------------------------|---------------------------
`POST`  | `/api/users`           | Create new user
`GET`   | `/api/users/:id`       | Get user id
`PATCH` | `/api/users/:id`       | Edit User attributes

## JSON

### Session

Method   | URI            | Description
---------|----------------|------------
`POST`   | `/api/session` | Log in
`DELETE` | `/api/session` | Log out

### Posts

Method   | URI                          | Description
---------|------------------------------|----------------------------------
`GET`    | `/api/posts`                | Get all posts
`POST`   | `/api/posts`                | Create new post
`GET`    | `/api/posts/:id`            | Get post by id
`DELETE` | `/api/posts/:id`            | Delete post by id
`GET`    | `/api/users/:user_id/posts` | Get all posts by user id

### Comments

Method   | URI                                  | Description
---------|--------------------------------------|----------------------------------
`GET`    | `/api/posts/:id/comments`            | Get all comments for a post
`POST`   | `/api/posts/:id/comments`            | Create new comment
`PATCH`  | `/api/posts/:id/comments/:commentId` | Get comment by id
`DELETE` | `/api/posts/:id/comments/:commentId` | Delete comment by id
`GET`    | `/api/users/:user_id/comments`       | Get all comments by user id
