import React, { FC, useState } from 'react'
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

  const addAreas = (): void => {
    setArrGridAreas(testArrGridAreas1)
    console.log(arrGridAreas)
  }

  return (
    <>
      <button type="button" onClick={addAreas}>
        Click
      </button>
      <div
        className={styles.mainContainer}
        style={{
          gridTemplateColumns: `repeat(${cols}, calc((100%) / ${cols}))`,
          gridTemplateRows: `repeat(${rows}, calc((100%) / ${rows}))`,
          gridTemplateAreas: arrayTemplateAreasToString(arrGridAreas),
          // gridTemplateAreas: testStrGridAreas,
        }}
      >
        {/* <WidgetTemplate test="Hello widget" /> */}
        <div style={{ gridArea: 'widget1' }} />
        <div style={{ gridArea: 'widget2' }} />
      </div>
    </>
  )
}

export default Core
