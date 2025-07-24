import React from "react";

const Upload = () => {
  return (
    <div>
      <form action="/app" method="post" encType="multipart/form-data">
        <input type="file" name="upload" />
        <button className="bg-pink-500 text-white p-2 rounded-md">
          upload image
        </button>
      </form>
    </div>
  );
};


export default Upload;
