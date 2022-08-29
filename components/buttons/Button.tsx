import { IBaseComponent, IButton } from "../../lib/interfaces";

export function ButtonGroup ({ children }: IBaseComponent) {
  return (
    <div
      className='box-border flex items-center flex-wrap mt-6'
    >
      {children}
    </div>
  );
};

export function ButtonPrimary ({ title, onClick }: IButton)  {
  return (
    <div>
      <button onClick={onClick} className="bg-primary-100 border-primary-200 hover:bg-primary-300 py-2 text-base px-6 text-white leading-none rounded-md font-extrabold inline-flex animate items-center border-2 duration-200 uppercase" >
        {title}
      </button>
    </div>
  )
}

export function ButtonSecondary ({ title, onClick }: IButton)  {
  return (
    <div>
      <button onClick={onClick} className="bg-secondary-100 border-secondary-200 hover:bg-secondary-300 py-2 text-base px-6 text-white leading-none rounded-md font-extrabold inline-flex animate items-center border-2 duration-200 uppercase" >
        {title}
      </button>
    </div>
  )
}