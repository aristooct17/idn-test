import type { NextPage } from 'next'
import { Col, Row } from 'antd'
import { LeftOutlined, ShareAltOutlined } from '@ant-design/icons'
import styles from '../../styles/Main.module.css'

const Navbar: NextPage = () => {
    return (
        <div>
            <Row className={styles.navbar}>
                <Col xs={12} md={12} className="textLeft">
                    <div className={styles.arrowIcon}>
                        <LeftOutlined />
                    </div>
                </Col>
                <Col xs={12} md={12} className="textRight">
                    <div className={styles.shareIcon}>
                        <ShareAltOutlined />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar