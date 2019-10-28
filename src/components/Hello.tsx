import * as React from 'react';
import "./Hello.scss";

class Hello extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    render(){
        return (
            <>
            <span className="Hello d-block">Hello There</span>
            <h1 className="shadow-sm p-3 mb-5 bg-white rounded">Test</h1>
            </>
        )
    }
}
export default Hello;
