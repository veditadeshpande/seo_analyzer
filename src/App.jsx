import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/header/Header'
import Footer from './assets/footer/Footer'
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import AlgoBox from './assets/main_page/AlgoBox'
import { Paper } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    
<>
    <Header></Header>
    <AlgoBox></AlgoBox>
    
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* For variant="text", adjust the height via font-size */}

{/* For other variants, adjust the size with `width` and `height` */}

      <Footer className="footer"></Footer>
 
    </>
  )
}

export default App
