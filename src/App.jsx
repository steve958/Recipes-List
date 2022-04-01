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

    setSelectedRecipe(id){
        this.setState({selectedRecipe: id})
    }

    componentDidMount(){
        fetch(`https://6245a35c6b7ecf057c21cb31.mockapi.io/recipes`).then(res=> res.json()).then(data=> this.setState({information : data}))
    }

    render(){
        return (
        <div>
           {this.state.selectedRecipe ? <SinglePage recipe={this.state.information.find(e=> e.id === this.state.selectedRecipe)}/> : <HomePage calling = {this.setSelectedRecipe.bind(this)} recipes={this.state.information}/>}
        </div>
        )
    }
} 
    



export default App