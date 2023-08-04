import classNames from 'classnames'
import styles from './Loader.module.scss'

export const Loader = () => (
  <div className={styles.loader}>
      <div className={classNames(styles.center, styles.loading)}>
      </div>
  </div>
)