import React from 'react'

type Props = {
  bg:string;
  text: string;
  color: string;
  type: "button"| "submit" | "reset"
  onClick: React.Dispatch<React.SetStateAction<boolean>>
}

const Button = ({type="button", onClick, color="white", text="Button", bg=""}: Props) => {
  return (
    <button type={type} className={`${color} ${bg} p-4 font-medium rounded-md hover:bg-slate-100 active:scale-[0.9] transition-transform duration-200`} >{text}</button>
  )
}

export default Button