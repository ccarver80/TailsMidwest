import { DataStore } from "@aws-amplify/datastore";
import { TestPost } from "../../src/models";

export default async (req, res) => {
  if (req.method === "POST") {
    await DataStore.save(
      new TestPost({
        title: req.body.Title,
        description: req.body.Description,
      })
    );
    res.status(201).json({ message: "posted sucsesfully" });
  } else {
    // List all items
    const models = await DataStore.query(TestPost);

    res.status(200).json(models);
  }
};
