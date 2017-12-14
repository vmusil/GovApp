import React from 'react'

class Office extends React.PureComponent{

    render() {
        console.log(this.props)
        const {...data} = this.props
        const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=640x400&center=${data.latitude},${data.longitude}&zoom=15&markers=${data.latitude},${data.longitude}`

        return (<div>
            {data.name} <br/>
            {data.addressStreet}, {data.addressCity} <br/>
            {data.officeHours} <br/>
            {data.telefon.telCislo} <br/>
            <a href={data.www} >{data.www}</a> <br/>
            <img src={mapUrl} /> <br/>
            
            </div>)
    
    }
}


export default Office