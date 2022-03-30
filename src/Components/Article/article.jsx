import React from "react";


class Article extends React.Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div>
                <h2>{this.props.art.title}</h2>
                <p>{this.props.art.description}</p>
            </div>
        );
    }
}
 
export default Article;