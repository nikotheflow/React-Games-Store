import styles from './NotFoundBlock.module.scss';

import emptyImg from '../../assets/img/marioDeath.gif';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={emptyImg} width="200" height="200" alt="mario death"></img>
      <h2>Page not found!</h2>
    </div>
  );
};
