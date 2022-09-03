import React, { Component } from 'react'
import ModalUser from './ModalUser'
import ModalEditUser from './ModalEditUser'
import axios from 'axios'
import "./HomePage.scss"

class HomePage extends Component {
  state = {
    items: [],
    isOpenModalUser: false,
    isOpenEditUser: false,
    userEdit: {}
  }

  getItems() {
    axios.get('http://localhost:8000/home/data')
      .then(response => {
        console.log(response)
        this.setState({
          items: response.data.data,
        })
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }




  async componentDidMount() {
    this.getItems();
  }

  getAllUsersFromReact = async () => {
    // let response = await getAllUsers("All");
    // if (response && response.errCode === 0) {
    //   this.setState({
    //     arrUsers: response.users
    //   })
    // }
  }
  handleBtnAddNewUser = () => {
    this.setState({
      isOpenModalUser: true
    })
  }

  handleToggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser
    })
    console.log(this.state.isOpenModalUser)
  }

  handleToggleEditModal = () => {
    this.setState({
      isOpenEditUser: !this.state.isOpenEditUser
    })
    console.log(this.state.isOpenEditUser)
  }

  handleCreateNewUser = async (data) => {

    axios.post('http://localhost:8000/home/addData', data)
      .then(response => {
        console.log(response)
        this.getItems();
        this.setState({
          isOpenModalUser: false,
        })
      }
      )
      .catch(function (error) {
        console.log(error);
      });

  }

  handleDeteleUser = async (user) => {
    console.log(user)
    axios.delete(`http://localhost:8000/home/deleteData/?IDCard=${user.IDCard}`)
      .then(response => {
        console.log(response)
        this.getItems();
        // this.setState({
        //   isOpenModalUser: false,
        // })
      }
      )
      .catch(function (error) {
        console.log(error);
      });

  }

  handleEditUser = async (user) => {
    // console.log(this.state.isOpenEditUser)
    console.log(user.IDCard)
    try {
      this.setState({
        isOpenEditUser: true,
        userEdit: user,
      })

    }
    catch (e) {
      console.log(e)
    }
  }

  handleLogout = () => {
    window.location.href = 'http://localhost:3000/login'
  }
  doEditUser = async (user) => {
    // console.log(user.userID)
    axios.put(`http://localhost:8000/home/updateData/?IDCard=${user.IDCard}`, user)
      .then(response => {
        console.log(response)
        this.getItems();
        this.setState({
          isOpenEditUser: false
        })
      }
      )
      .catch(function (error) {
        console.log(error);
      });


  }

  render() {
    return (
      <div className='users-container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">AIPhotonic</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">History</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Online</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Offline</a>
              </li> */}
            </ul>
          </div>
          <button className="btn btn-default" onClick={this.handleLogout}>Logout</button>
        </nav>
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.handleToggleUserModal}
          createNewUser={this.handleCreateNewUser}
        />
        {
          this.state.isOpenEditUser &&
          <ModalEditUser
            isOpen={this.state.isOpenEditUser}
            toggleFromParent={this.handleToggleEditModal}
            currentUser={this.state.userEdit}
            editUser={this.doEditUser}
          />
        }

        <div className='mx-1'>
          <button className='btn btn-primary px-3'
            onClick={() => { this.handleBtnAddNewUser() }}
          ><i className="fas fa-plus"></i>Add New User</button>
        </div>
        <div className='users-table mt-3 mx-1'>
          <table id="customers">
            <tbody>
              <tr>
                <th>IDCard</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
              {this.state.items && this.state.items.map((item, index) => {
                return (
                  <tr>
                    <td>{item.IDCard}</td>
                    <td>{item.FullName}</td>
                    <td>{item.Email}</td>
                    <td>{item.Address}</td>
                    <td>
                      <button className='btn-edit' onClick={() => { this.handleEditUser(item) }}><i className="fas fa-pencil-alt"></i></button>
                      <button className='btn-delete' onClick={() => { this.handleDeteleUser(item) }}><i className="fas fa-trash"></i></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div >
    )
  }
}

export default HomePage
