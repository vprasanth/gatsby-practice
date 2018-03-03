import React from "react"
import Link from "gatsby-link"

export default () => 
  <div style={{ color: 'tomato' }}>
    <h1>Hello world!</h1>
    <p>Hello Gatsby!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div>
      <Link to="page-2">Link</Link>
    </div>
  </div>
