
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from "react-redux";

import { getAllDirectors } from '../../ReduxComponents/Directorsaction'


class Homepage extends Component {


    render() {

        return (

            <div className="movie-link" >

                <Link to="/directors">
                    <button className='movies-button'
                        type="button">
                        Directors
                    </button>

                </Link>
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
    getAllDirectors
};



export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
//export default Homepage;

