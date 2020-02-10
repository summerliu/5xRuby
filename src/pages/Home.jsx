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

    imageSlideAuto = () => {
      if (this.bannerSlider !== undefined) {
        this.changeImageIndex(true);
      }
    }

    handleCurrentClick = (index) => {
      clearInterval(this.timer);
      this.timer = undefined;
      this.setState({
        currentIndex: index,
      });
      this.timer = setInterval(this.imageSlideAuto, 2500);
    }

    changeImageIndex(direction) {
      let currentIndex;
      const { banners } = this.state;
      const bannerCount = banners.length;
      if (direction) {
        const index = this.state.currentIndex + 1;
        currentIndex = index < bannerCount ? index : 0;
      } else {
        const index = this.state.currentIndex - 1;
        currentIndex = index >= 0 ? index : bannerCount - 1;
      }
      this.setState({
        currentIndex,
      });
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
          indicatorClass = styles.active;
        } else {
          imageStyle = {display: 'none'};
        }

        bannerImages.push(banner.image);
        bannerItems.push(
          <div key={index} style={imageStyle} className={styles.sliderItem}>
            <a href={banner.link} target="_blank" rel="noopener noreferrer">
              <img src={banner.image} alt={banner.link} />
            </a>
          </div>,
        );

        indicators.push(
          <span key={index} className={indicatorClass} onClick={this.handleCurrentClick.bind(this, index)} />,
        );
      });

      return (
        <div className={styles.bannerSlider} ref={(e) => { this.bannerSlider = e; }}>
          {bannerItems}
          <div className={styles.indicators}>
            {indicators}
          </div>
        </div>
      );
    }
}

const Features = () => (
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
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img1-0d20ab19.png" alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                <h3 className="pt-3">
                  網頁設計
                  <br />
                  前後端課程教學
                </h3>
                <p className="pt-3 pb-3 text-center">
                  帶你掌握
                  <strong>程式技能轉職工程師</strong>
                  ，
                  <strong>程式課程</strong>
                  從入門到進階讓你快速上手，學員好評推薦
                  <strong>轉職課程</strong>
                  ！
                </p>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="/showcases">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img2-26e4ca80.png" alt="頂尖技術網頁製作、專案開發 | 五倍紅寶石" />
                <h3 className="pt-3">
                  頂尖技術
                  <br />
                  網頁製作、專案開發
                </h3>
                <p className="pt-3 pb-3 text-center">
                  <strong>網站開發</strong>
                  到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。
                </p>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="/training">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img3-d0a4089e.png" alt="資訊軟體技術顧問 | 五倍紅寶石" />
                <h3 className="pt-3">
                  資訊軟體開發
                  <br />
                  技術顧問
                </h3>
                <p className="pt-3 pb-3 text-center">協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！</p>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="/posts/category/activity">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img4-13321bf0.png" alt="前後端工程師社群經營問 | 默默會 | 五倍紅寶石" />
                <h3 className="pt-3">
                  前後端工程師
                  <br />
                  社群經營
                </h3>
                <p className="pt-3 pb-3 text-center">Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const talks = [
  {
    badge: { new: '新開課', apply: '開放報名中' },
    title: '工作上用得到的函數式程式設計：從觀念到實務 - 假日班',
    teacher: '蘇泰安 (Taian Su)',
    time: '2 月｜假日班',
    img: 'https://5xruby.tw/assets/images/talks/cover/functional-09be0f61.jpg',
    link: '/talks/functional',
  },
  {
    badge: { apply: '開放報名中' },
    title: '客製化進階 RWD 手機版網頁設計班 - 假日班',
    teacher: '李建杭 (Amos Lee)',
    time: '3 月｜假日班',
    img: 'https://5xruby.tw/assets/images/talks/cover/rwd-99b9e59b.jpg',
    link: '/talks/functional',
  },
  {
    badge: { apply: '開放報名中' },
    title: 'Vue.js 與 Vuex 前端開發實戰課程 - 假日班',
    teacher: '李建杭 (Amos Lee)',
    time: '3 月｜假日班',
    img: 'https://5xruby.tw/assets/images/talks/cover/vue-js-61eaa1c7.jpg',
    link: '/talks/vue-js',
  },
];

const Lectures = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
          <h3 className="text-center mb-5 mt-5 pb-4">
            <span>熱門網頁設計課程推薦</span>
          </h3>
          <div className="lecture-list d-flex flex-wrap pb-5">
            {talks.map((talk, index) => (
              <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5" key={index}>
                <a href={talk.link}>
                  <div className={styles.lectureWrap}>
                    <div className={styles.lectureCover}>
                      <img src={talk.img} alt={talk.title} />
                    </div>
                    <div className={styles.lectureContent}>
                      {talk.new ? <span className={styles.badge, styles.badgeNew}>{talk.new}</span> : null}
                      <span className={styles.badge, styles.badgeApply}>{talk.apply}</span>
                      <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">{talk.title}</h4>
                      <small>
                        講師：
                        {talk.teacher}
                      </small>
                      <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
                        <small className="flex-grow-1">開課時間</small>
                        <div className="lecture-time-item">
                          <span className="badge badge-course-time mb-1">{talk.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            <div className="col-12 text-center">
              <a className="btn btn-lg btn-red mt-4" href="/talks">看更多網頁課程</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
//                         <a href={banner.link} target='_blank' rel="noopener noreferrer">
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

const shows = [
  {
    name: 'SpaceNextDoor',
    detail: 'Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.',
    img: 'https://5xruby.tw/assets/images/showcases/space_next_door-4dfdfeb6.png',
    link: 'https://spacenextdoor.com/',
  },
  {
    name: 'Shopmatic Go app',
    detail: 'Shopmatic Go is an exciting online platform where you can create a unique and comprehensive online store for your business, in a matter of minutes.',
    img: 'https://5xruby.tw/assets/images/showcases/shopmatic_go-f7b86d46.png',
    link: 'https://itunes.apple.com/in/app/shopmatic-go/id1174712646?mt=8',
  },
  {
    name: '跨境電子商務 Shopmatic',
    detail: 'Shopmatic manages the entire ecosystem for anyone wanting to sell online. We go the extra mile to ensure that we help you in every step of the process to grow your business online - from developing your own unique webstore, to listing you on marketplaces and social channels, to providing you insights on how to sell online.',
    img: 'https://5xruby.tw/assets/images/showcases/shopmatic-92ff9dcf.jpg',
    link: 'https://goshopmatic.com/in/',
  },
];

const Cases = () => (
  <div className={styles.cases}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-12 col-md-12 center-block mt-5">
          <h3 className="text-center mt-5 pb-4">案例作品 Showcase</h3>
          <div className="d-flex flex-wrap">
            {shows.map((show, index) => (
              <div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case" key={index}>
                <a href={show.link} target="_blank" rel="noopener noreferrer">
                  <div className={styles.caseWrap}>
                    <img src={show.img} alt={show.name} />
                    <h4 className="rl-padding mt-3 mb-3">{show.name}</h4>
                    <div className="rl-padding">
                      <p className="descri mb-5 text-left">{show.detail}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right mt-3">
              <a className="text-red" href="./showcases">...更多案例</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h3 className="text-center mt-3 mb-2">想更瞭解我們嗎？</h3>
          <p className="text text-center mb-4 mt-4">
            您可以看看
            <a className="text-red" href="/faq">常見問題</a>
            或者直接
            <a className="text-red" href="/contacts">線上洽詢</a>
            ，會有親切的客服人員回答您的問題，
            <br />
            也可以透過社群網站隨時關注我們的動態。
          </p>
        </div>
        <div className="social-btn bottom-spacing-lg mx-auto mb-5">
          <a target="_blank" rel="noopener noreferrer" className="rl-spacing mr-4" href="https://www.facebook.com/5xruby"><img src="https://5xruby.tw/assets/images/index/icon/icon-fb-2f24e7a0.png" alt="facebook icon" /></a>
          <a target="_blank" rel="noopener noreferrer" className="rl-spacing ml-3" href="https://twitter.com/5xruby"><img src="https://5xruby.tw/assets/images/index/icon/icon-twitter-89f8d087.png" alt="twitter icon" /></a>
        </div>
      </div>
    </div>
  </div>
);

function Home() {
  return (
    <div className={styles.home}>
      <BannerSlider />
      <Features />
      <Lectures />
      <Cases />
      <About />
    </div>
  );
}

export default Home;
