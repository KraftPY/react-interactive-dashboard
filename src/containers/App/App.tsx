import React, { FC } from 'react'
import styles from './styles.module.scss'
import Core from '../Core'

const App: FC = (): JSX.Element => (
  <div className={styles.app}>
    <Core rows={8} cols={12} />
  </div>
)

export default App
