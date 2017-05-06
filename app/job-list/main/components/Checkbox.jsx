import React from 'react';
import styles from '../styles/main.scss';

export class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked:props.checked,
    };
  }
  componentWillReceiveProps(nextprops) {
    this.setState({ checked:nextprops.checked });

  }
  handleCheck() {
    this.setState({ checked:!this.state.checked });
  }

  render() {
    const { li } = this.props;
    return (
      <li>
        <input type="checkbox" className={styles['check-box-input']} checked={this.state.checked} onChange={() => {
          this.handleCheck();
        }} />
        <label className={this.state.checked ? styles.uncheckicon : ''} onClick={() => {
          this.handleCheck();
        }}>
          <span className={this.state.checked ? styles.checkicon : styles.uncheckicon} ></span>
        </label>
        <span className="text-padding">{li.name}</span>
        <span className="num-right">{li.num}</span>
      </li>
    );
  }
}
