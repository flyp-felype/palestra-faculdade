import React, { Component } from 'react';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-o-up';

class Like extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="like">
                <a href="#" onClick={this.props.LikeNotification}>
                <FaThumbsUp size={30} />
                </a>
            </div>
        )
    }   
}

export default Like;