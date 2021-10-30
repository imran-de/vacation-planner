import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundImage: "url('https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2019/12/ContactUsBanner.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "300px" }}>
                <h2 className="fw-bold">Contact Us</h2>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="py-4"> <span className="text-info">Vacation Care</span> is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide, or just have a question for us, please fill up the Form given below and we will get back to you.</p>
                    </div>
                </div>
                {/* form */}
                <div className="row mb-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <img src="https://www.renaissancecollege.co.za/wp-content/uploads/2018/04/ContactUs2.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 -flex align-items-center p-4" style={{ backgroundColor: "#fafafa" }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-bold">Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-bold">Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-bold">Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-bold">Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="Contact Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="fw-bold">Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" className="px-5" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

                <div className="row">
                    <address>
                        <h4>House-06, Gate, Dhaka-3100</h4>
                        <h5>Phone: +8801926294263</h5>
                        <h5>Email: stimran4405@gmail.com</h5>
                    </address>
                </div>
                <div className="row mb-5">
                    <iframe title={Math.random()} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.6048602935116!2d91.9297555509877!3d24.911456483951607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750533ee204b567%3A0xf1d59af2f9c149ef!2sSylhet%20Sadar%20Post%20Office!5e0!3m2!1sen!2sbd!4v1634653104672!5m2!1sen!2sbd" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;