import React, {Component} from 'react';

import styles from './SongItem.less';
import PropTypes from 'prop-types'


class SongItem extends Component {


  static propTypes = {
    songNameLeft: PropTypes.string.isRequired,
    songNameRight: PropTypes.string.isRequired,
  };


  componentDidMount() {
    this.left.addEventListener(
      "webkitAnimationEnd",
      ()=>{
         this.left.className=styles.left_over;
      }
    );
    this.middle.addEventListener(
      "webkitAnimationEnd",
      ()=>{
        this.middle.className=styles.middle_over;
      }
    );
    this.right.addEventListener(
      "webkitAnimationEnd",
      ()=>{
        this.right.className=styles.right_over;
      }
    );
  }

  UNSAFE_componentWillReceiveProps=(props)=> {
    this.left.className=props.classNameLeft;
    this.middle.className=props.classNameMiddle;
    this.right.className=props.classNameRight;
  };


  render() {
    const {classNameLeft,classNameMiddle,classNameRight,songNameLeft, songNameMiddle,songNameRight, animRun} = this.props;


    return (
      <div className={styles.song_item_warp}>
        <div className={classNameLeft}
             ref={(e)=>this.left=e}
             style={{
               color: 'white',
               fontSize: '3vw',
               overflow: "hidden",
               whiteSpace: "nowrap",
               textOverflow: "ellipsis",
               animationPlayState: animRun,
             }}>{songNameLeft}
        </div>
        <div className={classNameMiddle}
             ref={(e)=>this.middle=e}
             style={{
               position:"absolute",
               width: '42vw',
               left: '100%',
               top: '0',
               color: 'white',
               fontSize: '3vw',
               overflow: "hidden",
               whiteSpace: "nowrap",
               textOverflow: "ellipsis",
               animationPlayState: animRun,
             }}>{songNameMiddle}
        </div>

        <div className={classNameRight}
             ref={(e)=>this.right=e}
             style={{
               position:"absolute",
               width: '42vw',
               left: '200%',
               top: '0',
               color: 'white',
               fontSize: '3vw',
               overflow: "hidden",
               whiteSpace: "nowrap",
               textOverflow: "ellipsis",
               animationPlayState: animRun,
             }}>{songNameRight}
        </div>

      </div>

    )
  }


}

export default SongItem;
