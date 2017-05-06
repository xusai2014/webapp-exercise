import React from 'react';
import { Checkbox } from './Checkbox';
import styles from '../styles/main.scss';
import * as _  from 'lodash';

export class ChildCheckboxs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked:props.checked,
      expand:false,
    };
  }
  componentWillReceiveProps(nextprops) {
    this.setState({ checked:nextprops.checked });

  }
  handleCheck() {
    this.setState({ checked:!this.state.checked });
  }
  handleExpand() {
    this.setState({ expand:!this.state.expand });
  }

  render() {
    const { name, num, child } = this.props.li;
    return (
      <li>
        <input type="checkbox" checked={this.state.checked} className={styles['check-box-input']} />
        <label className={this.state.checked ? styles.uncheckicon : ''} onClick={() => {
          this.handleCheck();
        }}>
          <span className={this.state.checked ? styles.checkicon : styles.uncheckicon} ></span>
        </label>
        <span className="text-padding">{name}

          <span className={this.state.expand ? styles.expandup : styles.expanddown} onClick={() => {
            this.handleExpand();
          }}></span>
        </span>

        <span className={styles['num-x-right']}>{num}</span>
        {this.state.expand ? '' : <ul className={styles.treeul}>
          {
            _.map(child, (li, key) => {
              return (
                <Checkbox li={li} checked={this.state.checked} key={key} />
              );
            })
          }
        </ul>}
      </li>
    );
  }
}
