import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 animate-pulse">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export default Shimmer;
