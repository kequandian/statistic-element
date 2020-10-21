import { NewProgressRing } from '../export';

const NewProgressRingDemo = ({ }) => {

  const pieProps = {
    value: 86,
  }

  return (
    <div>
      <NewProgressRing {...pieProps} />
    </div>
  )
}

export default NewProgressRingDemo
