import type { NextPage } from 'next'
import Image from 'next/image'
import { Col, Row, Tabs } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'
import styles from '../../styles/Main.module.css'

import imageBerita1 from '../../public/img/berita-img-1.png'
import imageBerita2 from '../../public/img/berita-img-2.png'
import imageBerita3 from '../../public/img/berita-img-3.png'
import imageBerita4 from '../../public/img/berita-img-4.png'
import imageBerita5 from '../../public/img/berita-img-5.png'
import imageLivestream1 from '../../public/img/livestream-img-1.png'
import imageLivestream2 from '../../public/img/livestream-img-2.png'
import imageLivestream3 from '../../public/img/livestream-img-3.png'
import imageLivestream4 from '../../public/img/livestream-img-4.png'
import imageQuiz1 from '../../public/img/quiz-img-1.png'
import imageQuiz2 from '../../public/img/quiz-img-2.png'
import imageQuiz3 from '../../public/img/quiz-img-3.png'
import imageQuiz4 from '../../public/img/quiz-img-4.png'
import imageQuiz5 from '../../public/img/quiz-img-5.png'
import imageQuiz6 from '../../public/img/quiz-img-6.png'
import imageQuiz7 from '../../public/img/quiz-img-7.png'
import imageQuiz8 from '../../public/img/quiz-img-8.png'


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
                        <Row className={styles.spaceThumbnail}>
                            <Col xs={15} md={15}>
                                <span className={styles.lightTitle}>20 January 2022, 09:56</span>
                                <p className={styles.boldTitle}>
                                    Ini kunci untuk terjun ke NFT, Jangan Asal Ikut-ikutan!
                                </p>
                            </Col>
                            <Col xs={9} md={9}>
                                <div className="textRight">
                                    <Image
                                        src={imageBerita1}
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

                        <Row className={styles.spaceThumbnail}>
                            <Col xs={15} md={15}>
                                <span className={styles.lightTitle}>20 January 2022, 09:56</span>
                                <p className={styles.boldTitle}>
                                    Salip Astra, kapitalisasi pasar Bank Jago merangsek ke lima besar
                                </p>
                            </Col>
                            <Col xs={9} md={9}>
                                <div className="textRight">
                                    <Image
                                        src={imageBerita2}
                                        alt="Berita Image 2"
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

                        <Row className={styles.spaceThumbnail}>
                            <Col xs={15} md={15}>
                                <span className={styles.lightTitle}>20 January 2022, 09:56</span>
                                <p className={styles.boldTitle}>
                                    Insecure: Jenis, Penyebab, Faktor Risiko, dan Penanganan
                                </p>
                            </Col>
                            <Col xs={9} md={9}>
                                <div className="textRight">
                                    <Image
                                        src={imageBerita3}
                                        alt="Berita Image 3"
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

                        <Row className={styles.spaceThumbnail}>
                            <Col xs={15} md={15}>
                                <span className={styles.lightTitle}>20 January 2022, 09:56</span>
                                <p className={styles.boldTitle}>
                                    Ini 3 tema ekonomi digital yang diusung di G20 Presiden Indonesia
                                </p>
                            </Col>
                            <Col xs={9} md={9}>
                                <div className="textRight">
                                    <Image
                                        src={imageBerita4}
                                        alt="Berita Image 4"
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

                        <Row className={styles.spaceThumbnail}>
                            <Col xs={15} md={15}>
                                <span className={styles.lightTitle}>20 January 2022, 09:56</span>
                                <p className={styles.boldTitle}>
                                    Panggil para dewa, umat Tionghoa terbangkan uang arwah di gedung rasa
                                </p>
                            </Col>
                            <Col xs={9} md={9}>
                                <div className="textRight">
                                    <Image
                                        src={imageBerita5}
                                        alt="Berita Image 5"
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
                        <Row gutter={20}>
                            <Col span={12} className={styles.spaceThumbnail}>
                                <div
                                    style={{
                                        backgroundImage: `url(${imageLivestream1.src})`,
                                        width: 200,
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
                            <Col span={12} className={styles.spaceThumbnail}>
                                <div
                                    style={{
                                        backgroundImage: `url(${imageLivestream2.src})`,
                                        width: 200,
                                        height: 320,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}
                                >
                                    <span className={styles.statusLivestream}>Terjadwal</span>
                                    <p className={styles.boldTitleLivestream}>Ngelucu dulu ah biar seneng gitu</p>
                                    <p className={styles.lightTitleLivestream}>Comedy</p>
                                </div>
                            </Col>
                            <Col span={12} className={styles.spaceThumbnail}>
                                <div
                                    style={{
                                        backgroundImage: `url(${imageLivestream3.src})`,
                                        width: 200,
                                        height: 320,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}
                                >
                                    <span className={styles.statusLivestream}>Terjadwal</span>
                                    <p className={styles.boldTitleLivestream}>Curhat yuk sapa tau bisa lega</p>
                                    <p className={styles.lightTitleLivestream}>Inspiration</p>
                                </div>
                            </Col>
                            <Col span={12} className={styles.spaceThumbnail}>
                                <div
                                    style={{
                                        backgroundImage: `url(${imageLivestream4.src})`,
                                        width: 200,
                                        height: 320,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}
                                >
                                    <span className={styles.statusLivestream}>Terjadwal</span>
                                    <p className={styles.boldTitleLivestream}>Cobain Roblox bareng yuk</p>
                                    <p className={styles.lightTitleLivestream}>Game</p>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<div className={styles.widthTab}>Quiz</div>} key="3">
                        <Row>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz1}
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
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz2}
                                    alt="Quiz Image 2"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Dari cita-cita masa kecil, kami tahu apa rahasi terdalammu
                                </p>
                                <span className={styles.lightTitle}>
                                    11.234 views
                                </span>
                            </Col>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz3}
                                    alt="Quiz Image 3"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Kuis gambar ini bisa ungkaop apa ranah profesimu
                                </p>
                                <span className={styles.lightTitle}>
                                    11.234 views
                                </span>
                            </Col>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz4}
                                    alt="Quiz Image 4"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Dari golongan darah, kamu bakal jadi bridesmaid
                                </p>
                                <span className={styles.lightTitle}>
                                    11.234 views
                                </span>
                            </Col>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz5}
                                    alt="Quiz Image 5"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Dari drama korea Bae Suzy, kami tahu wisata Honeymoon
                                </p>
                                <span className={styles.lightTitle}>
                                    11.234 views
                                </span>
                            </Col>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz6}
                                    alt="Quiz Image 6"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Dari tipe cowok idaman, kami tahu member TXT yang...
                                </p>
                                <span className={styles.lightTitle}>
                                    11.234 views
                                </span>
                            </Col>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz7}
                                    alt="Quiz Image 7"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Dari tanggal kelahirannya, kami tahu alasan pasangan...
                                </p>
                                <span className={styles.lightTitle}>
                                    11.234 views
                                </span>
                            </Col>
                            <Col xs={12} md={12} className={styles.spaceThumbnail}>
                                <Image
                                    src={imageQuiz8}
                                    alt="Quiz Image 8"
                                    width={200}
                                    height={200}
                                />
                                <span className={styles.lightTitle}>Education</span>
                                <p className={styles.boldTitle}>
                                    Antara Bright dan Win, ini teman sebangkumu berda...
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