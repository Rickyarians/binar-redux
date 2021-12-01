// import logo from './logo.svg';
// import './App.css';
import {connect} from 'react-redux'
import {useEffect} from 'react'


function FAQ(props) {

  const {productList} = props
  useEffect(() => {
      console.log(productList)
  })
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload. halaman produk
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        productList: state.productreducer.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ)

// export default Home;
