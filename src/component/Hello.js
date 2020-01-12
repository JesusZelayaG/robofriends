import React, {Component} from 'react';
const Hello =(props) => {
    return(<div className='f1 tc'>
        <h1>Hello World</h1>
        <p>Welcome to react </p>
        <p>{props.greeting }</p>
    </div> )
}
/*
class Hello extends Component{
    render(){
        return (
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <p>Welcome to react </p>
                <p>{this.props.greeting }</p>
            </div> 
            
            )
    }
}*/
export default Hello;