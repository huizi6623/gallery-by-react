import React, { Component, Fragment } from 'react' ;
import Images from './images' ;
import Navs from './navs' ;
import { imagesData } from '../static/images/data' ;

const photoConfig = {
    width: 260,
    height: 320
} ;

class App extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            imageList: imagesData.map(item => ({
                image: item,
                style: {},
                isFront: true
            })),
            centerImage: 0,
        } ;
        this.changeCenterImage = this.changeCenterImage.bind(this) ;
        this.changeImageStatus = this.changeImageStatus.bind(this) ;
        this.setImageStyle = this.setImageStyle.bind(this) ;
    }

    componentDidMount(){
        this.setState({
            imageList: this.setImageStyle(0)
        }) ;
    }

    random(range){
        let max = Math.max(range[0], range[1]) ;
        let min = Math.min(range[0], range[1]) ;

        let diff = max - min ;

        return Math.floor(Math.random() * diff + min) ;
    }

    range(){
        let range = {left: {}, right: {}} ;
        let wrap = {
            w: document.getElementsByClassName("wrap")[0].clientWidth ,
            h: document.getElementsByClassName("wrap")[0].clientHeight
        } ;
        let photo = {
            w: photoConfig.width ,
            h: photoConfig.height
        } ;

        range.wrap = wrap ;
        range.photo = photo ;

        range.left.x = [0 - photo.w/2, wrap.w/2 - photo.w] ;
        range.left.y = [0 - photo.h/2, wrap.h - photo.h/2] ;

        range.right.x = [wrap.w/2 + photo.w/2, wrap.w + photo.w/2] ;
        range.right.y = range.left.y ;

        return range ;
    }

    setImageStyle(centerImage){
        const ranges = this.range() ;
        const middleIndex = Math.floor(imagesData.length / 2) ;
        let imageList = imagesData.map((imageItem, index) => {
            let style = {
                transform: 'rotate(360deg) scale(1.3)'
            } ;
            let isFront = this.state.imageList[index].isFront ;

            if(index !== centerImage) {
                if (index <= middleIndex) {
                    style = {
                        left: this.random(ranges.left.x) + 'px',
                        top: this.random(ranges.left.y) + 'px',
                        transform: 'rotate(' + this.random([-180, 180]) + 'deg) scale(1)'
                    };
                    isFront = true;
                } else {
                    style = {
                        left: this.random(ranges.right.x) + 'px',
                        top: this.random(ranges.right.y) + 'px',
                        transform: 'rotate(' + this.random([-180, 180]) + 'deg) scale(1)'
                    };
                    isFront = true;
                }
            }
            return {
                image: imageItem,
                style: style,
                isFront: isFront
            }
        }) ;
        return imageList ;
    }

    changeImageStatus(index){
        let newImageList = this.state.imageList.map((imageItem, innerIndex) => {
            if(innerIndex === index){
                return {
                    ...imageItem,
                    isFront: !imageItem.isFront
                } ;
            } else {
                return imageItem ;
            }
        }) ;

        this.setState({
            imageList: newImageList
        }) ;
    }

    changeCenterImage(index){
        this.setState({
            imageList: this.setImageStyle(index),
            centerImage: index
        }) ;
    }

    render(){
        return (
            <Fragment>
                <Images
                    imageList={this.state.imageList}
                    centerImage={this.state.centerImage}
                    changeCenterImage={this.changeCenterImage}
                    changeImageStatus={this.changeImageStatus}
                />
                <Navs
                    imageList={this.state.imageList}
                    centerImage={this.state.centerImage}
                    changeCenterImage={this.changeCenterImage}
                    changeImageStatus={this.changeImageStatus}
                />
            </Fragment>
        )
    }
}

export default App ;


