import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
// Icons 
import { GiWatch } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TbShoppingCart } from "react-icons/tb";
import { TbDeviceWatchStar } from "react-icons/tb";


export default function Footer() {
    return (
        <footer className='py-5 px-3'>
            <Container>
                <Row className='mt-5 gy-5 align-items-center'>
                    <hr />
                    <Col className='col-12 col-md-4'>
                        <h5>ساعت رولکس</h5>
                        <div className='py-3 pt-4'>
                            <GiWatch className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>همه ساعت ها</a>
                        </div>
                        <div className='py-3'>
                            <CgProfile className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>پروفایل من</a>
                        </div>
                        <div className='py-3'>
                            <TbShoppingCart className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>سبد خرید</a>
                        </div>
                        <div className='py-3'>
                            <TbDeviceWatchStar className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>جدیدترین ها</a>
                        </div>
                    </Col>

                    <Col className='col-12 col-md-4'>
                        <h5>درباره ما</h5>
                        <p className='text-justify py-4'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                        </p>
                    </Col>

                    <Col className='col-12 col-md-4'>
                        <h5>ارتباط با ما</h5>
                        <div className='py-3 pt-4'>
                            <p>شماره موبایل : <span>09149812128</span></p>
                        </div>
                        <div className='py-3'>
                            <p>ایمیل : <span>arvinfaraji0086@gmail.com</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
