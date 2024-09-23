import React, { useEffect } from 'react'
import './WatchModels.css'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function WatchModels() {

    useEffect(() => {
        Aos.init()
      }, [])

    return (
        <section className='py-5 px-3'>
            <Container fluid>
                <h3 className='text-center'>چه مدل ساعتی میخوای ؟</h3>
                <Row className=' mt-5' data-aos='fade-in'>
                    <div className='carousel'>
                        <div className='warp'>
                        <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='watch-model-img' />
                        <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='watch-model-img' />
                        <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='watch-model-img' />
                        <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='watch-model-img' />
                        <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='watch-model-img' />
                        <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='watch-model-img' />
                        <img src='images/rolex-datejust-rolex-submariner-watch-rolex-sea-dweller-rolex-watch-male-table-removebg.png' alt='' className='watch-model-img' />
                        </div>
                    </div>

                </Row>
            </Container>
        </section>
    )
}
