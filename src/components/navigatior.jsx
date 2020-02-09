import React from 'react';
import styles from './styles/navigatior.scss';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faCompass } from '@fortawesome/free-solid-svg-icons';

function Navigator(props) {
    return (
        <div className={styles.navigatior}>
            <a href="/">
                <img src='https://5xruby.tw/assets/images/navbar/logo-c473f739.png' alt="網頁設計前後端課程 | 五倍紅寶石"/>
            </a>

            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}

            {/* collapse navbar-collapse */}
            <div className="navbar-expand-md navbar-expand-lg navbar-expand-xl" id="mobile-dropdown">
                <ul className="navbar-nav">
                    <li className="nav-item text-center">
                        <a className="nav-link" href="https://iamcoding.tw/" target="_blank">
                            <span style={{fontSize: '1em'}}><FontAwesomeIcon icon={faGem}/></span>
                            線上課程
                        </a>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link" href="https://astro.5xruby.tw/" target="_blank">
                            <span style={{fontSize: '.9em'}}><FontAwesomeIcon icon={faCompass}/></span>
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
    )
}

export default Navigator;