import React, { useEffect, useState } from 'react';
import '../StaticReactComponent/css/similar.css';
import RecentMusic from './RecentMusic';
import MusicBanner from './MusicBanner';

import axios from 'axios';
import { Link } from 'react-router-dom';
import MusicLoading from './MusicLoading';
import Favorite from './Favorite';

function AllSong({ setSong, songs, idF }) {


    const containerStyle = {
        maxHeight: '270px',
        overflowY: 'auto',
    };

    // console.log(songs);

    return (
        <div className="row mt-3" style={{ height: '100%' }}>

            <div className="col-sm-12 col-md-9 position-relative" style={{ marginTop: '-5%' }}>

                <div class="row mt-4 py-4">
                    <div class="col-sm-6 col-md-4" >
                        <span className='text-white' style={{ background: '#0c1027' }}>Favorite</span>

                        <div class="" style={{ background: '#0c1027' }}>
                            <div class="" style={{ background: '#0c1027' }}>
                                <Favorite idF={idF} setSong={setSong} />
                            </div>
                        </div>
                    </div>

                    {/* all songs */}
                    <div class="col-sm-6 col-md-8">
                        <span style={{ background: '#0c1027' }} className='text-white'>All Songs</span>
                        <div style={containerStyle} className="table-data">
                            <table className="table">
                                <tbody>
                                    {

                                        songs && songs?.map((song, index) => (
                                            <tr className='heart ' onClick={() => setSong(song)} style={{ border: '10px solid #0c1027', borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                                <td style={{ backgroundColor: '#1a1e33' }}>
                                                    <span className="tt1">{index + 1}</span>
                                                    <img style={{ marginLeft: '4%' }} width="40px" src={song.profile} alt="" />
                                                    <span style={{ marginLeft: '4%' }} className="tt1 rr">{song.songName}</span>
                                                    <br />
                                                </td>
                                                <td style={{ backgroundColor: '#1a1e33' }}>
                                                </td>
                                                <td style={{ backgroundColor: '#1a1e33' }} className="tt1">
                                                    <span style={{ marginLeft: '50%' }} className="tt1"><i className="fa fa-plus"></i></span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent */}
            <RecentMusic setSong={setSong} />
        </div>
    );
}

export default AllSong;
