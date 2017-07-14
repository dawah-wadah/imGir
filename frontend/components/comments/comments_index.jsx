import React from 'react';
import CommentsIndexItemContainer from './comments_index_item_container';


class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllComments(this.props.postId);
  }

  componentWillReceiveProps(oldProps, nextProps) {
    debugger
    if (oldProps.commentIds.length !== nextProps.commentIds.length) {
      this
        .props
        .requestAllComments(nextProps.postId);
    }
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
                  <CommentsIndexItemContainer key={comment.id} body={comment.body}
                    commentId={comment.id} username={comment.username} commenterId={comment.commenter_id}
                    commentIds={comment.comment_ids} points={comment.points} voted={comment.voted} vote={comment.vote} createdAt={comment.created_at}/>)
                  }
                }
                )}
             </ul>
            </div>
          </div>
        )
      } else {
        return null;
      }
    }
  }

export default CommentsIndex;
