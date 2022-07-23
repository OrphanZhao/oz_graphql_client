import styles from './index.less';
import { connect } from 'umi';
import { useEffect, useState } from 'react';

function IndexPage(props) {
  const { dispatch } = props;
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: 'user/setState',
              payload: {
                list: [],
              },
            })
          }
        >
          button
        </button>
      </div>
    </div>
  );
}

export default connect(({ user }) => ({ user }))(IndexPage);
