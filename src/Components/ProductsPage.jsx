import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar, Container, Nav, Form, FormControl, Offcanvas, Button, Card, Row, Col } from "react-bootstrap";
import { IoSearchSharp, IoHome, IoCartOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineCategory, MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../Styles/ProductsPage.css";

function ProductsPage() {
    const [show, setShow] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };


    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const scroll = (direction) => {
    if (scrollRef.current) {
        const scrollAmount = 300;
        scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
        });
    }
    }
    ;


    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/ProductPages")
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    }, []);



  return (
    <>
    <div>
        <Navbar bg="dark" fixed="top" variant="dark" expand="lg" >
                <Container fluid className="Ecommerce-navbar">
                    <Navbar.Brand className="Ecommerce-navbar-brandname">RagasMart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="Ecommerce-navbar-toggle"/>
                     <Form className="w-100 my-1 search-form-wrapper">
                            <div className="search-box-wrapper">
                                <FormControl type="search" 
                                    placeholder="Search products, Brands and More.."
                                    aria-label="Search"
                                    className="Ecommerce-navbar-search"/>
                                <IoSearchSharp  className="Ecommerce-search-icon"/>
                            </div>
                        </Form>

                    {/** Navigation links */}

                    <Navbar.Collapse id='basic-navbar-nav'>
                        <div className="d-flex justify-content-center ">
                            <Nav className="Ecommerce-navbar-link   d-flex flex-column flex-lg-row align-items-start  mt-2 gap-2 gap-lg-">

                                <Nav.Link href='Home' className="d-flex align-items-center">
                                    <IoHome className="Ecommerce-navbar-link-icons "/> Home
                                </Nav.Link>

                                <Nav.Link href="Products" className="d-flex align-items-center" >
                                    <AiOutlineProduct className="Ecommerce-navbar-link-icons"/> Products
                                </Nav.Link>

                                <Nav.Link href="Cart" className="d-flex align-items-center" >
                                    < IoCartOutline className="Ecommerce-navbar-link-icons"/> Cart
                                </Nav.Link>

                                <Nav.Link as="span" onClick={handleShow} style={{ cursor: 'pointer' }} className="d-flex align-items-center">
                                     <MdOutlineCategory className="Ecommerce-navbar-link-icons"/> Categories
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

                {/** Offcanvas button is linked with navigation*/}

            <Offcanvas show={show} onHide={handleClose}  className="custom-offcanvas">
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title ><MdOutlineCategory/> Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <Container>
                        <div >
                            <h5>Women Ethnic</h5>
                        {/* Sarees */}
                            <h6 onClick={() => toggleCategory('sarees')} style={{ display: "flex",justifyContent: "space-between",alignItems: "center", }}>
                                Sarees <MdOutlineKeyboardArrowRight/></h6>
                            {openCategory === 'sarees' && (
                            <ul>
                                <li>Silk Sarees</li>
                                <li>Banarasi Sarees</li>
                                <li>Cotton Sarees</li>
                                <li>Georegette Sarees</li>
                                <li>Chiffon Sarees</li>
                                <li>Heavy Work Sarees</li>
                                <li>Net Sarees</li>
                            </ul>
                            )}

                        {/* Kurtis */}
                            <h6 onClick={() => toggleCategory('kurtis')} style={{ display: "flex",justifyContent: "space-between",alignItems: "center", }}>
                                Kurtis <MdOutlineKeyboardArrowRight/></h6>
                            {openCategory === 'kurtis' && (
                            <ul>
                                <li>Anarkali Kurtis</li>
                                <li>Rayon Kurtis</li>
                                <li>Cotton Kurtis</li>
                                <li>Chikankari Kurtis</li>
                            </ul>
                        )}

                        {/* Kurta Sets */}
                            <h6 onClick={() => toggleCategory('kurtaSets')} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                Kurta Sets <MdOutlineKeyboardArrowRight/></h6>
                            {openCategory === 'kurtaSets' && (
                                <ul>
                                    <li>Kurta Palazzo Sets</li>
                                    <li>Rayon Kurta Sets</li>
                                    <li>Kurta Pant Sets</li>
                                    <li>Cotton Kurta Sets</li>
                                    <li>Sharara Sets</li>
                                </ul>
                            )}
                        
                        {/* Dupatta Sets */}
                            <h6 onClick={() => toggleCategory('dupattaSets')} style={{ display: "flex",justifyContent: "space-between",alignItems: "center", }}>
                                Sarees <MdOutlineKeyboardArrowRight/></h6>
                            {openCategory === 'dupattaSets' && (
                            <ul>
                                <li>Rayon Sets</li>
                                <li>printed Sets</li>
                                <li>Cotton Sets</li>
                            </ul>
                            )}

                        </div>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </div>

        
            <div className="scroll-wrapper">
            <button className="arrow left" onClick={() => scroll('left')}><GoArrowLeft /></button>
            
            <div className="image-scroll-container" ref={scrollRef}>
                <div onClick={() => navigate("/sarees")} style={{cursor:"pointer"}}>
                    <img src="/Sarees.png" alt="Sarees" className="product-items-images" />
                </div>

                <div onClick={() => navigate("/westernwear")} style={{cursor:"pointer"}}>
                    <img src="/WesternWear.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/kurtis")} style={{cursor:"pointer"}}>
                    <img src="/Kurtis.png" alt="" className="product-items-images"/>
                </div>

                <div onClick={() => navigate("/mens")} style={{cursor:"pointer"}}>
                    <img src="/Mens.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/babygirls")} style={{cursor:"pointer"}}>
                    <img src="/Babygirls.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/babyboys")} style={{cursor:"pointer"}}>
                    <img src="/Babyboys.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/jewelry")} style={{cursor:"pointer"}}>
                    <img src="/Jewelry.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/shoes_bags")} style={{cursor:"pointer"}}>
                    <img src="/Shoes_bags.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/health_beauty")} style={{cursor:"pointer"}} >
                    <img src="/Health_beauty.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/homeapplaienses")} style={{cursor:"pointer"}}>
                    <img src="/HomeApplaienses.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/homedecor")} style={{cursor:"pointer"}}>
                    <img src="/Homedecor.png" alt="" className="product-items-images"/>
                </div>

                <div onClick={() => navigate("/musical_instruments")} style={{cursor:"pointer"}}>
                    <img src="/Musical_Instruments.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/sports_fitness")} style={{cursor:"pointer"}}>
                    <img src="/Sports&fitness.png" alt="" className="product-items-images"/>
                </div>
                
                <div onClick={() => navigate("/watches")} style={{cursor:"pointer"}}>
                    <img src="/Watches.png" alt="" className="product-items-images"/>
                </div >
                
                <div onClick={() => navigate("/book")} style={{cursor:"pointer"}}>
                    <img src="/Book.png" alt="" className="product-items-images"/>
                </div>
            </div>

            <button className="arrow right" onClick={() => scroll('right')}><GoArrowRight/></button>
        </div>

         <div>
            <h2>Suggestion For You</h2>
            <Row className="g-0">
                {products.map((product, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2}>
                    <Card className="Ecommerce-cards">
                        <Card.Img variant="top" src={product.image} className="Ecommerce-card-image" />
                        <div className="card-details">
                        <Card.Body>
                            <Card.Title className="Ecommerec-card-title">{product.title}</Card.Title>
                            <Card.Text className="Ecommerce-card-actual-mrp">
                            ₹{product.price} <span className="actual-price"><del>₹{product.originalPrice}</del></span>
                            <span className="discount">{product.discount}</span>
                            </Card.Text>
                            <div style={{ display: 'flex', gap: '10px' }}>
                            <Button className="Ecommerce-cards-button">Buy</Button>
                            <Button className="cards-cart-button">Add to Cart</Button>
                            </div>
                        </Card.Body>
                        </div>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>

        

    
    </>
  );
}

export default ProductsPage;
