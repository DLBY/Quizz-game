export const Header = () => {  
  return (
    <header className="z-10">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <button className="bg-green self-end px-5 py-3 text-lg font-bold rounded-2xl shadow-button sm:hover:shadow-button-hover sm:active:shadow-button lg:order-last group relative overflow-hidden transition-all duration-200">
          <div className="text-white">
            Se connecter
          </div>
          </button>
                    
      <h1 className="flex flex-col text-4xl mt-32 lg:mt-0 font-bold text-green-dark">
        Hogwarts
        <span className="flex flex-col text-white">Quizz</span>
        </h1>
      </div>
    </header>
  );
};