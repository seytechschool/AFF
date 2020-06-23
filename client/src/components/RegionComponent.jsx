import React from 'react';

class RegionComponent extends React.Component{
    constructor(){
        super();

    }

    render(){
        const {countryList, displayRegion} = this.props;
       console.log(countryList, displayRegion)
       const filteredData = countryList.filter(country => {
        const {region, name} = country;
        if (region === displayRegion){
            console.log('found country', name)
           return true
        }
        })
        return(
            <div>
              <ul>
                    {filteredData.map(country => {
                        return <li>{country.name}</li>
                    })}
              </ul>
            </div>
        )
    }
}
export default RegionComponent;