import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import { connect } from "react-redux";
import { singleDirector } from '../ReduxComponents/Directorsaction'

class SingleDirector extends Component {
    componentDidMount() {
        this.sendDirector();
    }


    sendDirector = async () => {
        const id = this.props.match.params.id;
        console.log(id)
        await this.props.singleDirector(id);
    };

    render() {

        console.log(this.props.director)
        return (
            <div className='director-block'>
                <div className='list-area-director'>
                    <p>{this.props.director.id}</p>
                    <p> Director: {this.props.director.Director}</p>
                </div>
            </div>
        )
    }
}





const mapStateToProps = state => ({
    director: state.director
})
const mapDispatchToProps = {
    singleDirector
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleDirector);