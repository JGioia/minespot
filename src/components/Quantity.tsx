export const Quantity = ({value}: {value: number}) => {
  const displayString = value.toFixed(0);
  return (
    <span>{displayString}</span>
  )
};