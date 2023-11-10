"use client";
import TrackCard from '@/component/card'
import styles from './page.module.css';
import track from '../app/tracks.json'
import { useState } from 'react';


export default function Home() {

  const trks = track.tracks;
  var [currentTrack,setCurrentTrack] = useState(trks[0]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.titlebar}>
            <h3>ISAI</h3>
            <a>Register</a>
        </div>
        <div className={styles.mainsection}>
          <div className={styles.tracksection}>
            <TrackCard  info={currentTrack}  />
          </div>
          <div className={styles.tracklist}>
              <button  onClick={()=>{ setCurrentTrack(trks[0])}}><div><img src={trks[0].imgurl} width={40} height={40} /><h2>{trks[0].title}</h2></div></button>
              <button  onClick={()=>{ setCurrentTrack(trks[1])}}><div><img src={trks[1].imgurl} width={40} height={40} /><h2>{trks[1].title}</h2></div></button>
              <button  onClick={()=>{ setCurrentTrack(trks[2])}}><div><img src={trks[2].imgurl} width={40} height={40} /><h2>{trks[2].title}</h2></div></button>
              <button  onClick={()=>{ setCurrentTrack(trks[3])}}><div><img src={trks[3].imgurl} width={40} height={40} /><h2>{trks[3].title}</h2></div></button>
              <button  onClick={()=>{ setCurrentTrack(trks[4])}}><div><img src={trks[4].imgurl} width={40} height={40} /><h2>{trks[4].title}</h2></div></button>

          </div>
        </div>
      </div>
    </main>
  )
}
