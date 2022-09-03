import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // email: '',
            // password: '',
            // firstName: '',
            // lastName: '',
            // address: ''

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

    handleAddUser = () => {
        if (this.checkValideInput())
            this.props.createNewUser(this.state);
    }

    render() {
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={"modal-user-container"} size={"lg"} >
                    <ModalHeader toggle={this.toggle}>Add a new user</ModalHeader>
                    <ModalBody>
                        {/* <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "email") }} value={this.state.email} />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type="password" onChange={(event) => { this.handleOnChangeInput(event, "password") }} value={this.state.password} />
                            </div>
                            <div className='input-container'>
                                <label>First Name</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "firstName") }} value={this.state.firstName} />
                            </div>
                            <div className='input-container'>
                                <label>Last Name</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "lastName") }} value={this.state.lastName} />
                            </div>
                            <div className='input-container max-width-input'>
                                <label>Adress</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "address") }} value={this.state.address} />
                            </div>
                        </div> */}
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
                        <Button color="primary" className='px-3' onClick={() => { this.handleAddUser() }}>Add New User</Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}


export default ModalUser;