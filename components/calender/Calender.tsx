import React from 'react'
import Date from './Date'
import MonthYear from './MonthYear'
import Time from "./Time"

type Props = {}

const Calender = (props: Props) => {
  return (
    <div>
      {/* month Year */}
      <MonthYear />
      {/* Date date */}
      <Date />
      {/* time */}
      <Time />
    </div>
  )
}

export default Calender