

import React, { useState, useRef } from "react";

import JoditEditor from "jodit-react";
import "./dashboard.css";
const Dashboard = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [images, setImages] = useState(null);
  const [imagesPreview, setImagesPreview] = useState(
    null
  );

  // const config = useMemo(
  //   () => ({
  //     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: "Start typing...",
  //   }),
  //   []
  // );

  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files) {
      const newImages= [];
      const newImagesPreview = [];

      Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2 && reader.result) {
            const imageUrl = reader.result ;
            newImages.push(imageUrl);
            newImagesPreview.push(imageUrl);

            setImages(newImages);
            setImagesPreview(newImagesPreview);
          }
        };

        // Ensure `file` is of type Blob or File
        if (file instanceof Blob || file instanceof File) {
          reader.readAsDataURL(file);
        }
      });
    }
  };


  return (
    <>
      <div className="mt-20">
        <JoditEditor
          ref={editor}
          value={content}
          // config={config}
          // tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {
            setContent(newContent);
          }}
        />
      </div>

      <div
        className="html-string"
        dangerouslySetInnerHTML={{ __html: content }}
      >
        {/* <p>{content}</p> */}
        {/* <img src="/Assets/images/waterTreatement2.jpg" alt="Heel" /> */}
      </div>

      <form
        action=""
        onSubmit={() => {
          const formData = new FormData();
        }}
      >
        <input
          type="file"
          name="FIles"
          id=""
           accept="image/*"
           multiple
          onChange={handleFileChange}
        />
      </form>


      <div>
      {imagesPreview &&  imagesPreview.length > 0 && (
        imagesPreview.map((image, index) => (
          <img key={index} src={`${image}`} alt={`Preview ${index}`} width={2000} height={2000}  />
        ))
      )}
      </div>
    </>
  );
};

export default Dashboard;
