import React from 'react';
import '../StaticReactComponent/css/similar.css'

const SimilarArtist = () => {
    return (
        <div className="col-sm-12 col-md-3 ">
            <div className="card" style={{ backgroundColor: '#0c1027' }}>
                <div className="card-body row" style={{ backgroundColor: '#0c1027' }}>
                    <table className="table">
                        <thead>
                            <tr style={{ borderColor: '#0c1027' }}>
                                <th style={{ backgroundColor: '#0c1027' }} scope="col tt1">
                                    <span className="tt1">Similar Artist</span>
                                </th>
                                <th style={{ backgroundColor: '#0c1027' }} scope="col tt1 rr1"></th>
                                <th style={{ backgroundColor: '#0c1027' }} scope="col tt1 rr1">
                                    <span style={{ fontWeight: 'lighter' }} className="tt1 rr">
                                        View All
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='similar-body'>
                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <img
                                        width="40px"
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span className="tt1 rr">Arijit Singh</span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 className="tt1 rr">4:30</h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <img
                                        width="40px"
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span className="tt1 rr">Arijit Singh</span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 className="tt1 rr">4:30</h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <img
                                        width="40px"
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span className="tt1 rr">Arijit Singh</span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 className="tt1 rr">4:30</h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <img
                                        width="40px"
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span className="tt1 rr">Arijit Singh</span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 className="tt1 rr">4:30</h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <img
                                        width="40px"
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span className="tt1 rr">Arijit Singh</span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 className="tt1 rr">4:30</h5>
                                </td>
                            </tr>


                            {/* Add more artist entries similarly */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SimilarArtist;
