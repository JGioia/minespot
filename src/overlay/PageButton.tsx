import './PageButton.css'

type PageButtonProps = {
  direction: 'left' | 'right' | 'up' | 'down'
};

const PageButton = ({direction}: PageButtonProps) => {
  const onClick = () => console.log('hi');

  return (
    <div onClick={onClick}>
      {direction}
    </div>
  )
};

export default PageButton