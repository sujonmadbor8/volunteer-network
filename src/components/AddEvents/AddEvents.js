import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
    };
    const url = `https://salty-thicket-89909.herokuapp.com/addEvent`;
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((response) => console.log("server side response"));
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "85d4a14ebee027466b740d2b9599bb7f");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="New exciting event." {...register("name")} />
      <br />
      <input
        {...register("exampleName")}
        type="file"
        onChange={handleImageUpload}
      />
      <br /> <input type="submit" />
    </form>
  );
};

export default AddEvents;
