import React from 'react'
import HomePage from './Pages/homepage';


export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [ {
                id: 1,
                title: "Putovanje po Arkassi-a",
                status: "published",
                description:
                  "Levelovalo se, ludnica, dungeon se radio, boss je dobio svoje, nazalost nema nikakav loot. 😒",
              },
              {
                id: 2,
                title: "Dosao Ernst & Yung",
                status: "published",
                description:
                  "Dosli su i pokupili su nas sve, ko u vreme nemaca, u kamione trpali. Oni valjda i jesu neki nemci, vidi ta imena - nema, nacista je nacista. Skupili su i dvojicu sa ulice.... ne znaju ni sta je map (⊙_⊙;)",
              },
              {
                id: 3,
                title: "Deset godina kasnije",
                status: "unpublished",
                description:
                  "Mala matura se vraca u velikom stilu. Nasi studenti se prisecaju drugara iz osnovne i drago im je da ih ponovo vide. (osim mela, on je  premlad). U Srbiji vise nema pekara, sve su same kladionice, ali ima rakije, kazu stranci",
              },],
            counter: 1
        }
    }
    render(){
        return (
        <div>
            <HomePage flower={this.state.data}/>
        </div>
        )
    }
} 
    



export default App