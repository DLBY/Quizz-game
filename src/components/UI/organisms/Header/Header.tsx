import { Button } from '@/components';

export const Header = () => {  
  return (
    <header className="z-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <Button className='bg-green-secondary self-end lg:self-auto px-8 py-3 text-lg lg:order-last'>Se connecter</Button>
                    
      <h1 className="flex flex-col text-4xl mt-24 lg:mt-0 font-bold text-green-dark">
        Hogwarts
        <span className="flex flex-col text-white">Quizz</span>
        </h1>
      </div>
    </header>
  );
};