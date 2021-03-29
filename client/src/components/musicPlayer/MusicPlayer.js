import React, {useEffect, useState} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';



const MusicPlayer = (props) =>{

   const [audioLists, setAudioLists] = useState({
      name: '',
      singer: '',
      cover: '',
      musicSrc:'',
    })
    
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
        <ReactJkMusicPlayer 
         mode='full'
         autoPlay={false}
         toggleMode={true}
         showMediaSession={true}
         theme='dark'
         audioLists={audioLists}
        />
    )
}

export default MusicPlayer
