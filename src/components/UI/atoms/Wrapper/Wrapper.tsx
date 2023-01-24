export const Wrapper = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen bg-hogwarts-medium lg:bg-hogwarts relative inset-0 bg-cover bg-fixed bg-center lg:bg bg-no-repeat">
      <div className="h-screen bg-gradient-to-r from-transparent to-green-dark">
      {children}        
      </div>
    </div>
  );
};