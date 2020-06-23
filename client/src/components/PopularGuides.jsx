import React from "react"
import './PopularGuides.css'
class PopularGuide extends React.Component {
    constructor(){
        super()

    }
    render(){
        const {countryList} = this.props;
        return (
        <div>
                {countryList.map(country => {
                    const {id, isPopularGuide, name} = country;
                        if(isPopularGuide === true){
                     return(
                    <div key = {id} className = "guides">
                    { name}
                     </div>
                     )
                }}
                )
                
            }
        </div>
        )
    }

}


export default PopularGuide