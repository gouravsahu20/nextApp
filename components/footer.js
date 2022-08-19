import React from 'react'
// import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <a
          href="https://codeholic.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            {/* <Image src="/codeholic.png" alt="Codeholi" width={30} height={30} /> */}
            <img src="/codeholic.png" alt="Codeholi" width={30} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Footer
