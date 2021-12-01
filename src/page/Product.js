// import logo from './logo.svg';
// import './App.css';
import {connect} from 'react-redux'
import {useEffect} from 'react'
import * as API from '../actions/person';

function Product(props) {

  const {getAllPerson,  datatest} = props
  useEffect(() => {
    //   console.log(productList)
      getAllPerson()
    //   console.log('ini datanya', datatest)
  }, [])
  return (
    <div className="App">
      {
         datatest ? datatest.persons.map((item, index) => {
              return <div>{item.name}</div>
          }) : <></>
      }
    </div>
  );
}

const mapStateToProps = state => ({
    datatest: state.personreducer
  })
  

  const mapDispatchToProps = {
    getAllPerson: API.getAllPerson,
    addPerson: API.addPerson
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Product)

// export default Home;
