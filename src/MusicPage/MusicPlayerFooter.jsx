import React from 'react';

function MusicPlayerFooter() {
    return (
        <footer className="position-fixed foot">
            <div className="active-song-description">
                {/* Song image */}
                <div id="song-image">
                    <img style={{ borderRadius: '50%' }} src="https://i.ytimg.com/vi/iF6L0mB1bEA/maxresdefault.jpg" alt="Song Cover" />
                </div>
                {/* Song name and author */}
                <div className="song-desc">
                    <div className="tt1">
                        Hai Dil Ye Mera
                    </div>
                    <div className="tt1">
                        Arijit Singh
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
                <div className="controls">
                    <div><i className="fa fa-random tt1"></i></div>
                    <div><i className="fa fa-step-backward tt1"></i></div>
                    <div><i className="fa fa-pause-circle tt1"></i></div>
                    <div><i className="fa fa-step-forward tt1"></i></div>
                    <div><i className="fa fa-redo tt1"></i></div>
                </div>
                {/* Slider */}
                <div id="slider">
                    {/* Current time */}
                    <div className="time">
                        1:39
                    </div>
                    <div className="slidecontainer">
                        <input type="range" min="0" max="100" value="0" className="slider" id="myRange" />
                    </div>
                    {/* Total time */}
                    <div className="time">
                        4:44
                    </div>
                </div>
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
