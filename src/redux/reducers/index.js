import { combineReducers } from "redux";
import productreducer from './../reducers/product'
import provinsireducer from './../reducers/provinsi'
import personreducer from "./../reducers/person";

export default combineReducers({
    productreducer,
    provinsireducer,
    personreducer
})