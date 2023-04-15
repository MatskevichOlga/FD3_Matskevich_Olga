import React from 'react';
import { NavLink } from 'react-router-dom';
//import React, { useState } from 'react';
//import { useNavigate } from "react-router-dom";
import {Collection} from './Collection.js';

import './Gallery.css';

const cats=[
  { "name": "Все", id:101 },
  { "name": "Море", id:102 },
  { "name": "Горы", id:103 },
  { "name": "Архитектура", id:104},
  { "name": "Города", id:105},
  { "name": "Животные", id:106},
  { "name": "Люди", id:107},
  { "name": "Автомобили", id:108}
];

export const Gallery = ( ) => {
 /* const [error, setError] = React.useState(null);*/
  const [isLoading, setIsLoading] = React.useState(true);
 // const [page, setPage] = React.useState(1);
  const [categoryId, setCategoryId]=React.useState(0);
  const [searchValue, setSearchValue]=React.useState('');
  const [collections, setCollections]=React.useState([]);
  const [title, setTitle]=React.useState("Фото-галерея");
  let message;


  // Пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  // ajax запрос
  React.useEffect(() =>{
   // setIsLoading(true);
const category = categoryId ? `category=${categoryId}` : "";


  
 fetch(`https://6436a54a3e4d2b4a12d7d6e1.mockapi.io/api/v1/Photos?${category}`,)
 // categoryId ? `category=${categoryId}` : ""
//?page=${page}&limit=3&

 .then((res) => res.json())
 .then((json) => {
setCollections(json);
 })
 .catch( error=> {
  console.warn(error);
  alert('Ошибка получения данных');

 })
 .finally(() => setIsLoading(false));
},[categoryId]);

if (isLoading){
message=<h2>Загрузка изображений...</h2>;
}

const photoSearch = (e) =>{
  setSearchValue(e.target.value);
    }
const photoReset = (e) =>{
  setSearchValue('');
}
const collectionSort = collections.filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()));

 return (
  <div className="App">
  <h1 onClick={() => setTitle(false)}>{title}</h1>
    <div className="top">
      <ul className="tags">     
       {cats.map((obj, i) => (
       <li 
       onClick={() => setCategoryId(i)}
       className={categoryId===i ? "active" : ""} 
       key={obj.name}>
           <NavLink to={"/"+i} className="menu-button">{obj.name}</NavLink>
       </li>
       ))     
       }
      </ul>
  <div className="buttons">
    <input value={searchValue} onChange={photoSearch} className="search-input" placeholder="Поиск по названию" />
    <input type="button" className="reset-input btn" data-tooltip="Очистить поиск" value="Cброс" onClick={photoReset} />
  </div>  
 </div>
      <div className="content">
      {message}
      {collectionSort.map((obj, index) => (
                <Collection
                key={index}
                name={obj.name}
                images={obj.photos} >

                </Collection>
                               
                )
                )}
  
      </div>

    </div>
  );
}
