import Comments from "./Comments";

const commentsData = [
  {
    name: "Gurpreet Singh",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "Gurpreet Singh",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [
          {
            name: "Gurpreet Singh",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [
              {
                name: "Gurpreet Singh",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [
                  {
                    name: "Gurpreet Singh",
                    comment:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Gurpreet Singh",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Gurpreet Singh",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
  {
    name: "Gurpreet Singh",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
  {
    name: "Gurpreet Singh",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="ml-8 border-l border-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 md:p-4 mt-2 rounded-md lg:w-8/12">
      <h1 className="font-bold text-xl my-2">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
