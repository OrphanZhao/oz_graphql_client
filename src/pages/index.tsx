import styles from './index.less';
import request from 'umi-request';

export default function IndexPage() {
  // 1. 最原始的请求
  function fetchGraphql() {
    request
      .post('/api/graphql', {
        data: {
          query: '{name}',
        },
      })
      .then((res) => console.log('res', res));
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <button onClick={() => fetchGraphql()}>graphql query</button>
      </div>
    </div>
  );
}
