import { DataStore } from "@aws-amplify/datastore";
import { Post } from "../../src/models";

export default async (req, res) => {
  if (req.method === "POST") {
    await DataStore.save(
      new Post({
        title: req.body.Title,
        description: req.body.Description,
      })
    );
    res.status(201).json({ message: "posted sucsesfully" });
  } else {
    const data = await DataStore.query(Post);
    res.status(200).json(data);
  }
};
