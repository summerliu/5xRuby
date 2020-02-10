import React from 'react';
import styles from './styles/footer.scss';

function Footer() {
    return (
        <div className={styles.footer, "overwrite-footer light-grey-bg mt-5"}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <a href="/press" className="d-block mb-3 press-img"><img src="https://5xruby.tw/assets/images/footer/press-img-3161693e.png" title="媒體報導" alt="媒體報導"/></a>
                        <a href="https://www.cakeresume.com/jobs" className="d-block cakeresume press-img" target="_blank"><img src="https://5xruby.tw/assets/images/footer/cakeresume-8938f367.png" title="CakeResume 找工作" alt="CakeResume 找工作" style={{ maxWidth: '180px', marginBottom: '10px', paddingRight: '6px' }}/><span className="text-muted">找工作</span></a>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="row">
                            <div className="col-12 mt-3 mt-md-0">
                                <div className="footer-nav">
                                    <h5><a href="/about">關於五倍紅寶石</a></h5>
                                    <h5><a href="/press">媒體報導</a></h5>
                                    <h5><a href="/members">團隊成員</a></h5>
                                    <h5><a href="/contacts">聯絡詢價</a></h5>
                                    <h5><a href="/faq">常見問題</a></h5>
                                    <h5><a href="/jobs">工作機會</a></h5>
                                    <h5><a target="_blank" href="https://github.com/5xRuby">開源專案</a></h5>
                                    <h5><a href="/privacy-policy">隱私權條款</a></h5>
                                    <h5><a href="/terms-of-service">服務條款</a></h5>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="row">
                                  <div className="col-12 col-md-4 col-xl-3">
                                      <div className="contact-info">
                                            <strong className="large text-danger">02-2331-5247</strong>
                                            <br/>
                                            <small>Mon - Fri / 09:30 - 22:00</small>
                                            <br/>
                                            <a href="https://www.facebook.com/5xruby" target="_blank"><i className="media-icon fab    fa-facebook-f"></    i></    a>
                                            <a href="https://twitter.com/5xruby" target="_blank"><i className="media-icon fab fa-twitter" aria-hidden="true"></i></a>
                                            <a href="https://github.com/5xruby" target="_blank"><i className="media-icon fab fa-github" aria-hidden="true"></ i></a>
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-8 col-xl-9 mt-3 mt-md-0">
                                      <div className="mail-address">
                                            <p>有任何問題？</p>
                                            <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
                                            <br/>
                                            <p>地址： <a target="_blank" href="https://goo.gl/lz5v93">10046 台北市中正區衡陽路 7 號 5 樓</a></p>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-info text-center">
                            <p>© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
                            <p>台北市短期補習班立案 第 7594 號</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrollup to-top text-center" id="scrTop">
                <i className="fa fa-angle-up" id="scrUp" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Footer;