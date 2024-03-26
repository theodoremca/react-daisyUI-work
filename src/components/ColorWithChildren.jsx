export const ColorCWithChildren = ({children,bgColor }) => {
  return (
    <>
      <div className="flex space-x-2">
        <div className={`w-10 ${bgColor}`}></div>
            {children}
      </div>
      <div className="bg-white h-[2px] w-full"></div>
    </>
  );
};
