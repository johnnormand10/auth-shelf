import React from 'react';
import {useEffect} from 'react';

import ShelfList from '../ShelfList/ShelfList';

function ShelfPage() {



  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>Current list of shelf items</p>
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
