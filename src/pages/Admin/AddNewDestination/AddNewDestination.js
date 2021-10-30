import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewDestination = () => {
    //react hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "Open";
        fetch("http://localhost:5000/addEvent", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Event Added successFully!!");
                    reset();

                }
            })
    };
    return (
        <div className="container my-5">
            <h2 className="text-center"><i className="text-info fas fa-plus"></i> Add A New Event</h2>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" {...register("eventName", { required: true })} placeholder="Enter Event Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" {...register("location", { required: true })} placeholder="Dhaka" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" {...register("date", { required: true })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" {...register("price", { required: true })} placeholder="270" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Event Photo URL</Form.Label>
                            <Form.Control type="text" {...register("imgURL", { required: true })} placeholder="https://images.unsplash.com/photo-1576765607924-3f7b8410a787" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" {...register("description", { required: true })} placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Location Map URL (if Have)</Form.Label>
                            <Form.Control type="text" {...register("mapURL")} placeholder="Google map embed src link" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Event
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddNewDestination;