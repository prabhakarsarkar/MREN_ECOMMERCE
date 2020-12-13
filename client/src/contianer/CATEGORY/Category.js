import React from 'react'
// import Navbar1 from '../../compoents/Navbar1'
import {Dropdown} from "react-bootstrap"

const BookCategory = () => {


    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </>
    )
}

export default BookCategory