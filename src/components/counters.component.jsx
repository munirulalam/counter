import React, { Component } from 'react';
import Counter from './counter.component';

class Counters extends Component {
    state = { 
        counters : [
            { id :0, value: 0 },
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
     }

     handleReset = ()=>{
        const all_counters = this.state.counters.map((counter,idx)=> ({id:idx, value :0}));
        this.setState({ counters : all_counters })
     }

     handleIncrement = (id)=>{
         const counters = this.state.counters.map((counter,idx)=> {
             if(counter.id === id) return {id: idx, value: counter.value+1 };
             return counter;
         })

         this.setState({counters : counters})
     }

     handleDecrement = (id)=>{
        const counters = this.state.counters.map((counter,idx)=> {
            if(counter.id === id) return {id: idx, value: counter.value-1 };
            return counter;
        })

        this.setState({counters : counters})
    }

    render() { 
        return ( 
            <>
                <button onClick = {this.handleReset} type="button" className="btn btn-primary m-4"> Reset </button>
                {this.state.counters.map(counter=>{
                    return <Counter 
                        key = {counter.id}
                        value = {counter.value} 
                        id = {counter.id}
                        onIncrement = {this.handleIncrement}
                        onDecrement = {this.handleDecrement}
                        />
                })}
           </> 
         );
    }
}
 
export default Counters;