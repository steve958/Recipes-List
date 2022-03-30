import React from "react";


class Article extends React.Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div>
                <h1>{this.props.art.title}</h1>
                <p>{this.props.art.description}</p>
            </div>
        );
    }
}
 
export default Article;