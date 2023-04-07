import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link href = "/">Allan Kiche</Link>
          </div>
          <div className="links">
            <Link href = '/about'></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
