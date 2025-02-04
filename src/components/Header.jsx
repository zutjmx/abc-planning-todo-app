import React from 'react'

const Header = () => {
  return (
    <header className="bg-midnight-navy px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-arctic-white text-xl font-bold">
          Acme Corp
        </h1>
        <p className="text-cloudy-steel italic">
          Building Tomorrow, Today
        </p>
      </div>
    </header>
  )
}

export default Header
