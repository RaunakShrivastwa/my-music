import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';


const MusicBanner = ({ song }) => {
    const [songUrl, setSongUrl] = useState(song?.song)
    // console.log();
    // useEffect({
    //     if(song) {
    //         setSongUrl(song.song)
    //     }
    // }, [song.song])
    return (
        <div className="col-sm-12 col-md-9">
            <div className="card" style={{ backgroundColor: '#141b41' }}>
                <div className="card-body">
                    <div className="card border-0" style={{ maxWidth: '100%', height: 'auto', backgroundColor: '#141b41' }}>
                        <div className="row g-0">
                            <div className="col-md-4 mt-4">
                                <img
                                    style={{ borderRadius: '20px !important' }}
                                    src={song?.profile || "https://th.bing.com/th/id/OIP.e-3AF7Yv82uNIFRNhP4EDAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8 p-3">
                                <div className="card-body text-white">
                                    <h5 className="card-title">{song?.songName || "Ishaq me "}</h5>
                                    <span className="d-flex justify-content-end text-white">851 follower</span>
                                    <small style={{ fontWeight: 'lighter' }}>Indian Brand</small>
                                    <p style={{ fontWeight: 'lighter' }} className="card-text">
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                    <ReactAudioPlayer
                                        src={song?.song}
                                        autoPlay
                                        controls
                                        // Add your custom props or styles here
                                        volume={0.7} // Custom volume level (0 to 1)
                                        className="custom-audio-player" // Custom CSS class
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicBanner;
