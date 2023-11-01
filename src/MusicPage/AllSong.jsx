import React, { useEffect, useState } from 'react';
import '../StaticReactComponent/css/similar.css';
import RecentMusic from './RecentMusic';
import MusicBanner from './MusicBanner';

import axios from 'axios';
import { Link } from 'react-router-dom';

function AllSong({ setSong, songs }) {


    const containerStyle = {
        height: '320px',
        overflowY: 'scroll',
    };


    // console.log(songs);

    return (
        <div className="row mt-3">
            <div className="col-sm-12 col-md-9 position-relative" style={{ marginTop: '-5%' }}>
                <div className="card" style={{ backgroundColor: '#0c1027', borderColor: '#0c1027' }}>
                    <div className="card-body border-0">
                        <div className="card" style={{ backgroundColor: '#0c1027' }}>
                            <div className="card-body row border-0" style={{ backgroundColor: '#0c1027', borderColor: '#0c1027' }}>
                                {/* First table */}
                                <span className="tt1">Suggestion for you</span>
                                <div style={containerStyle} className="table-data">
                                    <table className="table">
                                        {/* Head of artist */}
                                        <thead>
                                            <tr style={{ borderColor: '#0c1027' }}>
                                                <th style={{ backgroundColor: '#0c1027', borderColor: '#0c1027' }}>
                                                    {/* Add a header label here */}
                                                </th>
                                                <th style={{ backgroundColor: '#0c1027' }}></th>
                                                <th style={{ backgroundColor: '#0c1027' }}>
                                                    <span style={{ fontWeight: 'lighter' }} className="tt1 rr">
                                                        {/* Add a header label here */}
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="p-3">
                                            {
                                                songs && songs.map((song, index) => (
                                                    <tr onClick={() => setSong(song)} style={{ border: '10px solid #0c1027', borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                                        <td style={{ backgroundColor: '#1a1e33' }}>
                                                            <span className="tt1">{index + 1}</span>
                                                            <img style={{ marginLeft: '4%' }} width="40px" src={song.profile} alt="" />
                                                            <span style={{ marginLeft: '4%' }} className="tt1 rr">{song.songName}</span>
                                                            <br />
                                                        </td>
                                                        <td style={{ backgroundColor: '#1a1e33' }}>
                                                        </td>
                                                        <td style={{ backgroundColor: '#1a1e33' }} className="tt1">
                                                            <span className="tt1 rr"><i className="fa fa-heart-o"></i></span>
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
                </div>
            </div>

            {/* Recent */}
            <RecentMusic />
        </div>
    );
}

export default AllSong;
