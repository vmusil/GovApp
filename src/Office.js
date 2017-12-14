import React from 'react'

class Office extends React.PureComponent{

    render() {
        console.log(this.props)
        const {...data} = this.props

        return (<div>
            {data.name} <br/>
            {data.addressStreet}, {data.addressCity} <br/>
            {data.officeHours} <br/>
            <a href={data.www} >{data.www}</a>
            
            </div>)
    
    }
}


export default Office