import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../../Components/Loading";

const Highlighted = () => {
  // query
  const { data: highlights, isLoading } = useQuery({
    queryKey: ["highlights"],
    queryFn: async () => {
      const res = await fetch(
        "https://smart-resale-stall-server.vercel.app/allBuyers",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  // handlerWishList

  return (
    <div className="max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-semibold mt-8">Highlighted</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights &&
          highlights?.map((post) => (
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
                  <br></br>
                  <strong>{post.comment}</strong>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Highlighted;
