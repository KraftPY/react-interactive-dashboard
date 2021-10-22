import React, { FC, MouseEvent, useState } from 'react'
import styles from './styles.module.scss'
import WidgetTemplate from '../../components/WidgetTemplate'

interface IProps {
  rows: number
  cols: number
}

const arrayTemplateAreasToString = (arrGridAreas: string[][]): string =>
  `"${arrGridAreas.map(r => r.join(' ')).join('" "')}"`

const testArrGridAreas = [
  [
    'widget1',
    'widget1',
    'widget1',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
  ],
  [
    'widget1',
    'widget1',
    'widget1',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
  ],
  [
    'widget1',
    'widget1',
    'widget1',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
  ],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
]

const testArrGridAreas1 = [
  [
    'widget1',
    'widget1',
    'widget1',
    '.',
    'widget2',
    'widget2',
    'widget2',
    '.',
    '.',
    '.',
    '.',
    '.',
  ],
  [
    'widget1',
    'widget1',
    'widget1',
    '.',
    'widget2',
    'widget2',
    'widget2',
    '.',
    '.',
    '.',
    '.',
    '.',
  ],
  [
    'widget1',
    'widget1',
    'widget1',
    '.',
    'widget2',
    'widget2',
    'widget2',
    '.',
    '.',
    '.',
    '.',
    '.',
  ],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
]

const testStrGridAreas = `
  'widget1 widget1 widget1 . . . . . . . . .'
  'widget1 widget1 widget1 . . . . . . . . .'
  'widget1 widget1 widget1 . . . . . . . . .'
  '. . . . . . . . . . . .'
  '. . . . . . . . . . . .'
  '. . . . . . . . . . . .'
  '. . . . . . . . . . . .'
  '. . . . . . . . . . . .'
`

const Core: FC<IProps> = ({ rows, cols }: IProps) => {
  const [arrGridAreas, setArrGridAreas] = useState(testArrGridAreas)

  const onMouseDown = (e: MouseEvent): void => {
    const target = e.target as HTMLDivElement
    console.log(target.id)
  }

  return (
    <div
      role="presentation"
      className={styles.mainContainer}
      style={{
        gridTemplateColumns: `repeat(${cols}, calc((100%) / ${cols}))`,
        gridTemplateRows: `repeat(${rows}, calc((100%) / ${rows}))`,
        gridTemplateAreas: arrayTemplateAreasToString(arrGridAreas),
      }}
      onMouseDown={(e: MouseEvent) => onMouseDown(e)}
    >
      <div id="widget1" style={{ gridArea: 'widget1' }} />
      <div id="widget2" style={{ gridArea: 'widget2' }} />
    </div>
  )
}

export default Core
