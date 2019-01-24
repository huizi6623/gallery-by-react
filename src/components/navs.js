import React from 'react' ;
import SingleNav from './singleNav' ;

class Navs extends React.Component{
    render(){
        const { imageList, centerImage } = this.props ;
        let navsList = imageList.map((imageItem, index) => {
            return (<SingleNav
                key={index}
                index={index}
                isFront={imageItem.isFront}
                isCenter={index === centerImage}
                changeCenterImage={this.props.changeCenterImage}
                changeImageStatus={this.props.changeImageStatus}
            />)
        }) ;
        return (
            <div className='nav'>
                {navsList}
            </div>
        )
    }
}

export default Navs ;