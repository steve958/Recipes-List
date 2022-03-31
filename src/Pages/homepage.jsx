import React from "react";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import Card from '../Components/Card/card'
import './homepage.css'
export class HomePage extends React.Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div className="home-page">
                <Header></Header>
                <div className="wrapper">
                    <h1 className="easy">Easy to make</h1>
                {this.props.recipes.filter(e=> e.level < 3).map(e=><Card key={e.id} info={e}/>)}
                <h1 className="medium">Medium to make</h1>
                {this.props.recipes.filter(e=> e.level >= 3 && e.level < 4).map(e=><Card key={e.id} info={e}/>)}
                <h1 className="hard">Hard to make</h1>
                {this.props.recipes.filter(e=> e.level === 4).map(e=><Card key={e.id} info={e}/>)}
                </div>
                <Footer></Footer>
            </div> 
         );
    }
}
 
export default HomePage;