import React from 'react';
import "./Regions.css"

class Regions extends React.Component{
    constructor(){
        super();
    }

    render(){
       const {regionList, setRegion} = this.props;
        return(
            <div>
                <h3>Explore by region</h3>
                {regionList.map(region => {
                    const {id, name} = region;
                     return(
                    <div key = {id} className = "container" onClick={() => setRegion(name)}>
                     <div className = "box" ></div>
                     <div className = "regionName">{name}</div>
                     </div>
                     )
                })
                }
            </div>
            
        )
    }
}
export default Regions;
