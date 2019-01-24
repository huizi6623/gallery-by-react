import React, { Component } from 'react' ;
import SingleImage from './singleImage' ;

class Images extends Component{
    render(){
        const { imageList, centerImage } = this.props ;
        // console.log(this.props) ;

        let imagesData = imageList.map((imageItem, index) => {
            // console.log(index, centerImage) ;
            // console.log(index === centerImage) ;
            return (<SingleImage
                key={index}
                index={index}
                imageItem={imageItem}
                isCenter={index === centerImage}
                changeCenterImage={this.props.changeCenterImage}
                changeImageStatus={this.props.changeImageStatus}
            />) ;
        }) ;

        return(
            <div>
                {imagesData}
            </div>
        )
    }
}

export default Images ;
