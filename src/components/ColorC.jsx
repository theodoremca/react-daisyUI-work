export const ColorC = ({ bgColor, text,textColor, }) => {
  return (
    <>
    <div className="w-full h-screen justify-center items-center flex">
     <div>
     <div className="flex space-x-2">
        <div className={`w-10 ${bgColor}`}></div>
        {/* <div className='bg-gray-800 px-2 rounded'>{text}</div> */}
        <div className={`bg-gray-800 px-2 rounded ${textColor}`}>{text}</div>
      </div>
      <div className="bg-white h-[2px] w-full"></div>
     </div>
    </div>

    </>
  );
};
