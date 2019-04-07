import React, { Component } from 'react';
import axios from 'axios'

class ListSociety extends Component {
    state = {
        societies: []
    }

    componentDidMount(){
        axios.get('http://localhost:3000/societies').then(response => {
            this.setState({societies: response.data})
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.societies.map(society => <li> {society.org}</li>)}
                </ul>
            </div>
        );
    }
}

export default ListSociety;