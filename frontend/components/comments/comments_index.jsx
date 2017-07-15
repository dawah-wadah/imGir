import React from 'react';
import Comment from './comments_index_item_container';


class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const comments = this.props.comments;
    if (comments) {
        return (
          <div className="comment-index-container">
            <div className="comment-index">
              <ul>
                {comments.map( (comment) => {
                  if(comment) {
                    return (
                  <Comment key={comment.id} comment={comment}
                    commentIds={comment.comment_ids} />);
                  }
                }
                )}
             </ul>
            </div>
          </div>
        );
      } else {
        return null;
      }
    }
  }

export default CommentsIndex;
