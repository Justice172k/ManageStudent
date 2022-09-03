import React, { Component } from 'react';

import _ from 'lodash'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IDCard: '',
            FullName: '',
            Gender: '',
            DateOfBirth: '',
            StudentCode: '',
            Password: '',
            University: '',
            Department: '',
            PhoneNumber: '',
            Email: '',
            Address: '',
            Position: ''
        }
    }


    componentDidMount() {
        let user = this.props.currentUser;
        // console.log(user)
        if (user && !_.isEmpty(user)) {
            this.setState({
                // userID: user.userID,
                // email: user.email,
                // password: 'hardcode',
                // firstName: user.firstName,
                // lastName: user.lastName,
                // address: user.address

                IDCard: user.IDCard,
                FullName: user.FullName,
                Gender: user.Gender,
                DateOfBirth: user.DateOfBirth,
                StudentCode: user.StudentCode,
                Password: user.Password,
                University: user.University,
                Department: user.Department,
                PhoneNumber: user.PhoneNumber,
                Email: user.Email,
                Address: user.Address,
                Position: user.Position
            })
        }
        // this.setState({
        //     id: user.id,
        //     email: user.email,
        //     password: 'hardcode',
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     address: user.address
        // })
    }

    toggle = () => { this.props.toggleFromParent() }

    handleOnChangeInput = (event, nameState) => {
        let copyState = { ...this.state };
        copyState[nameState] = event.target.value;
        this.setState({
            ...copyState
        })
        // }, () => { console.log('check state:', this.state) }) // nen dung call back function de tranh bat dong bo
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['IDCard',
            'FullName',
            'Gender',
            'DateOfBirth',
            'StudentCode',
            'Password',
            'University',
            'Department',
            'PhoneNumber',
            'Email',
            'Address',
            'Position'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter:' + arrInput[i])
                break;
            }
        }
        return isValid
    }

    handleSaveUser = () => {
        if (this.checkValideInput())
            this.props.editUser(this.state);
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={"modal-user-container"} size={"lg"} >
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>IDCard</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "IDCard") }} value={this.state.IDCard} />
                            </div>
                            <div className='input-container'>
                                <label>FullName</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "FullName") }} value={this.state.FullName} />
                            </div>
                            <div className='input-container'>
                                <label>Gender</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "Gender"); }} value={this.state.Gender} />
                            </div>
                            <div className='input-container'>
                                <label>Date Of Birth</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "DateOfBirth") }} value={this.state.DateOfBirth} />
                            </div>
                            <div className='input-container'>
                                <label>Student Code</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "StudentCode") }} value={this.state.StudentCode} />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type="password" onChange={(event) => { this.handleOnChangeInput(event, "Password") }} value={this.state.Password} />
                            </div>
                            <div className='input-container'>
                                <label>University</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "University") }} value={this.state.University} />
                            </div>
                            <div className='input-container'>
                                <label>Department</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "Department") }} value={this.state.Department} />
                            </div>
                            <div className='input-container'>
                                <label>Phone Number</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "PhoneNumber"); }} value={this.state.PhoneNumber} />
                            </div>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "Email") }} value={this.state.Email} />
                            </div>
                            <div className='input-container'>
                                <label>Address</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "Address") }} value={this.state.Address} />
                            </div>
                            <div className='input-container'>
                                <label>Position</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "Position") }} value={this.state.Position} />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>Save Changes</Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}


export default ModalEditUser;