import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-midnight-navy mt-auto py-4">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-arctic-white text-center">
          Copyright © {new Date().getFullYear()} ABC Planning
        </p>
      </div>
    </footer>
  )
}

export default Footer
