import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextArea } from "../../components/common/TextArea";
import TextInput from "../../components/common/TextInput";
import styles from "./styles.module.css";

export default function Admin() {
  const { handleSubmit, register } = useForm();
  const [data, setData] = useState();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    const getData = () => {
      fetch("/api/admin")
        .then((res) => res.json())
        .then((dataa) => setData(dataa.data));
    };
    getData();
  }, []);

  const onSubmit = async (data) => {
    await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  console.log(data);
  return (
    <div className={styles.admin}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <TextInput register={register} name="Title" lable="title" />

        <TextArea
          rows="3"
          register={register}
          name="Description"
          label="description"
        />
        {data
          ? data.map((d) => {
              return <div>{d.title}</div>;
            })
          : ""}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
