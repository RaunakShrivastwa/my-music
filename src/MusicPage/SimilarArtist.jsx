import React from 'react';
import '../StaticReactComponent/css/similar.css'

const SimilarArtist = ({ setSong, songs }) => {
    const containerStyle = {
        Maxheight: '240px',
        overflowY: 'scroll',
    };
    return (
        <div className="col-sm-12 col-md-3 ">
            <div className="card" style={{ backgroundColor: '#0c1027' }}>
                <div className="card-body row" style={{ backgroundColor: '#0c1027' }}>
                    <p className='text-white'> Popular Song</p>
                    <div class="row row-cols-2 row-cols-md-3 g-1 table-data" style={containerStyle}>

                        {
                            songs && songs.map((song, index) => (
                                song.popular && (
                                    <div class="col">
                                        <div class="card" onClick={() => setSong(song)}>
                                            <img src={song.profile} class="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                )
                            ))
                        }


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SimilarArtist;
