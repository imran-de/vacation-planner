import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [statusUpdate, setStatusUpdate] = useState(false);
    //collect all data from mongodb
    useEffect(() => {
        fetch('https://mysterious-island-52828.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [statusUpdate])

    //handle status
    const handleStatus = (orderId, currentStatus) => {
        const response = window.confirm("are your sure to change status?")
        if (response) {
            setStatusUpdate(false);
            fetch(`https://mysterious-island-52828.herokuapp.com/updateStatus/${orderId}/${currentStatus}`, {
                method: 'PUT',
                headers: { "content-type": "application/json" },
                body: "",
            }).then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        setStatusUpdate(true);
                        alert("Hurry! The event status modify successfully!!!")
                    }
                })
        }
    }

    //handle delete
    const handleDelete = (orderId) => {
        const response = window.confirm(`Are you sure to delete? Remember it you can't rollback it`)
        if (response) {
            fetch(`https://mysterious-island-52828.herokuapp.com/orderDelete/${orderId}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: "",
            }).then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Deleted Item successfully!!")
                        const existingEvent = orders.filter(order => order._id !== orderId);
                        setOrders(existingEvent);
                    }
                })
        }

    }

    return (
        <div className="container">
            <div className="pt-5 pb-2 d-flex justify-content-between">
                <h2 className="">Manage All Orders:</h2>
                <h4>Total orders: <span className="text-primary">{orders.length}</span></h4>
            </div>
            {orders.length > 0 ? <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Event Name</th>
                            <th>Contact</th>
                            <th>Email/Username</th>
                            <th>Adult</th>
                            <th>Chilled</th>
                            <th>Change Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td><Link to={`/destination/${order?.confirmEventNo}/${order?.eventName}`}>{order.eventName}</Link></td>
                                <td>{order.contactNumber}</td>
                                <td>{order.email}</td>
                                <td>{order.person}</td>
                                <td>{order.chilled}</td>
                                <td><button onClick={() => handleStatus(order._id, order.status)} className={order.status === "pending" ? "btn btn-warning" : "btn btn-success"}>{order.status}</button></td>
                                <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </>
                :
                <h1>Your cart is empty!</h1>
            }
        </div>
    );
};

export default ManageAllOrders;