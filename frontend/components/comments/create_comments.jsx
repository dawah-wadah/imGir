import React from 'react';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      parent_id: ''
    };
  }

  updateState(post) {
    this.setState({title: post.title, description: post.description});
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {

    return (
      <form className="caption-create">
        <span className="icon-x right pointer"></span>
        <textarea placeHolder="Write a comment" className='create-comment-box'></textarea>
        <textarea placeHolder="Write a comment" className='create-comment-box2'></textarea>

        <div className="summary">
          <input type="submit" value="Post" id="submit-comment" className="right btn btn-main" disabled=""/>
          <div className="counter right">140</div>
        </div>
      </form>
    );
  }
}

export default NewComment;
