import React, { Component } from 'react';
import '.././App.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { editDirector } from '../ReduxComponents/Directorsaction'


class EditDirector extends Component {
    printdata = (e) => {
        console.log('its working')
        console.log(e.target.value)
        this.props.editDirector(this.props.match.params, e.target.value);

    }
    redirect = (e) => {
        this.props.history.push('/directors');
    }
    render() {
        return (
            <div id="edit-popup-layout">
                <form onSubmit={this.redirect}>

                    <div className="form-director-title">
                        New Director Details
                            </div>
                    <div className="name">
                        <label className="input-movie-name label-text dir-form-text ">Title</label>
                        <input id="director-form" className="input-movie-name input-long dir-form-text input-area" type="text" name="title" placeholder="Director Name" onChange={this.printdata} required />
                    </div>

                    <button className='form-submit' type='submit'> Submit </button>

                </form>

            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        directors: state.directors
    };
};

const mapDispatchToProps = {
    editDirector
}



export default connect(mapStateToProps, mapDispatchToProps)(EditDirector);
