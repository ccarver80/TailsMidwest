import { API } from "aws-amplify";
import { createPost } from "../../src/graphql/mutations";

export default async (req, res) => {
  if (req.method === "POST") {
    const newPost = await API.graphql({
      query: createPost,
      variables: {
        input: {
          title: req.body.Title,
          description: req.body.Description,
        },
      },
    });
    res.status(201).json({ message: "posted sucsesfully" });
  } else {
    // List all items
    const allPosts = await API.graphql({
      query: listPosts,
    });

    res.status(200).json(allPosts);
  }
};
