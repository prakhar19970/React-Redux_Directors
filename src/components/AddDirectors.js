import React, { Component } from 'react';
import '.././App.css'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { addDirector } from '../ReduxComponents/Directorsaction'

class AddDirector extends Component {
    printdata = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        this.props.addDirector(event.target[0].value);
        document.getElementById('director-form').value = '';
        this.props.history.push('/directors');
    }

    render() {
        return (
            <div id="edit-popup-layout">
                <form onSubmit={this.printdata}  >
                    <div className="form-director-title">
                        New Director Details
                            </div>
                    <div className="name">
                        <label className="input-movie-name label-text dir-form-text ">Title</label>
                        <input id="director-form" className="input-movie-name input-long dir-form-text input-area" type="text" name="title" placeholder="Director Name" required />
                    </div>

                    <button className='form-submit' type='submit'>Submit</button>

                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        directors: state.directors
    };
};

const mapDispatchToProps = {
    addDirector
};



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddDirector));