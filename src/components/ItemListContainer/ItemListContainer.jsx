import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import  db  from "../../utils/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { category } = useParams();
  
    useEffect(() => {
      async function fetchData() {
        if (category) {
          const q = query(collection(db, "products"), where("category", "==", category));
          const querySnapshot = await getDocs(q);
          const dataFromFirestore = querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          }));
          setData(dataFromFirestore);
        } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          const dataFromFirestore = querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          }));
          setData(dataFromFirestore);
        }
      }
      fetchData();
    }, [category]);

  return <ItemList  item={data} />;
};

export default ItemListContainer;

