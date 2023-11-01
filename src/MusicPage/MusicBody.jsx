import SimilarArtist from './SimilarArtist';
import MusicBanner from './MusicBanner';
import AllSong from './AllSong';
import axios from 'axios';
import { useState, useEffect } from 'react';
function MusicBody() {
    const [songs, setSongs] = useState(); // Change "song" to "songs" for consistency
    const [song, setSong] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://musicbackend-o722.onrender.com/music/getAll');
                console.log(response);
                setSongs(response.data.AllMusics);
                setSong(response.data.AllMusics[0])
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Make sure to add "axios" as a dependency if you use it within the effect.

    return (
        <div className="container-fluid p-3 body-one">
            <div className="container">
                <div className='row'>

                    <MusicBanner song={song} />
                    <SimilarArtist />

                </div>

                <AllSong songs={songs} setSong={setSong} />

            </div>
        </div>
    )
}

export default MusicBody