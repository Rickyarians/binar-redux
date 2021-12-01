// import logo from './logo.svg';
// import './App.css';
import {connect} from 'react-redux'
import {useEffect, useState} from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";



function Home(props) {

  const [datacat, setdatacat] = useState(null)
 
  const {productList, promoHome, addData, provinsiList, deleteData} = props
  useEffect(() => {
      console.log(productList)
      console.log(promoHome)
      console.log(provinsiList)
  })

  useEffect(() => {
    console.log(productList)
    console.log(promoHome)
}, [productList])

  const tambahData = () => {
      console.log('jalan')
        let tambahdata = {
            nama : "kaos 3"
        }
        addData(tambahdata)

  }
  return (
    <div className="App">
      {/* <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {
          productList ? productList.map((item, index) => {
              return <div>{item.nama}</div>
          }) : <></>
      }

      <button onClick={() => tambahData()}>Tambah Data</button>
      <Link to="/product">Product</Link>

      <button onClick={() => deleteData()}>Hapus</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        productList: state.productreducer.products,
        promoHome: state.productreducer.promo,
        provinsiList: state.provinsireducer.provinsilist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addData: (data) => dispatch({type: 'ADD_PRODUCT', payload: data}),
        deleteData: (data) => dispatch({type: 'DELETE_PRODUCT', payload: data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;
