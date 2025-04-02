import React from 'react'
import Navbaritem from './Navbaritem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-amber-600 bg-amber-200 p-2 lg:text-lg justify-center gap-4'>
        <Navbaritem title="Trending" param="fetchTrending"/>
        <Navbaritem title="Top Rated" param="fetchTopRated"/>
        <Navbaritem title="Popular" param="fetchPopular"/>
        <Navbaritem title="Upcoming" param="fetchUpcoming"/>
    </div>
  )
}
