import React, {useState, useEffect} from "react";
import { Link } from"react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form, FormControl, Carousel, Button, Offcanvas, Card, Row, Col } from "react-bootstrap";
import { IoCartOutline, IoHome, IoSearchSharp  } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './HomePage.css';


function HomePage({ product, onToggleFavorite, isFavorite}){

    const [openCategory, setOpenCategory] = useState(null); // null | 'sarees' | 'kurtis' | 'kurtaSets'

  const toggleCategory = (category) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);

  };


  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow (true);


    const [images, setImages] = useState([]);

        useEffect(() => {
            axios.get("http://localhost:5000/api/images")
            .then(res => {
                setImages(res.data);
            })
            .catch(err => console.error("Error fetching images", err));
        }, []);

    
    return(
        <>
        {/** Navigation  */}

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

                                <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                                    <IoHome className="Ecommerce-navbar-link-icons "/> Home
                                </Nav.Link>

                                <Nav.Link as={Link} to="/products" className="d-flex align-items-center" >
                                    <AiOutlineProduct className="Ecommerce-navbar-link-icons"/> Products
                                </Nav.Link>

                                <Nav.Link as={Link} to="/cart"className="d-flex align-items-center" >
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
                            <h6 onClick={() => toggleCategory('kurtis')} style={{ display: "flex",justifyContent: "space-between",alignItems: "center",}}>
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
                            <h6 onClick={() => toggleCategory('kurtaSets')} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
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
                            <h6 onClick={() => toggleCategory('dupattaSets')} style={{ display: "flex",justifyContent: "space-between",alignItems: "center",}}>
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

        {/** Slide bars in Home page */}

        <div className="main-content">
            <Carousel>
            {images.map((img, index) => (
                <Carousel.Item key={index}>
                <img src={img.url} alt={`slide-${index}`} className="image" />
                </Carousel.Item>
            ))}
            </Carousel>
        </div>
        

        {/** Home page produt cards */}

        <div>
            <h3 style={{padding:'10px'}}>Products For You:</h3>
            <Row className="g-0">

                <Col xs={6} sm={4} md={4} lg={2}>
                    <Card className="Ecommerce-cards">
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61gj9veca2L._AC_UY1100_.jpg" className="Ecommerce-card-image" />
                        <div className="card-details">
                            <Card.Body>
                                <Card.Title className="Ecommerec-card-title">Half Moon Valex Unisex back Bag</Card.Title>
                                <Card.Text className="Ecommerce-card-actual-mrp">₹699 <span className="actual-price"><del>₹2599</del></span>  <span className="discount">(-72%)</span></Card.Text>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <Button className="Ecommerce-cards-button">Buy</Button>
                                    <Button className="cards-cart-button">Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col  xs={6} sm={4} md={3} lg={2}>
                    <Card className="Ecommerce-cards">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC_BLOz1pcLGDQl2rB_x5UuV3l2WLW7n-Qw&s" className="Ecommerce-card-image" />
                        <div className="card-details">
                            <Card.Body>
                                <Card.Title className="Ecommerec-card-title">Half Moon Valex Unisex back Bag</Card.Title>
                                <Card.Text className="Ecommerce-card-actual-mrp">₹699 <span className="actual-price"><del>₹2599</del></span>  <span className="discount">(-72%)</span></Card.Text>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <Button className="Ecommerce-cards-button">Buy</Button>
                                    <Button className="cards-cart-button">Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} sm={4} md={3} lg={2}>
                    <Card className="Ecommerce-cards">
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/516DYiNG+BL._AC_UL480_FMwebp_QL65_.jpg" className="Ecommerce-card-image" />
                        <div className="card-details">
                            <Card.Body>
                                <Card.Title className="Ecommerec-card-title">Half Moon Valex Unisex back Bag</Card.Title>
                                <Card.Text className="Ecommerce-card-actual-mrp">₹699 <span className="actual-price"><del>₹2599</del></span>  <span className="discount">(-72%)</span></Card.Text>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <Button className="Ecommerce-cards-button">Buy</Button>
                                    <Button className="cards-cart-button">Add to Cart</Button>
                                </div>  
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} sm={4} md={3} lg={2}>
                    <Card className="Ecommerce-cards">
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61Lw6p3a0JL._AC_UL480_FMwebp_QL65_.jpg" className="Ecommerce-card-image" />
                        <div className="card-details">
                            <Card.Body>
                                <Card.Title className="Ecommerec-card-title">Half Moon Valex Unisex back Bag</Card.Title>
                                <Card.Text className="Ecommerce-card-actual-mrp">₹699 <span className="actual-price"><del>₹2599</del></span>  <span className="discount">(-72%)</span></Card.Text>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <Button className="Ecommerce-cards-button">Buy</Button>
                                    <Button className="cards-cart-button">Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} sm={4} md={3} lg={2}>
                    <Card className="Ecommerce-cards">
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61KrBGcMdkL._SY741_.jpg" className="Ecommerce-card-image" />
                        <div className="card-details">
                            <Card.Body>
                                <Card.Title className="Ecommerec-card-title">Half Moon Valex Unisex back Bag</Card.Title>
                                <Card.Text className="Ecommerce-card-actual-mrp">₹699 <span className="actual-price"><del>₹2599</del></span>  <span className="discount">(-72%)</span></Card.Text>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <Button className="Ecommerce-cards-button">Buy</Button>
                                    <Button className="cards-cart-button">Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} sm={4} md={3} lg={2}>
                    <Card className="Ecommerce-cards">
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/417Xva6VLkL._AC_UL480_FMwebp_QL65_.jpg" className="Ecommerce-card-image" />
                        <div className="card-details">
                            <Card.Body>
                                <Card.Title className="Ecommerec-card-title">Half Moon Valex Unisex back Bag</Card.Title>
                                <Card.Text className="Ecommerce-card-actual-mrp">₹699 <span className="actual-price"><del>₹2599</del></span>  <span className="discount">(-72%)</span></Card.Text>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <Button className="Ecommerce-cards-button">Buy</Button>
                                    <Button className="cards-cart-button">Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
        
        <div>
            <Row className="g-0">
               <Col>
                    <div className="flight-tickets">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/ce3cf81edb760559.jpg?q=20" alt="" className="Ecommerce-product-adds-ticket"/>
                    </div>
                </Col>

                <Col>
                    <div className="product-add-bgcolor">
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/Kidspage/revamp/whatstheoccassion/Wedding_functions._SS980_QL85_FMpng_.png" alt="" className="Ecommerce-product-adds"/>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/Kidspage/revamp/whatstheoccassion/Tuition_Days._SS980_QL85_FMpng_.png" alt="" className="Ecommerce-product-adds" />
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/Kidspage/revamp/whatstheoccassion/Ethnic_Day._SS980_QL85_FMpng_.png" alt="" className="Ecommerce-product-adds"/>
                    </div>
                </Col>
            </Row>
        </div>
            
        

        </>
    )
}

export default HomePage