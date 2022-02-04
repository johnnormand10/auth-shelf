import React from 'react';
import {useEffect} from 'react';
import AddItemForm from '../AddItemForm/AddItemForm';
import ShelfList from '../ShelfList/ShelfList';

function ShelfPage() {



  return (
    <div className="container">
      <h2>Shelf</h2>
      <AddItemForm />
      <p>Current list of shelf items</p>
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
