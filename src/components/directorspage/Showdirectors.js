import React, { Component } from "react";
import { connect } from "react-redux";
import getDir from '../../redux/actions'
import { Link } from "react-router-dom";
class Showdirectors extends Component {
    componentDidMount() {
        this.props.getDir();
    }

    render() {
        return (


            < div className="movie-info" >
                <div className="movie-info-button-area">
                    <Link to="/directors/add" >
                        <button className=' movie-info-buttons' type="button">
                            Add Director
                </button>
                    </Link>
                    <Link to="/home">
                        <button className=' movie-info-buttons' type="button">
                            Back
                 </button>
                    </Link>

                </div >
                < div className="director-area" >
                    {
                        this.props.director.map((data, index) => (
                            <div position={data.id} key={data.id}
                                className='director-block'>

                                <div className='list-area-director'>
                                    {/* <Link className="link-css" to={`/directors/${data.id}`}>
                                        <p>{data.id}</p>
                                        <p> Director: {data.Director}</p>
                                    </Link> */}
                                </div>
                                <div className="buttons">
                                    {/* <Link to={`/directors/${data.id}/update`}>
                                        <button className="update" onClick={this.onUpdate}>Update</button>
                                    </Link> */}
                                    {/* <Link to="/directors">
                                        <button className="update delete" onClick={this.dirDelete} >Delete</button>
                                    </Link> */}
                                </div>
                            </div>
                        ))
                    }
                </ div>
                ))

    }
</div >
        )
    }
}
const mapStateToProps = state => ({
    director: state.director.directors
})
export default connect(mapStateToProps, { getDir })(Showdirectors);
