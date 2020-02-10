import React from 'react';
import styles from './styles/home.scss';

const mockBanners = [
    {
        index: 0,
        position: 'top',
        image: 'https://5xruby.tw/assets/images/index/banner_astro-a839be5c.jpg',
        link: 'https://astro.5xruby.tw/',
        timestamp: 1545696000,
    },
    {
        index: 1,
        position: 'top',
        image: 'https://5xruby.tw/assets/images/index/banner_imcodingit-53a9a811.jpg',
        link: 'https://iamcoding.tw/',
        timestamp: 1545696001,
    },
    {
        index: 2,
        position: 'top',
        image: 'https://5xruby.tw/assets/images/index/banner_mokumokukai-f9ec6b54.jpg',
        link: 'https://www.facebook.com/rubymokumokukai/',
        timestamp: 1545696002,
    },
    {
        index: 3,
        position: 'top',
        image: 'https://5xruby.tw/assets/images/index/banner_5xruby-3d66d288.jpg',
        link: 'https://5xruby.tw/about/',
        timestamp: 1545696003,
    },
];

class BannerSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            currentIndex: 0,
        };
        this.bannerSlider = undefined;
        this.timer = undefined;
    }

    componentDidMount() {
        this.setState({banners: mockBanners});
        this.timer = setInterval(this.imageSlideAuto, 2500);
    }

    componentWillUnmount() {
        if (this.timer !== undefined) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }

    changeImageIndex(direction) {
        let currentIndex;
        const bannerCount = this.state.banners.length;
        if (direction) {
            const index = this.state.currentIndex + 1;
            currentIndex = index < bannerCount ? index : 0;
        } else {
            const index = this.state.currentIndex - 1;
            currentIndex = index >= 0 ? index : bannerCount - 1;
        }
        this.setState({
            currentIndex: currentIndex,
        });
    }

    imageSlideAuto = () => {
        if (this.bannerSlider !== undefined) {
            this.changeImageIndex(true);
        }
    }

    handleCurrentClick = (index, e) => {
        clearInterval(this.timer);
        this.timer = undefined;
        this.setState({
            currentIndex: index,
        });
        this.timer = setInterval(this.imageSlideAuto, 2500);
    }

    render() {
        const { state } = this;
        const bannerItems = [];
        const bannerImages = [];
        const indicators = [];
        state.banners.forEach((banner, index) => {
            let imageStyle = {};
            let indicatorClass = '';
            if (index === state.currentIndex) {
                imageStyle = {display: 'block'};
                indicatorClass = 'active';
            } else {
                imageStyle = {display: 'none'};
            }

            bannerImages.push(banner.image);
            bannerItems.push(
                    <div key={index} style={imageStyle} className={styles.sliderItem}>
                        <a href={banner.link} target='_blank'>
                            <img src={banner.image} />
                        </a>
                    </div>
            );
            indicators.push(
                <span key={index} className={indicatorClass} onClick={this.handleCurrentClick.bind(this, index)}/>
            );
        });

        return (
            <div className={styles.bannerSlider} ref={(e) => {this.bannerSlider = e;}}>
                {bannerItems}
                <div className={styles.indicators}>
                    {indicators}
                </div>
            </div>
        );
    }
}

const Features = () => {
    return (
        <div className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
                        <h3 className="text-center mb-5 mt-5 pb-4">
                            <span>關於五倍紅寶石 About 5xRuby </span>
                        </h3>
                        <div className="feature-list d-flex text-center flex-wrap">
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <a href="/talks">
                                    <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img1-0d20ab19.png" alt="網頁設計前後端課程教學 | 五倍紅寶石"/>
                                    <h3 className="pt-3">網頁設計<br/>>前後端課程教學</h3>
                                    <p className="pt-3 pb-3 text-center">帶你掌握<strong>程式技能轉職工程師</strong>，<strong>程式課程</strong>從入門到進階讓你快速上手，學員好評推薦<strong>轉職課程</strong>！</p>
                                </a>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <a href="/showcases">
                                    <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img2-26e4ca80.png" alt="頂尖技術網頁製作、專案開發 | 五倍紅寶石"/>
                                    <h3 className="pt-3">頂尖技術<br/>網頁製作、專案開發</h3>
                                    <p className="pt-3 pb-3 text-center"><strong>網站開發</strong>到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。</p>
                                </a>
                            </div>
                            <div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <a href="/training">
                                    <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img3-d0a4089e.png" alt="資訊軟體技術顧問 | 五倍紅寶石"/>
                                    <h3 className="pt-3">資訊軟體開發<br/>技術顧問</h3>
                                    <p className="pt-3 pb-3 text-center">協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！</p>
                                </a>
                            </div>
                            <div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <a href="/posts/category/activity">
                                    <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img4-13321bf0.png" alt="前後端工程師社群經營問 | 默默會 | 五倍紅寶石"/>
                                    <h3 className="pt-3">前後端工程師<br/>社群經營</h3>
                                    <p className="pt-3 pb-3 text-center">Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Lectures = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
                        <h3 className="text-center mb-5 mt-5 pb-4">
                            <span>熱門網頁設計課程推薦</span>
                        </h3>

                        <div className="lecture-list d-flex flex-wrap pb-5">
                            <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5">
                                <a href="/talks/functional">
                                    <div className={styles.lectureWrap}>
                                        <div className={styles.lectureCover}>
                                            <img src="https://5xruby.tw/assets/images/talks/cover/functional-09be0f61.jpg" alt="工作上用得到的函數式程式設計：從觀念到實務 - 假日班"/>
                                        </div>
                                        <div className={styles.lectureContent}>
                                            <span className={styles.badge, styles.badgeNew}>新開課</span>
                                            <span className={styles.badge, styles.badgeApply}>開放報名中</span>
                                            <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">工作上用得到的函數式程式設計：從觀念到實務 - 假日班</h4>
                                            <small>講師：蘇泰安 (Taian Su)</small>
                                                <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
                                                    <small className="flex-grow-1">開課時間</small>
                                                    <div className="lecture-time-item">
                                                        <span className="badge badge-course-time mb-1">2 月｜假日班</span>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5">
                                <a href="/talks/rwd">
                                    <div className={styles.lectureWrap}>
                                        <div className={styles.lectureCover}>
                                            <img src="https://5xruby.tw/assets/images/talks/cover/rwd-99b9e59b.jpg" alt="客製化進階 RWD 手機版網頁設計班 - 假日班"/>
                                        </div>
                                        <div className={styles.lectureContent}>
                                            <span className={styles.badge, styles.badgeApply}>開放報名中</span>
                                            <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">客製化進階 RWD 手機版網頁設計班 - 假日班</h4>
                                            <small>講師：李建杭 (Amos Lee)</small>
                                            <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
                                                <small className="flex-grow-1">開課時間</small>
                                                <div className="lecture-time-item">
                                                    <span className="badge badge-course-time mb-1">3 月｜假日班</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5">
                                <a href="/talks/vue-js">
                                    <div className={styles.lectureWrap}>
                                        <div className={styles.lectureCover}>
                                            <img src="https://5xruby.tw/assets/images/talks/cover/vue-js-61eaa1c7.jpg" alt="Vue.js 與 Vuex 前端開發實戰課程 - 假日班"/>
                                        </div>
                                        <div className={styles.lectureContent}>
                                            <span className={styles.badge, styles.badgeApply}>開放報名中</span>
                                            <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">Vue.js 與 Vuex 前端開發實戰課程 - 假日班</h4>
                                            <small>講師：許國政 (Kuro Hsu)</small>
                                            <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
                                                <small className="flex-grow-1">開課時間</small>
                                                <div className="lecture-time-item">
                                                    <span className="badge badge-course-time mb-1">3 月｜假日班</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 text-center">
                                <a className="btn btn-lg btn-red mt-4" href="/talks">看更多網頁課程</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// class AvatarSlider extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             banners: [],
//             currentIndex: 0,
//         };
//         this.bannerSlider = undefined;
//         this.timer = undefined;
//     }

//     componentDidMount() {
//         this.setState({banners: mockBanners});
//         this.timer = setInterval(this.imageSlideAuto, 2500);
//     }

//     componentWillUnmount() {
//         if (this.timer !== undefined) {
//             clearInterval(this.timer);
//             this.timer = undefined;
//         }
//     }

//     changeImageIndex(direction) {
//         let currentIndex;
//         const bannerCount = this.state.banners.length;
//         if (direction) {
//             const index = this.state.currentIndex + 1;
//             currentIndex = index < bannerCount ? index : 0;
//         } else {
//             const index = this.state.currentIndex - 1;
//             currentIndex = index >= 0 ? index : bannerCount - 1;
//         }
//         this.setState({
//             currentIndex: currentIndex,
//         });
//     }

//     imageSlideAuto = () => {
//         if (this.bannerSlider !== undefined) {
//             this.changeImageIndex(true);
//         }
//     }

//     handleCurrentClick = (index, e) => {
//         clearInterval(this.timer);
//         this.timer = undefined;
//         this.setState({
//             currentIndex: index,
//         });
//         this.timer = setInterval(this.imageSlideAuto, 2500);
//     }

//     render() {
//         const { state } = this;
//         const bannerItems = [];
//         const bannerImages = [];
//         const indicators = [];
//         state.banners.forEach((banner, index) => {
//             let imageStyle = {};
//             let indicatorClass = '';
//             if (index === state.currentIndex) {
//                 imageStyle = {display: 'block'};
//                 indicatorClass = 'active';
//             } else {
//                 imageStyle = {display: 'none'};
//             }

//             bannerImages.push(banner.image);
//             bannerItems.push(
//                     <div key={index} style={imageStyle} className={styles.sliderItem}>
//                         <a href={banner.link} target='_blank'>
//                             <img src={banner.image} />
//                         </a>
//                     </div>
//             );
//             indicators.push(
//                 <span key={index} className={indicatorClass} onClick={this.handleCurrentClick.bind(this, index)}/>
//             );
//         });

//         return (
//             <div className={styles.bannerSlider} ref={(e) => {this.bannerSlider = e;}}>
//                 {bannerItems}
//                 <div className={styles.indicators}>
//                     {indicators}
//                 </div>
//             </div>
//         );
//     }
// }

// const Showcases = () => {
//     return (

//     );
// }

// const About = () => {
//     return (

//     );
// }

function Home() {
    return (
        <div className={styles.home}>
            <BannerSlider/>
            <Features/>
            <Lectures/>
        </div>
    )
}

export default Home;