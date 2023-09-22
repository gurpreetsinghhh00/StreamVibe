const ShimmerCard = () => {
  return (
    <div className="shadow-md rounded-md h-72">
      <div className="w-full rounded-md h-1/2 bg-gray-200" />
      <div className="flex py-3 mt-1 h-1/2">
        <div className="w-14"></div>
        <div className="flex flex-col px-1 gap-4 w-full justify-evenly">
          <h1 className="font-bold text-lg h-8 py-1 bg-gray-200 rounded-md"></h1>
          <div className="flex flex-col gap-2">
            <h2 className="h-5 w-1/2 rounded-md bg-gray-200"></h2>
            <p className="h-5 w-1/2 rounded-md bg-gray-200"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
