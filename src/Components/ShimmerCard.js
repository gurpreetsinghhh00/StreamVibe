const ShimmerCard = () => {
  return (
    <div className="w-[308px] h-96 shadow-md rounded-md">
      <div className="h-3/5 w-[308px] rounded-md bg-gray-200"></div>
      <div className="flex flex-col p-3 justify-between h-2/5">
        <h1 className="bg-gray-200 h-7"></h1>
        <h2 className="bg-gray-200 h-7"></h2>
        <p className="bg-gray-200 h-7"></p>
      </div>
    </div>
  );
};

export default ShimmerCard;
