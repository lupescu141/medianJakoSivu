
interface buttonProps {
  text: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({text, onClick}: buttonProps) => {
    return <button onClick={onClick}>{text}</button>
} 

export default Button