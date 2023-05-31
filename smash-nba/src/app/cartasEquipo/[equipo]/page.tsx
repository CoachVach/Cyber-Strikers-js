import React, { useEffect, useState } from 'react';
import { dataCartasPorEquipo } from '../../api';
import Item from '@/app/Components/Item';
import ItemListComponent from '@/app/Components/Cartas';

type Params = {
    params:{
        nombre: string
    }
}

export default  function TeamPage({params:{nombre}}:Params){
  nombre="Lakers"

  return (
    <div>
    <ItemListComponent apiCall={dataCartasPorEquipo} name={nombre}/>
    </div>
  );
};
