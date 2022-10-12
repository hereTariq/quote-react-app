import React from 'react';
import './App.css';


class App extends React.Component{
    state = {
        quote:''
    }
    componentDidMount(){
        this.fetchQuote()
    }
    fetchQuote(){
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(result => {
                const {advice} = result.slip;
                this.setState({quote:advice})
            })
            .catch(error => {
            console.log(error)
        })
    }
    render() {

        return  (
            <div className="container">
                <div className="quote-container">
                    <h1 className="quote">
                        {this.state.quote}
                    </h1>
                    <button className="btn" onClick={() => this.fetchQuote()}>Next</button>
                </div>
            </div>)
    }
}
export default App