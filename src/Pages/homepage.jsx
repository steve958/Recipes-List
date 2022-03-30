import React from "react";
import Article from "../Components/Article/article";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";

export class HomePage extends React.Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div>
                <Header></Header>
                {this.props.flower.map((e)=> {
                    return <Article art = {e}></Article>
                    })}
                <Footer></Footer>
            </div> 
         );
    }
}
 
export default HomePage;