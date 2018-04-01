/**
 * Created by lingyangjiao
 * Date: 2018/1/3
 */
import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this)
    
    this.state = {
      value: ''
    }
  }
  
  handleChange(event) {
    this.setState({value:event.target.value})
  }
  
  render(){
    return (
        <div>
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
          <button className="comment-confirm-btn" onClick={this.props.onSubmitComment.bind(this, this.state.value)}>评论</button>
        </div>
    )
  }
}