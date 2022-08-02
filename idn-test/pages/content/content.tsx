import type { NextPage } from 'next'
import Image from 'next/image'
import { Col, Row, Tabs } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'
import styles from '../../styles/Main.module.css'

import imageBerita from '../../public/img/berita-img-1.png'
import imageQuiz from '../../public/img/quiz-img-1.png'
import imageLivestream from '../../public/img/livestream-img-1.png'

const { TabPane } = Tabs;
const onChange = (key: string) => {
    console.log(key);
};

const ContenText: NextPage = () => {
    return (
        <div className={styles.contentContainer}>
            <Row>
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab={<div className={styles.widthTab}>Berita</div>} key="1">
                        <Row>
                            <Col xs={15} md={15}>
                                <span className={styles.lightTitle}>20 January 2022, 09:56</span>
                                <p className={styles.boldTitle}>
                                    Ini kunci untuk terjun ke NFT, Jangan Asal Ikut-ikutan!
                                </p>
                            </Col>
                            <Col xs={9} md={9}>
                                <div className="textRight">
                                    <Image
                                        src={imageBerita}
                                        alt="Berita Image 1"
                                        width='100%'
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={15} md={15}>
                                <span className={styles.lightTitle}>Bisnis</span>
                            </Col>
                            <Col xs={9} md={9}>
                                <div className={styles.shareIconContent}>
                                    <ShareAltOutlined />
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<div className={styles.widthTab}>Livestream</div>} key="2">
                        <Col xs={12} md={12}>
                        <div
                            style={{
                                backgroundImage: `url(${imageLivestream.src})`,
                                width: 216,
                                height: 320,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}
                        >
                            <span className={styles.statusLivestream}>Terjadwal</span>
                            <p className={styles.boldTitleLivestream}>Nyanyi-nyanyi malem enak nih</p>
                            <p className={styles.lightTitleLivestream}>Music</p>
                        </div>
                        </Col>
                    </TabPane>
                    <TabPane tab={<div className={styles.widthTab}>Quiz</div>} key="3">
                        <Row>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz}
                                    alt="Quiz Image 1"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Antara Victor dan Alden MCI 9, kami tahu siapa yang Na...
                                </p>
                                <span className={styles.lightTitle}>
                                    11.234 views
                                </span>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Row>
        </div>
    )
}

export default ContenText