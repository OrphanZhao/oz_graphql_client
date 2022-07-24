import styles from './index.less';
import request from 'umi-request';

let num = 5;

export default function IndexPage() {
  // 1. 最原始的请求
  function fetchGraphql() {
    request
      .post('/api/graphql', {
        data: {
          query: `
            query NumRandom($num: Int!) {
              getAtom(num: $num) {
                numRandom(num: $num)
                name
                isNan
                ids
              }
            }
          `,
          variables: { num },
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
