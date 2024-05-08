import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Isloading from "../../../../Components/Isloading";
import { AuthContext } from "../../../../Context/Authprovider";

const Myorders = () => {
  const { user, loading } = useContext(AuthContext);

  const orders = useLoaderData();
  const { level, image, location, phone, description } = orders;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const highlightHandler = (data) => {
    if (loading) {
      return <Isloading />;
    }

    // addProducts to database collection

    const highlight = {
      phone: data.phone,
      level: data.level,
      location: data.location,
      description: data.description,
      name: user.displayName,
      image,
      email: user.email,
      comment: data.comment,
    };

    fetch("https://smart-resale-stall-server.vercel.app/ordered", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(highlight),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Successfully highlighted the post");
        navigate("/orderedProduct");
      });
  };
  if (loading) {
    return <Isloading />;
  }

  return (
    <div className="my-14 w-9/12 mx-auto">
      <h1 className="text-center text-2xl font-semibold mb-4">
        Highlight the post
      </h1>
      <form
        className="bg-[#a8dadc] rounded-md"
        onSubmit={handleSubmit(highlightHandler)}
      >
        <div className="">
          <div className="form-control w-full p-3">
            <label className="label-text">Level</label>
            <input
              className="input"
              defaultValue={level}
              readOnly
              type="text"
              {...register("level")}
            />
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              className="input"
              type="text"
              defaultValue={location}
              readOnly
              {...register("location")}
            ></input>
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Description</span>
            </label>

            <input
              className="input input-bordered w-full"
              type="text"
              defaultValue={description}
              readOnly
              {...register("description")}
            />
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>

            <input
              required
              className="input input-bordered w-full"
              type="text"
              {...register("name")}
              aria-invalid={errors.displayName ? "true" : "false"}
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>

            <input
              required
              className="input input-bordered w-full"
              type="text"
              defaultValue={phone}
              {...register("phone")}
              readOnly
            />
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              required
              className="input input-bordered w-full"
              type="text"
              readOnly
              defaultValue={user.email}
              {...register("email")}
            />
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Your Comment</span>
            </label>

            <textarea
              required
              className="input input-bordered w-full h-32 resize-none"
              placeholder="Need solve as soon as possible"
              type="text"
              {...register("comment")}
            />
          </div>
        </div>

        <div className="form-control my-3">
          <button className="btn btn-success text-white font-semibold capitalize">
            Highlight
          </button>
        </div>
      </form>
    </div>
  );
};

export default Myorders;
