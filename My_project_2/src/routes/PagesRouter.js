import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageCollection } from '../pages/PageCollection';
import { PageGallery } from '../pages/PageGallery';
/*import { PageClients } from '../pages/PageClients';
import { PageClient } from '../pages/PageClient';*/

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<PageGallery/>} >
        <Route path=":clid" element={<PageCollection/>} />
        </Route>
      </Routes>
    );
    
};
/*     <Route path="/clients" element={<PageClients/>}>
          <Route path=":clid" element={<PageClient/>} />
          // <Route path=":clid" element={<PageCollection/>} />
        </Route>*/
