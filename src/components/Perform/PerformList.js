import React, {Component} from 'react';

import styles from './PerformList.less';

import performBg from '../../../assets/PerformList/perform_bg.webp';
import performColor from '../../../assets/PerformList/perform_top_bg.webp';
import PerformArtist from "./PerformArtist";
import PerformSong from "./PerformSong";


export default class RichRankList extends Component {


  render() {
    const {visible, performSongs,artistInfo} = this.props;


    return (
      <div className={styles.perform_list_warp} style={{display: visible ? '' : 'none'}}>
        <img className={styles.perform_bg} src={performBg} alt={''}/>
        <img className={styles.perform_color_bg} src={performColor} alt={''}/>
        <PerformArtist artistInfo={artistInfo}/>
        <PerformSong performSongs={performSongs}/>

      </div>
    )
  }

}
