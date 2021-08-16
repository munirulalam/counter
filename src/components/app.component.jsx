import React, { Component } from 'react';
import Navber from './navbar.component';
import Counters from './counters.component';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Navber/>
                <Counters/>
            </>
         );
    }
}
 
export default App;