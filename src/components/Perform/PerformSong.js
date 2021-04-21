import React, {Component} from 'react';

import SongItem from './SongItem';

import styles from './PerformSong.less';
import animStyles from './SongAnim.less';
import StringUtil from "../../../utils/StringUtil";


export default class PerformSong extends Component {


  handleAnimState = (performSongs) => {
    let animState = 'running';

    if (performSongs.length === 0 || !performSongs) {
      animState = 'paused';
    } else {
      if (performSongs.length < 5) {
        animState = 'paused';
      } else if (performSongs.length < 10) {
        animState = 'running';
      } else {
        animState = 'running';
      }
    }

    return animState;
  };


  handlePerformSong = (performSongs) => {
    let performName = [];

    if (performSongs.length === 0 || !performSongs) {
      for (let i = 0; i < 15; i++) {
        performName[i] = '';
      }
    } else {
      if (performSongs.length < 5) {
        for (let i = 0; i < 15; i++) {
          if (!performSongs[i % 5]) {
            performName[i] = ''
          } else {
            performName[i] = (StringUtil.addZero(i % 5 + 1)) + '  ' + performSongs[i % 5].perform_name;
          }
        }
      } else if (performSongs.length < 10) {
        for (let i = 0; i < 15; i++) {
          if (!performSongs[i % 10]) {
            performName[i] = ''
          } else {
            performName[i] = (StringUtil.addZero(i % 10 + 1)) + '  ' + performSongs[i % 10].perform_name;
          }
        }
      } else {
        for (let i = 0; i < 15; i++) {
          if (!performSongs[i % 15]) {
            performName[i] = ''
          } else {
            performName[i] = (StringUtil.addZero(i % 15 + 1)) + '  ' + performSongs[i % 15].perform_name;
          }
        }
      }
    }
    return performName;

  };


  render() {
    const {performSongs} = this.props;
    // console.log('performSongs:', performSongs);


    const animState = this.handleAnimState(performSongs);
    const performName = this.handlePerformSong(performSongs);


    // console.log('performName: ', performName);

    return (
      <div className={styles.perform_song_warp_mask}>
        <div className={styles.perform_song_warp}>
          <SongItem
            classNameLeft={animStyles.song_item_left_1}
            classNameMiddle={animStyles.song_item_middle_1}
            classNameRight={animStyles.song_item_right_1}
            songNameLeft={performName[0]}
            songNameMiddle={performName[5]}
            songNameRight={performName[10]}
            animRun={animState}/>
          <SongItem
            classNameLeft={animStyles.song_item_left_2}
            classNameMiddle={animStyles.song_item_middle_2}
            classNameRight={animStyles.song_item_right_2}
            songNameLeft={performName[1]}
            songNameMiddle={performName[6]}
            songNameRight={performName[11]}
            animRun={animState}/>
          <SongItem
            classNameLeft={animStyles.song_item_left_3}
            classNameMiddle={animStyles.song_item_middle_3}
            classNameRight={animStyles.song_item_right_3}
            songNameLeft={performName[2]}
            songNameMiddle={performName[7]}
            songNameRight={performName[12]}
            animRun={animState}/>
          <SongItem
            classNameLeft={animStyles.song_item_left_4}
            classNameMiddle={animStyles.song_item_middle_4}
            classNameRight={animStyles.song_item_right_4}
            songNameLeft={performName[3]}
            songNameMiddle={performName[8]}
            songNameRight={performName[13]}
            animRun={animState}/>
          <SongItem
            classNameLeft={animStyles.song_item_left_5}
            classNameMiddle={animStyles.song_item_middle_5}
            classNameRight={animStyles.song_item_right_5}
            songNameLeft={performName[4]}
            songNameMiddle={performName[9]}
            songNameRight={performName[14]}
            animRun={animState}/>

        </div>
      </div>
    )
  }

}
