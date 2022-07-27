import styles from './Loading.module.scss';

import loadingImg from '../../assets/img/marioRun.gif';

const Loading: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={loadingImg} alt="loading" width="32" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
