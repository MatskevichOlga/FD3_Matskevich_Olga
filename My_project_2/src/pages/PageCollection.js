import React from 'react';
//import {useParams} from "react-router-dom";

import { Collection } from '../components/Collection';

export const PageCollection = () => {

 /*  const params = useParams();
    console.log(params);
 
    const clientId=parseInt(params.clid);

    const clientData=appData.clients.find( c => c.id===clientId );*/

    return (
      <Collection />
    );
    
}
