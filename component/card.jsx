"use client";
import Image from "next/image";
import AudioControler from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './card.module.css'


const TrackCard = ({info: {title,imgurl,audiourl}}) => {

    return(
        <>
        <div>
            <h3 className={style.title}>{title}</h3>
            <img  src={imgurl} alt={title} width={500} height={500} />
            <AudioControler src={audiourl}  />
        </div>
        </>
    )
}

export default TrackCard;