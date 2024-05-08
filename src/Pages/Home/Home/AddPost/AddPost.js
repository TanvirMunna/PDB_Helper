import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../../Context/Authprovider";

const AddPost = () => {
  const { user, loader } = useContext(AuthContext);
  const imghostkey = process.env.REACT_APP_imbgbb_key;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const problemPostHandler = (data) => {
    const image = data.image[0];

    const formData = new FormData();

    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imghostkey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success || user?.uid) {
          console.log(imageData.data.url);
          const whoPosted = user.displayName;
          const addedProduct = {
            whoPosted: whoPosted,
            email: user.email,
            image: imageData.data.url,
            level: data.level,
            location: data.location,
            locationDetails: data.locationDetails,
            description: data.description,
            phone: data.phone,
            date: data.date,
          };

          // AddPost to database collection

          fetch("https://smart-resale-stall-server.vercel.app/addedProducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addedProduct),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              alert("Successfully added the problem");
              navigate("/myPost");
            });
        }
      });
  };
  return (
    <div className="my-14 w-9/12 mx-auto">
      <h1 className="text-center text-2xl font-semibold my-4">
        Post to PDB_helper
      </h1>
      <form
        className=" bg-[#a8dadc] rounded-md"
        onSubmit={handleSubmit(problemPostHandler)}
      >
        <div className="grid grid-cols-1">
          <div className="form-control w-full p-3">
            <label className="label-text"> Upload an Image</label>
            <input
              className="input"
              type="file"
              {...register("image", {
                required: "Photo is required",
              })}
            />
            {errors.img && <p className="text-red-700">{errors.img.message}</p>}
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Select Level</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("level", { required: "Please select one" })}
            >
              <option selected disabled>
                Choice level
              </option>
              <option>Emergency</option>
              <option>Most Important</option>
              <option>More Important</option>
              <option>Less Important</option>
            </select>
            {errors.level?.type === "required" && (
              <p role="alert" className="text-red-700 font-xs">
                Level is required in details
              </p>
            )}
          </div>
          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Select Location</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("location", { required: "Please select one" })}
            >
              <option selected disabled>
                Location?
              </option>
              <option>Bandarban</option>
              <option>Rowangchari</option>
              <option>Ruma</option>
              <option>Lama</option>
              <option>Thanchi</option>
              <option>Alikodom</option>
              <option>Naikhonchori</option>
            </select>
            {errors.location?.type === "required" && (
              <p role="alert" className="text-red-700 font-xs">
                Location is required
              </p>
            )}
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Location in Details</span>
            </label>

            <textarea
              className="input input-bordered w-full"
              type="text"
              {...register("locationDetails", { required: true })}
              aria-invalid={errors.locationDetails ? "true" : "false"}
              placeholder="Rowangchori, Notun para, Master House left side"
            />
            {errors.locationDetails?.type === "required" && (
              <p role="alert" className="text-red-700 font-xs">
                Location required in details
              </p>
            )}
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Problem Description</span>
            </label>

            <textarea
              className="input input-bordered w-full"
              type="text"
              {...register("description", { required: true })}
              aria-invalid={errors.description ? "true" : "false"}
              placeholder="Transformer fired"
            />
            {errors.description?.type === "required" && (
              <p role="alert" className="text-red-700 font-xs">
                Problem Description is required
              </p>
            )}
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Active Phone Number</span>
            </label>

            <input
              className="input input-bordered w-full"
              type="text"
              {...register("phone", { required: true })}
              aria-invalid={errors.phone ? "true" : "false"}
              placeholder="01750000000"
            />
            {errors.phone?.type === "required" && (
              <p role="alert" className="text-red-700 font-xs">
                An Active phone number is required
              </p>
            )}
          </div>

          <div className="form-control w-full p-3">
            <label className="label">
              <span className="label-text">Issued Date</span>
            </label>

            <input
              className="input input-bordered w-full"
              type="date"
              {...register("date", { required: true })}
              aria-invalid={errors.date ? "true" : "false"}
            />
            {errors.date?.type === "required" && (
              <p role="alert" className="text-red-700 font-xs">
                Issued date is required
              </p>
            )}
          </div>
        </div>

        <div className="form-control my-3">
          <button className="btn">Post</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
