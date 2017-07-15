import React from 'react';
import Comment from './comments_index_item_container';


class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.comments) {
      const comments = this.props.comments.sort((a, b) => (b.id - a.id));
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
