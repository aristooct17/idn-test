import type { NextPage } from 'next'
import Image from 'next/image'
import { Col, Row, Button } from 'antd'
import styles from '../../styles/Main.module.css'

import profilePict from '../../public/img/img-profile.png'

const Profile: NextPage = () => {
    return (
        <div>
            <Row>
                <Col xs={7} md={7}>
                    <div className={styles.imgProfile}>
                        <Image 
                            src={profilePict}
                            alt="Picture of the Author"
                            width={80}
                            height={80}
                        />  
                    </div>
                </Col>
                <Col xs={17} md={17}>
                    <Row>
                        <Col>
                            <span className={styles.lightTitle}>Verified Creator</span>
                            <p className={styles.boldTitle}>Samantha William</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8} md={8}>
                            <span className={styles.lightTitle}>Following</span>
                            <p className={styles.boldTitle}>9.998</p>
                        </Col>
                        <Col xs={8} md={8}>
                            <span className={styles.lightTitle}>Followers</span>
                            <p className={styles.boldTitle}>99.8k</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <p className={styles.normalDesc}>
                    Yuk follow aku biar kita streaming game bareng setiap hari senin & jumat jam 10 AM - 3 PM. 
                    Jangan lupa follow IG aku juga ya @Sam_will
                </p>
                <div>
                    <Button type="primary" block className={styles.btnFollow}>
                        Follow
                    </Button>
                </div>
            </Row>
        </div>
    )
}

export default Profile