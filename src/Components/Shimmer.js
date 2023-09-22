import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-x-5 gap-y-10 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-pulse">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export default Shimmer;
