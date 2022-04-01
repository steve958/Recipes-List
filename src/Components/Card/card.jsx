import React from "react";
import './card.css'

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() { 
        return (
            <div className="wrapper">
                {this.props.info.meal}
                <img onClick={()=> this.props.click(this.props.info.id)} src={this.props.info.image} alt="" />
            </div>
        );
    }
}
 
export default Card;