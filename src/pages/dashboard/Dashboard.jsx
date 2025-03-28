import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import CardData from '../../components/cards/CardData'
import { People } from 'react-bootstrap-icons'

export default function Dashboard() {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-4 gap-x-2'>
        <CardData title="Utilisateurs" total="10">
          <People size={24}/>
        </CardData>
        <CardData title="Utilisateurs" total="10">
          <People size={24}/>
        </CardData>
        <CardData title="Utilisateurs" total="10">
          <People size={24}/>
        </CardData>
        <CardData title="Utilisateurs" total="10">
          <People size={24}/>
        </CardData>
      </div>
    </DefaultLayout>
  )
}
