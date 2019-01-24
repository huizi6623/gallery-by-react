import React from 'react' ;

class SingleNav extends React.Component{
    handleClick(){
        if(!this.props.isCenter){
            this.props.changeCenterImage(this.props.index) ;
        } else {
            this.props.changeImageStatus(this.props.index) ;
        }
    }

    render(){
        const { isFront, isCenter } = this.props ;
        return (
            <span className={`i${isCenter ? " i-current" : ""}${isFront? "": " i-back"}`}
                  onClick={this.handleClick.bind(this)}
            ></span>
        )
    }
}

export default SingleNav ;