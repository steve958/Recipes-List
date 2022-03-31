import React from 'react'
import HomePage from './Pages/homepage';
import SinglePage from './Pages/singlepage';
import './style.css'

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           information : [],
           selectedRecipe: null
        }
    } 

    componentDidMount(){
        fetch(`https://6245a35c6b7ecf057c21cb31.mockapi.io/recipes`).then(res=> res.json()).then(data=> this.setState({information : data}))
    }

    render(){
        return (
        <div>
           {this.state.selectedRecipe ? <SinglePage/> : <HomePage recipes={this.state.information}/>}
        </div>
        )
    }
} 
    



export default App