import React,{Component} from 'react';

import styles from "./PerformArtist.less";

import defaultPhoto from "../../../assets/PerformList/perform_default_icon.jpg";
import photoBg from "../../../assets/PerformList/photo_bg.webp";
import nameBg from "../../../assets/PerformList/sing_name_bg.webp";

export default class PerformArtist extends Component{

    render(){
      let {artistInfo}=this.props;
      // console.log('artistInfo',artistInfo);

       return(
         <div>
           <div className={styles.artist_info_warp}>
             <img src={artistInfo.photo?artistInfo.photo:defaultPhoto} className={styles.artist_photo} alt={''}/>
             <img src={photoBg} className={styles.artist_photo_bg} alt={''}/>
             <div className={styles.artist_name_warp}>
               <img src={nameBg} className={styles.artist_name_bg} alt={''}/>
               <div className={styles.artist_name_warp}>
                 歌手
                 <span className={styles.artist_name}>{artistInfo.nickname}</span>
               </div>
             </div>
           </div>
         </div>
       )
    }

}
