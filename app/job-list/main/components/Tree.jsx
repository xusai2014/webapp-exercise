import React from 'react';
import { _ } from 'lodash';
import { ChildCheckboxs } from './ChildCheckboxs';
import styles from '../styles/main.scss';

export class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked:false,
    };
  }
  componentWillReceiveProps() {
    this.setState({ checked:false });
  }
  render() {
    const data = {
      research:{
        name:'工程研发部门',
        num:120,
        child:{
          macDev:{
            name:'Mac开发工程师',
            num:9,
          },
          iosDev:{
            name:'ios App开发工程师',
            num:17,
          },
          androidDev:{
            name:'Android 远程控制工程师',
            num:61,
          },
          frontDev:{
            name:'Web前端工程师',
            num:31,
          },
          androidMediaDev:{
            name:'Android多媒体软件开发工程师',
            num:2,
          },
        },
      },
      design:{
        name:'工程研发部门',
        num:136,
        child:{
          webDesign:{
            name:'网页设计师',
            num:47,
          },
          industrialDesign:{
            name:'ID/工业设计师',
            num:39,
          },
          visualDesign:{
            name:'视觉设计师／GUI界面设计师',
            num:42,
          },
          graphicDesign:{
            name:'平面设计师',
            num:8,
          },
        },
      },
    };
    return (
      <div>
        <ul className={styles.treeul}>
          {
            _.map(data, (li, key) => {
              return <ChildCheckboxs li={li} key={key} checked={this.state.checked} />;
            })
          }
        </ul>
      </div>
    );
  }
}

