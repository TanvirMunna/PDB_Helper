import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading";

const NewPost = ({ products, isLoading }) => {
  // query

  if (isLoading) {
    return <Loading />;
  }

  if (products?.length <= 0) {
    return (
      <h1 className="text-xl font-bold text-center my-4">No Post found</h1>
    );
  }

  // handlerWishList

  return (
    <div>
      <h1 className="text-3xl font-semibold mt-8">New Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products &&
          products?.map((post) => (
            <div
              className="bg-[#bde0fe] shadow-xl my-4 flex flex-col justify-between p-3 rounded-lg"
              key={post._id}
            >
              <div className="rounded-md">
                <img
                  className="w-full h-52 rounded-md"
                  src={post.image}
                  alt="post"
                />
              </div>

              <div className="">
                <h2 className="text-xl font-semibold">{post.level}</h2>

                <div className="">
                  <p>
                    Location: {post.location} | {post.locationDetails}{" "}
                  </p>
                  <p>Problem: {post.description}</p>

                  <p>Posted: {post.date}</p>
                  <div>
                    {post.email ? (
                      <>
                        <button className="" title="Verified">
                          Verified user: {post.whoPosted}
                          <div className="badge badge-success"></div>
                        </button>
                      </>
                    ) : (
                      <p>Unknown user</p>
                    )}
                  </div>
                  <a href={`tel:${post.phone}`}>Call: {post.phone}</a>
                </div>

                <div className="card-actions justify-start mt-3">
                  <Link to={`/highlight/${post._id}`}>
                    <button className="btn btn-success hover:btn-outline">
                      Highlight
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewPost;
