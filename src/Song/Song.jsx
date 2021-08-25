import audio from './1525868875_joji-yeah-right-www_muzonov_net.mp3'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

import useSound from 'use-sound';

export default function Song() {
    const [play, { stop }] = useSound(audio);

    return (
        <div  style={{display: 'flex', alignItems: 'center'}}>
            <MusicNoteIcon style={{ color: '#deab50' }} onClick={() => play()} />
            <MusicOffIcon style={{ color: '#434037' }} onClick={() => stop()} />
        </div >
    );
};

