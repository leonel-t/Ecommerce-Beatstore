import React, {useEffect, useState, createRef} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const MusicPlayer = (props) =>{

    const AudioPlayerRef = createRef();

    const [audioLists, setAudioLists] = useState([ ])
    
      useEffect(() => {
        setTimeout(() => {
            setAudioLists([
                {
                    name: props.name,
                    singer: props.singer,
                    cover:props.cover,
                    musicSrc:props.music,
                  },
                ])
        }, 2000)
      }, [setAudioLists, props])

    return (
        <div>

        <ReactJkMusicPlayer 
         ref={AudioPlayerRef}
         mode='full'
         autoPlay={false}
         toggleMode={true}
         showMediaSession={true}
         theme='dark'
         audioLists={audioLists}
        />

        </div>
    )
}

export default MusicPlayer
