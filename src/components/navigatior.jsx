import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faCompass } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/navigatior.scss';

function Navigator() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-light overwrite-nav" style={{padding: '0rem'}}>
                <div className={styles.navigatior}>
                    <a href="/">
                        <img src="https://5xruby.tw/assets/images/navbar/logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse navbar-expand-md navbar-expand-lg navbar-expand-xl" id="mobile-dropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item text-center">
                                <a className="nav-link" href="https://iamcoding.tw/" target="_blank" rel="noopener noreferrer">
                                    <span style={{fontSize: '1em'}}><FontAwesomeIcon icon={faGem} /></span>
                                    線上課程
                                </a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="https://astro.5xruby.tw/" target="_blank" rel="noopener noreferrer">
                                    <span style={{fontSize: '.9em'}}><FontAwesomeIcon icon={faCompass} /></span>
                                    ASTRO Camp
                                    <span className={styles.tag}>報名優惠中</span>
                                </a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="/talks">短期課程</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="https://dev.5xruby.tw">專案開發</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="/training">企業代訓</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link " href="/space">空間租借</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link " href="/posts">最新消息</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigator;
