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

//PORT=5000

//MONGO_DB=mongodb+srv://patienceayirezang:gSW0KwZ1bC4BiD42@cluster0.sfxoyo0.mongodb.net/traveljournal?retryWrites=true&w=majority&appName=Cluster0

export default Upload;
