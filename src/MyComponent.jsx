import React, { useState, useEffect } from 'react';
import {storage} from "./firebaseConfig"
import { ref, listAll, getDownloadURL } from 'firebase/storage';

function MyComponent() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // const storage = getStorage();
        const imagesRef = ref(storage, 'Pet Health'); // Replace 'images' with your storage folder

        // List all images in the 'images' folder
        const imageList = await listAll(imagesRef);

        // Get download URLs for each image
        const imageUrls = await Promise.all(
          imageList.items.map((itemRef) => getDownloadURL(itemRef))
        );

        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Image from Firebase Storage</h1>
      {/* Render images using the array */}
      <div>
        <img src={images[1]} alt="Image 2" />
      </div>
      <div>
        <img src={images[2]} alt="Image 3" />
      </div>
      <div>
        <img src={images[3]} alt="Image 4" />
      </div>
      {/* Add more divs and img tags as needed, referencing images[2], images[3], etc. */}
      <h1>Header</h1>
      <img src={images[0]} alt="" />
    </div>
  );
}

export default MyComponent;