import React, { Component } from 'react';
import FaGlobe from 'react-icons/lib/fa/globe';

class MundinhoComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <div className="mundinho">
                <FaGlobe size={25} />
                
                    {this.props.Notification > 0 ? 
                        <div className="alerta"> 
                            {this.props.Notification} 
                        </div>
                    : null}
            </div>
            </div>
        )
    }
}

export default MundinhoComponent;