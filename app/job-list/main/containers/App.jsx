
import React, { PureComponent } from 'react';
import { Tree } from '../components/Tree';
import styles from '../styles/main.scss';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      click:true,
    };
  }
  handleCheck() {
    this.setState({ click:!this.state.click });
  }
  render() {
    return (
      <div className={styles.container}
        id="jobListRoot">
        <div><span className={styles.title}>招聘职位</span><button className={styles.emptybtn} onClick={() => {
          this.handleCheck();
        }}>清空</button></div>
        <Tree checked={this.state.click} />
      </div>
    );
  }

}
