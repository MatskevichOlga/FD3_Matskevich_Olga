import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//import { PagesLinks } from './components/PagesLinks';
import { PagesRouter } from './routes/PagesRouter';
/*
import Gallery from './components/Gallery.js';

export const App = () => (
 <Gallery />
  );*/
 
export const App = () => (
    <BrowserRouter>
        <div>      
            <PagesRouter />
        </div>
    </BrowserRouter>
);
    // <PagesLinks />