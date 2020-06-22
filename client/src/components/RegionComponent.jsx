import React from 'react';

class RegionComponent extends React.Component{
    constructor(){
        super();

    }

    render(){
        const {countryList, displayRegion} = this.props;
       
        return(
            <div>
              <ul>
              {countryList.filter(country => {
            const {region, name} = country;
            if (region === displayRegion){
                console.log('found country')
                return <li>{name}</li>
            }
            })
        }
              </ul>
            </div>
        )
    }
}
export default RegionComponent;