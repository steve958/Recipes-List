import React from "react";
import './card.css'

class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() { 
        return (
            <div className="wrapper">
                {this.props.info.meal}
                <img src={this.props.info.image} alt="" />
            </div>
        );
    }
}
 
export default Article;