import React from 'react'
import Office from './Office'

class Results extends React.PureComponent{

    render() {
        return (
            this.props.data.map(item => {
                return <Office key={item.dataBoxId} {...item}/>
            })
        )
    }
}


export default Results