import React, {Component} from "react";
import './tabContent.css';
const TabContent = (props) =>{
    const [data, setData] = userSate([]);
    const getData = () =>{
        fetch('data.json',{
        headers : {
            'content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    }).then(function(res){
        return res.json;
    }).then(function(myJson){
         setData(myJson);
    })
    };
    useEffect(() =>{
        getData();
    }, [])
    return(
    <div id={props.tab} className = "tabContent">
        {data.map(())}
        <h1>{props.tab}</h1>
    </div>
    );
}
export default TabContent;