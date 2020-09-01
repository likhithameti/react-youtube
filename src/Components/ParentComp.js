import React, { Component } from 'react';
import ChildComp from './ChildComp';

class Parent extends Component{
    state={
        hotstar:{
            names:['Banglore Days','Kuttram 23','hello']
        },
        amazon:{
            names:['Shakuntala Devi','Bharat Ane nenu','Arjun Reddy']
        },
        netflix:{
            names:['Rahasya','Kanulu Kanulu Dochayante','Bheeshma']
        },
        choice:'none'
    }
    
    dataHandler = (stream_name)=>{
        this.setState({
            choice:stream_name
        })
    }
    render(){
        let content=null;
        if(this.state.choice==='amazon'){
            content= (
                <div>
                    {this.state.amazon.names.map((name)=><div>{name}</div>)}
                </div>
               
            )

        }
        if(this.state.choice==='netflix'){
            content= (
                <div>
                    {this.state.netflix.names.map((name)=><div>{name}</div>)}
                </div>
               
            )

        }
        if(this.state.choice==='hotstar'){
            content= (
                <div>
                    {this.state.hotstar.names.map((name)=><div>{name}</div>)}
                </div>
               
            )

        }
        return(
            <div>
                Available Movies : 
                <div>
                    {content}
                </div>
                <div>
                    {/* passing function as the paramater to the child */}
                    <ChildComp 
                    data={this.dataHandler}
                    />
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Parent;