import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getVideoSource } from '../actions'
import { Redirect } from 'react-router-dom'
import '../assets/styles/components/Player.scss';


const Player = (props) => {
    const { match: { params: { id } } } = props;    
    const hasPlaying = Object.keys(props.playing).length > 0
    
    useEffect(()=> {
        props.getVideoSource(id)
    }, [])



    return hasPlaying ? (

        <div className="Player">
            <video controls autoPlay>
                <source src="url" type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="" onClick={()=> props.history.goBack()}>Regresar</button>
            </div>
        </div>
    )
    :
    <Redirect to="/"/>
}


const mapStateToProps = state => {
    return {
        playing : state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource
}


export default connect(mapStateToProps,mapDispatchToProps)(Player)