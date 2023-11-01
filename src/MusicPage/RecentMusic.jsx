import React from 'react';

function RecentMusic() {
    return (
        <div className="col-sm-12 col-md-3" style={{ marginTop: '-4%' }}>
            <div className="card" style={{ backgroundColor: '#0c1027' }}>
                <div className="card-body row" style={{ backgroundColor: '#0c1027' }}>
                    <table className="table">
                        {/* Head of artist */}
                        <thead>
                            <tr style={{ borderColor: '#0c1027' }}>
                                <th style={{ backgroundColor: '#0c1027' }} scope="col tt1">
                                    <span className="tt1">Recent played</span>
                                </th>
                                <th style={{ backgroundColor: '#0c1027' }} scope="col tt1 rr1"></th>
                                <th style={{ backgroundColor: '#0c1027' }} scope="col tt1 rr1">
                                    <span style={{ fontWeight: 'lighter' }} className="tt1 rr">view All</span>
                                </th>
                            </tr>
                        </thead>
                        {/* Artist body */}
                        <tbody>
                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <span className="tt1">01</span>
                                    <img
                                        width="40px"
                                        style={{ marginLeft: '5px' }}
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span style={{ marginLeft: '5px' }} className="tt1 rr">
                                        Arijit Singh
                                    </span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 style={{ marginLeft: '5px' }} className="tt1 rr">
                                        <i className="fa fa-heart-o"></i>
                                    </h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <span className="tt1">01</span>
                                    <img
                                        width="40px"
                                        style={{ marginLeft: '5px' }}
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span style={{ marginLeft: '5px' }} className="tt1 rr">
                                        Arijit Singh
                                    </span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 style={{ marginLeft: '5px' }} className="tt1 rr">
                                        <i className="fa fa-heart-o"></i>
                                    </h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <span className="tt1">01</span>
                                    <img
                                        width="40px"
                                        style={{ marginLeft: '5px' }}
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span style={{ marginLeft: '5px' }} className="tt1 rr">
                                        Arijit Singh
                                    </span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 style={{ marginLeft: '5px' }} className="tt1 rr">
                                        <i className="fa fa-heart-o"></i>
                                    </h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <span className="tt1">01</span>
                                    <img
                                        width="40px"
                                        style={{ marginLeft: '5px' }}
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span style={{ marginLeft: '5px' }} className="tt1 rr">
                                        Arijit Singh
                                    </span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 style={{ marginLeft: '5px' }} className="tt1 rr">
                                        <i className="fa fa-heart-o"></i>
                                    </h5>
                                </td>
                            </tr>

                            <tr style={{ borderColor: '#0c1027' }}>
                                <td style={{ backgroundColor: '#0c1027' }}>
                                    <span className="tt1">01</span>
                                    <img
                                        width="40px"
                                        style={{ marginLeft: '5px' }}
                                        src="https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt=""
                                    />
                                    <span style={{ marginLeft: '5px' }} className="tt1 rr">
                                        Arijit Singh
                                    </span>
                                    <br />
                                </td>
                                <td style={{ backgroundColor: '#0c1027' }}></td>
                                <td style={{ backgroundColor: '#0c1027' }} className="tt1">
                                    <h5 style={{ marginLeft: '5px' }} className="tt1 rr">
                                        <i className="fa fa-heart-o"></i>
                                    </h5>
                                </td>
                            </tr>
                            {/* Repeat similar rows for other items */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RecentMusic;
