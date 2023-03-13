import axios from 'axios'
import { useEffect } from 'react'
import './App.css'
import Card from './components/Card'


function App() {


  const getData = () => {
    const url = `http://10.10.60.167/jsonrpc/web.status`
    axios.get(url)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">
      <nav className="navbar bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            SPR Mérida <span className="text-primary">Monitor Eb/No</span>
          </a>
        </div>
      </nav>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col-lg-3 col-sm-6 bg-success">
          <Card />
          </div>
          <div class="col-lg-3 col-sm-6 bg-warning">
          <Card />
          </div>
          <div class="col-lg-3 col-sm-6 bg-danger">
          <Card />
          </div>
          <div class="col-lg-3 col-sm-6 bg-success">
          <Card />
          </div>
          <div class="col-lg-3 col-sm-6 bg-warning">
          <Card />
          </div>
          <div class="col-lg-3 col-sm-6 bg-danger">
          <Card />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
