
import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getAllDirectors, deleteDirector } from '../ReduxComponents/Directorsaction'

class Directors extends Component {

    componentDidMount() {
        this.props.getAllDirectors()
    }
    printEvent = async (event) => {
        console.log(event.target.parentElement.parentElement.parentElement.id)
        let id = event.target.parentElement.parentElement.parentElement.id;
        await this.props.deleteDirector(id);
        await this.props.getAllDirectors()
    }

    render() {
        return (
            <div>
                < div className="movie-info" >
                    <div className="movie-info-button-area">
                        <Link to="/directors/add">
                            <button className=' movie-info-buttons' type="button">
                                Add Director
                 </button>
                        </Link>
                        <Link to="/home">
                            <button className=' movie-info-buttons' type="button">
                                Back
                 </button>
                        </Link>
                    </div>

                    < div className="director-area" >

                        {this.props.directors.map(data => (
                            //console.log(data),
                            < div key={data.id} className='director-block' id={data.id}  >
                                <div className='list-area-director'>
                                    <p>{data.id}</p>
                                    <p> Director: {data.Director}</p>
                                </div>
                                <div className="buttons">
                                    <Link to={`/directors/${data.id}/update`}>
                                        <button className="update">Update</button>
                                    </Link>
                                    <Link to="/directors">
                                        <button className="update delete" onClick={this.printEvent}>Delete</button>
                                    </Link>

                                </div>
                            </ div>
                        ))
                        }
                    </div >

                </ div >

            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        directors: state.directors
    };
};

const mapDispatchToProps = {
    getAllDirectors, deleteDirector
};



export default connect(mapStateToProps, mapDispatchToProps)(Directors);