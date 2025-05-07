import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin border-4 border-t-transparent border-red-300 rounded-full w-16 h-16"></div>
    </div>
  )
}

export default Loader
