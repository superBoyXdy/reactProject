/**
 * Created by lingyangjiao
 * Date: 2018/1/3
 */
import React,{ Component } from 'react';

class CommentList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      comments: props.comments
    }
  }
  
  render() {
    const {comments} = this.state
    return(
    <ul className="comment-box"> {comments.map((entry, i) => (
        <li key={`reponse-${i}`} className="comment-item">
          <p className="comment-item-name">{entry.name}</p>
          <p className="comment-item-content">{entry.content}</p>
        </li> ))}
    </ul>)
  }
}
export default CommentList
