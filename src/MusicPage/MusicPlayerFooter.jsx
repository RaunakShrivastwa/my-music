import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function MusicPlayerFooter({ song, addFavorite }) {
    return (
        <footer className="position-fixed foot">
            <div className="active-song-description">
                {/* Song image */}
                <div id="song-image">

                    <img style={{ borderRadius: '50%' }} src={song?.profile} alt="Song Cover" />
                </div>
                {/* Song name and author */}
                <div className="song-desc">
                    <div className="tt1">
                        {song?.songName}
                    </div>
                    <div className="tt1">
                        {song?.artistName}
                    </div>
                </div>
                {/* Heart and ban icons */}
                <div className="heart-and-ban-icon">
                    <span>
                        <i className="fa fa-heart tt1"></i>
                    </span>
                    <span>
                        <i className="fa fa-ban tt1"></i>
                    </span>
                </div>
            </div>
            {/* Main player controls */}
            <div className="player">

                {/* Slider */}
                <ReactAudioPlayer
                    src={song?.song}
                    autoPlay
                    controls
                    volume={0.7}
                    className="custom-audio-player p-2"
                />
            </div>
            {/* Other icons including volume slider */}
            <div className="extras">
                <div>
                    <i className="fa fa-list-ul tt1"></i>
                </div>
                <div>
                    <i className="fa fa-laptop tt1"></i>
                </div>
                <div>
                    <i className="fa fa-volume-up tt1"></i>
                </div>
                <div className="slidecontainer" style={{ width: '30%' }}>
                    <input type="range" min="0" max="100" value="0" className="slider" id="myRange" style={{ marginTop: '0' }} />
                </div>
                <div>
                    <i className="fa fa-expand-alt tt1"></i>
                </div>
            </div>
        </footer>
    );
}

export default MusicPlayerFooter;
