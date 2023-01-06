import {Component} from 'react'
import UserProfile from './components/UserProfile'
import "./App.css"
const initialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:'https://res.cloudinary.com/dbfqymryx/image/upload/v1672918493/IMG_20220415_192745_svlajx.jpg',
    name: 'Shasi',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:'https://res.cloudinary.com/dbfqymryx/image/upload/v1672918677/2021-11-22-10-46-42-674_ph0s1b.jpg',
    name: 'Sree',
    role: 'Software Engineer'
  },
  {
    uniqueNo: 3,
    imageUrl:'https://res.cloudinary.com/dbfqymryx/image/upload/v1672916732/IMG_20220415_192511_fedpad.jpg',
    name: 'Chinna',
    role: 'Fullstack Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:'https://res.cloudinary.com/dbfqymryx/image/upload/v1672918685/2022-02-08-09-38-01-423_tya68w.jpg',
    name: 'Potti',
    role: 'Frontend Developer'
  }
]

class App extends Component {
    state = {
      searchInput:"",
      userDetailsList: initialuserDetailsList,
}
    onChangeSearchInput = (event) => {
        this.setState({searchInput:event.target.value})
    }

    onDeleteUser = (uniqueNo) => {
        const {userDetailsList} = this.state
       const filteredUsersData = userDetailsList.filter(
        eachUser => eachUser.uniqueNo !== uniqueNo,
       )
       this.setState({userDetailsList: filteredUsersData})
    }
    render() {
        const {searchInput,userDetailsList} = this.state
        const searchResults = userDetailsList.filter((eachUser)=>
             eachUser.name.includes(searchInput),
        )
    return(
       <div className="list-container">
        <h1 className="title">Users List</h1>
         <input type="search" value={searchInput} onChange={this.onChangeSearchInput}/>
        <ul>
         {searchResults.map((eachUser) => (
        <UserProfile
         onDeleteUser={this.onDeleteUser} 
         userDetails={eachUser} 
         key={eachUser.uniqueNo} 
         />
      ))}
    </ul>
  </div>
  )
}
}
export default App
