## Component Hierarchy

1) AuthForm
  Users can sign in/up.

2) HomePage
  Root Page, which will display the navBar, posts index, and optionally the comments index

3) NavBar
  Contains the logo, which will redirect to the homepage, upload button, search-bar, and depending on the current session, login/signup or button to user page

4) PostShow
  Has the post, sidebar with an post index, as well as all comments for that post

5) PostsIndex
  Collection of all posts

6) PostsIndexItem
  Component for a single post.

7) CommentForm
  Area where the user will comment.

8) CommentsIndex
  Displays all of a posts comments.

9) CommentsIndexItem
  A single comment for a post or comment.

10) CommentsDetail/CommentsDetailContainer
  Houses any voting data(pending), as well as replies id

11) ImagesIndex/ImagesIndexContainer
  Will contain all the images for a single post.

12) ImagesIndexItem
  A single image for the ImagesIndex.

13) PostIndexItemDetails/PostIndexItemDetailsContainer
  Component that contains the details for a specific post, such as upvotes/downvotes, and title.

14) NewPostModal
  A container modal that allows the user to upload a post via a form.




**AuthFormContainer**
 - AuthForm
  * Sign In
  * Sign Up

**NewPostModal**
  * NewPostForm

**HomePageContainer**
  * Header
  * PostsIndex
    * PostIndexItem
      * ImagesIndex
        * ImagesIndexItem
    * PostIndexItemDetails

**Header**
  - Sign In/ Sign Up
  - Logo for (home Button)
  - New Post
  - Search Bar

**PostShowContainer**
  * PostIndexItem
    * PostIndexItemDetails
    * ImagesIndex
      * ImagesIndexItem
    * CommentForm
    * CommentsIndex
      * CommentsIndexItem
        * CommentsDetail


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/posts" | "PostsIndex" |
| "/post/new/" | "NewPostForm" |
| "/posts/id" | "PostShow" |
| "/posts/id/images" | "ImagesIndex" |
| "/posts/id/comments" | "CommentsIndex" |
| "/posts/id/comments/commentId" | "CommentDetail" |
