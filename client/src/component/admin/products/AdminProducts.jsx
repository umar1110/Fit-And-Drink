import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function AdminProducts() {

  useEffect(()=>{
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  },[])
  return (
    <div className="admin-products">
      <div className="products-heading-and-add-btn flex justify-around text-lg mt-2">
        <Link to={"/admin/dashboard/products"} className="  text-center  pr-3 w-1/2 py-2 shadow-xl rounded-xl hover:bg-slate-200">Products</Link>
        
        <Link to={"/admin/dashboard/products/upload"} className="w-[48%] py-2 text-center shadow-xl rounded-xl  hover:bg-slate-200"> Add Product</Link>
      </div>


        <div id="products-section" className="products-section">
          <Outlet/>
        </div>


    </div>
  );
}

export default AdminProducts;

// import React, { useState, useRef } from "react";

// import JoditEditor from "jodit-react";

// function AdminProducts() {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");
//   const [images, setImages] = useState(null);
//   const [imagesPreview, setImagesPreview] = useState(
//     null
//   );

//   const handleFileChange = (e) => {
//     const files = e.target.files;

//     if (files) {
//       const newImages= [];
//       const newImagesPreview = [];

//       Array.from(files).forEach((file) => {
//         const reader = new FileReader();

//         reader.onload = () => {
//           if (reader.readyState === 2 && reader.result) {
//             const imageUrl = reader.result ;
//             newImages.push(imageUrl);
//             newImagesPreview.push(imageUrl);

//             setImages(newImages);
//             setImagesPreview(newImagesPreview);
//           }
//         };

//         // Ensure `file` is of type Blob or File
//         if (file instanceof Blob || file instanceof File) {
//           reader.readAsDataURL(file);
//         }
//       });
//     }
//   };

//   return (
//     <>
//       <div className="">
//         <JoditEditor
//           ref={editor}
//           value={content}
//           // config={config}
//           // tabIndex={1} // tabIndex of textarea
//           onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//           onChange={(newContent) => {
//             setContent(newContent);
//           }}
//         />
//       </div>

//       <div
//         className="html-string"
//         dangerouslySetInnerHTML={{ __html: content }}
//       >
//         {/* <p>{content}</p> */}
//         {/* <img src="/Assets/images/waterTreatement2.jpg" alt="Heel" /> */}
//       </div>

//       <form
//         action=""
//         onSubmit={() => {
//           const formData = new FormData();
//         }}
//       >
//         <input
//           type="file"
//           name="FIles"
//           id=""
//            accept="image/*"
//            multiple
//           onChange={handleFileChange}
//         />
//       </form>

//       <div className="flex flex-wrap ">
//       {imagesPreview &&  imagesPreview.length > 0 && (
//         imagesPreview.map((image, index) => (
//           <img key={index} src={`${image}`} alt={`Preview ${index}`} width={200} height={200} className="mx-4 my-4" />
//         ))
//       )}
//       </div>
//     </>
//   );
// }

// export default AdminProducts
