import { Button } from '@/components';
import clsx from "clsx";


export const Header = () => {  
  return (
    <header className="z-10">
      <div className={clsx(
        'absolute right-4',
        'lg:right-12'
        )}>
        <Button className={clsx(
          'bg-green-secondary self-end lg:self-auto px-8 py-3 text-lg ',
          'lg:self-auto lg:order-last'
          )}>Se connecter</Button>
      </div>
                    
      <h1 className='flex flex-col text-4xl mt-24 lg:mt-0 font-bold text-green-dark'>
        Hogwarts
        <span className='flex flex-col text-white'>Quizz</span>
        </h1>
    </header>
  );
};