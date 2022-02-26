import React from 'react'
import Albums from './Albums'
import Popular from './Popular'
import "../css/CategoryDivider.css"
export default function CategoryDivider() {
  return (
      <div className="categoryDivider">
        <Popular/>
        <Albums/>
      </div>
  )
}
