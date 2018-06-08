import React, { Component } from 'react';

class Like extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
               Você  {this.props.Notification} notificação!
            </div>
        )
    }
}

export default Like;