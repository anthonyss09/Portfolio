import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPostData: builder.query({
      query: (postId) => `/posts/get-post-data?postId=${postId}`,
      providesTags: ["Post"],
    }),

    likePost: builder.mutation({
      query: ({ postId, likes }) => ({
        url: "/posts/like-post",
        method: "POST",
        body: { postId, likes },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted({ postId, likes }, { dispatch, queryFulfilled }) {
        console.log("query started");
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getPostData", postId, (draft) => {
            draft.post.likes++;
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),

    createComment: builder.mutation({
      query: (comment) => ({
        url: "/posts/create-comment",
        method: "POST",
        body: comment,
      }),
      async onQueryStarted(comment, { dispatch, queryFulfilled }) {
        socket.emit("message", {
          type: "createComment",
          content: { ...comment },
        });
        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
          console.log(error);
        }
      },
    }),

    getComments: builder.query({
      query: (postId) => ({
        url: `/posts/get-comments?postId=${postId}`,
        method: "GET",
      }),
      async onCacheEntryAdded(
        postId,
        { updateCachedData, updateQueryData, dispatch }
      ) {
        socket.on("message", (message) => {
          switch (message.type) {
            case "createComment":
              if (postId === message.content.postId) {
                dispatch(
                  extendedApiSlice.util.updateQueryData(
                    "getComments",
                    (postId = message.content.postId),
                    (draft) => {
                      console.log("the draft id is ", postId);
                      draft.content.push(message.content);
                    }
                  )
                );
              }
              break;
            default:
              break;
          }
        });
      },
    }),
  }),
});

export const { useLikePostMutation, useGetPostDataQuery } = extendedApiSlice;
