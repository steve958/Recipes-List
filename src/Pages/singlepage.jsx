import React from "react";
import './singlepage.css'
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";

class SinglePage extends React.Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div className="singlepage">
            <Header></Header>
            <h1>{this.props.recipe.meal}</h1>
            <div className="singleWrapper">
                <img src={this.props.recipe.image}/>
            <div className="smallWrapper">
                <h2>Country of origin : {this.props.recipe.countryOfOrigin}</h2>
                {this.props.recipe.level < 3 ? <div className="easy-level">Level:{this.props.recipe.level}</div> : this.props.recipe.level === 3 ? <div className="medium-level">Level:{this.props.recipe.level}</div> : <div className="hard-level">Level:{this.props.recipe.level}</div>}
                <h2>Ingredients: {this.props.recipe.ingredients.toString()}</h2>
                {this.props.recipe.isVegan ? <h3>VEGAN</h3> : <h6>REGULAR - NON VEGAN</h6>}
                <p>Description:</p>
            </div>
            </div>
            <Footer></Footer> 
            </div>);
    }
}
 
export default SinglePage;