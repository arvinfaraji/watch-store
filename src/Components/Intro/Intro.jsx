import React, { useEffect } from 'react'
import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Intro() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section className='intro-con py-5 px-3'>
      <Container>
        <Row className='align-items-center text-center gy-5'>
          <Col className='col-12 col-md-6 intro-img img-max-display' data-aos='fade-left'>
            <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='img-fluid intro-watch' />
          </Col>

          <Col className='col-12 col-md-5 offset-md-1'>
            <h3 className=''>با ما در <span className='text-warning'>بهترین استایل</span> خودت باش</h3>
          </Col>

          <Col className='col-12 col-md-6 intro-img img-min-display' data-aos='fade-left'>
            <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='img-fluid intro-watch' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
