import React, { FC } from 'react'
import styles from './styles.module.scss'

interface Props {
  test?: string
}

const WidgetTemplate: FC<Props> = ({ test }: Props) => {
  console.log(test)
  return (
    <div className={styles.widgetContainer}>
      <p>
        {test}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        laborum, vel et voluptatibus animi molestias tenetur quod saepe amet
        numquam commodi recusandae quia, totam debitis necessitatibus rem itaque
        quis. Illo.
      </p>
    </div>
  )
}

export default WidgetTemplate
