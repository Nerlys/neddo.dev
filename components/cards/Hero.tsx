import { IHero } from "../../lib/interfaces"
import { ButtonPrimary, ButtonGroup } from "../buttons/Button"

export function Hero({title, subtitle, button, onClick}: IHero) {
  return (
    <div className='rounded-xl bg-primary-100 mb-5'>
      <div className='mx-5 my-10'>
        <h1 className='text-white drop-shadow-lg mb-4 text-3xl font-bold'>{title}</h1>
        <h3 className='text-white drop-shadow-lg text-xl'>{subtitle}</h3>
        <ButtonGroup>
          <ButtonPrimary className='drop-shadow-lg font-bold' title={button} onClick={onClick}/>
        </ButtonGroup>
      </div>
    </div>
  )
}