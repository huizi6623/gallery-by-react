import React, { Component } from 'react' ;

class SingleImage extends Component {

    handleClick(){
        if(!this.props.isCenter){
            this.props.changeCenterImage(this.props.index) ;
        } else {
            this.props.changeImageStatus(this.props.index) ;
        }
    }

    render(){
        const { imageItem, isCenter, index } = this.props ;
        const { isFront, style, image } = imageItem ;
        const imgSrc = require('../static/images/' + image.img) ;

        return (
            <div className={`photo photo-${isFront? "front" : "back"}${isCenter ? " photo-center" : ""}`}
                 style={style}
                 onClick={this.handleClick.bind(this)}
            >
                <div className="photo-wrap">
                    <div className="side side-front">
                        <p className="image">
                            <img src={imgSrc}/>
                        </p>
                        <p className="caption">{image.caption}</p>
                    </div>
                    <div className="side side-back">
                        <p className="desc">{image.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleImage ;