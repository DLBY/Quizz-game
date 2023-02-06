interface PopupProps {
  children?: React.ReactNode;
}

export const Popup = ({ children } : PopupProps) => {

  return (
    <div className="fixed inset-0 z-50 flex min-h-full w-full justify-center overflow-auto bg-green-dark/80">
      <div className="flex flex-wrap justify-center md:flex-nowrap md:space-x-4 lg:mt-0 w-full max-w-md lg:items-center">
        <div className="relative bg-white p-8 mb-12 mt-28">
          <div className="absolute inset-0 z-0 rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};