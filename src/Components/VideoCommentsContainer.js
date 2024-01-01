const Comments = ({ author, comment, imageUrl }) => {
  return (
    <div className="flex p-2 gap-2 bg-gray-200 rounded-md m-2 items-center">
      <img
        className="h-11 cursor-pointer rounded-full"
        alt="userIcon"
        src={imageUrl}
      />
      <div>
        <h2 className="font-bold">{author}</h2>
        <p className="text-xs md:text-sm ml-3 pt-1">{comment}</p>
      </div>
    </div>
  );
};

const VideoCommentsContainer = ({ items }) => {
  return (
    <div className="p-2 md:p-4 mt-2 rounded-md lg:w-8/12">
      <h1 className="font-bold text-xl my-2">Comments: </h1>
      {items.map((item, index) => {
        return (
          <Comments
            key={item.id}
            author={item.snippet.topLevelComment.snippet.authorDisplayName}
            comment={item.snippet.topLevelComment.snippet.textOriginal}
            imageUrl={
              item.snippet.topLevelComment.snippet.authorProfileImageUrl
            }
          />
        );
      })}
    </div>
  );
};

export default VideoCommentsContainer;
