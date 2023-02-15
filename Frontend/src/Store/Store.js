import {createStore,combineReducers} from "redux"

function userSection(oldData={},newData){
  if(newData.type === "LOGINDATA"){
    oldData = newData.payload
  }
  return{...oldData}
}

let allShelve = combineReducers({userSection})

let store = createStore(allShelve)
 export default store