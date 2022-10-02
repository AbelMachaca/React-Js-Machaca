import React,{ useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import  {db }  from "../../utils/firebaseConfig";
import { getDoc,doc } from "firebase/firestore";


const ItemDetailContainer=() =>{
  const[data,setData]=useState({});
  const {id}= useParams();
  
   useEffect(() =>{
    
   async function getProduct(){
  const docSnap=await getDoc(doc(db,"products",id))
  const producto={id: id, ...docSnap.data()}
  setData(producto)   }
  getProduct()   },[id]);

  return (  <>
  
    <ItemDetail item={data}/>
     </>
   );
 }
 export default ItemDetailContainer;