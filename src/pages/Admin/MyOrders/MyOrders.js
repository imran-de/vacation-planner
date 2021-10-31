import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    //collect user
    const { user } = useAuth();
    //preloader state
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://mysterious-island-52828.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLoading(false);
            })
    }, [user.email])

    //handle delete
    const handleDelete = orderId => {
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
    //preloader 
    if (isLoading) {
        return <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className="container">
            <h2 className="pt-5 pb-2">OrderList:</h2>
            {orders.length > 0 ? <>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Event Name</th>
                            <th>Contact</th>
                            <th>Adult</th>
                            <th>Chilled</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td><Link to={`/destination/${order?.confirmEventNo}/${order?.eventName}`}>{order.eventName}</Link></td>
                                <td>{order.contactNumber}</td>
                                <td>{order.person}</td>
                                <td>{order.chilled}</td>
                                <td><button className={order.status === "pending" ? "btn btn-warning" : "btn btn-success"}>{order.status}</button></td>
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

export default MyOrders;