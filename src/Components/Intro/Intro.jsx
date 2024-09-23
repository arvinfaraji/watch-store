import React from 'react'
import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Intro() {
  return (
    <section className='intro-con py-5 px-3'>
      <Container>
        <Row className='align-items-center text-center gy-5'>
          <Col className='col-12 col-md-6 intro-img img-max-display'>
            <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='img-fluid intro-watch' />
          </Col>

          <Col className='col-12 col-md-5 offset-md-1'>
            <h3 className=''>با ما در <span className='text-warning'>بهترین استایل</span> خودت باش</h3>
          </Col>

          <Col className='col-12 col-md-6 intro-img img-min-display'>
            <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='img-fluid intro-watch' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
