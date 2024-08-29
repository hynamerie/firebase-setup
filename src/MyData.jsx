import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Import your Firestore instance

function MyData() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'feature'); // Replace 'yourCollectionName' with your actual collection name
        const querySnapshot = await getDocs(itemsCollection);

        const fetchedItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data() // Include all data fields from the document
        }));

        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Firestore Data</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {/* Display data fields from the document */}
            {item.name} - {item.about} 
            {/* Add more fields as needed */}
            <div>
              <img src={item.shotUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyData;
