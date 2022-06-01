import React, { Component } from 'react'
import GotList from './features/GotList/GotList'

export default class App extends Component {
  render() {
    return (
      <div className='container mx-auto mt-5 bg-gray-100 p-2'>
         <div className='flex flex-row'>
           <section className='w-full'>
              <GotList/>
           </section>
         </div>
      </div>

    )
  }
}
