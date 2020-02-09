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

    handlePrevClick = (e) => {
        clearInterval(this.timer);
        this.timer = undefined;
        this.changeImageIndex(false);
        this.timer = setInterval(this.imageSlideAuto, 2500);
    }

    handleNextClick = (e) => {
        clearInterval(this.timer);
        this.timer = undefined;
        this.changeImageIndex(true);
        this.timer = setInterval(this.imageSlideAuto, 2500);
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
                    <div key={index} style={imageStyle} className="sliderItem">
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
                {/* <button className="button prev" onClick={this.handlePrevClick} />
                <button className="button next" onClick={this.handleNextClick} /> */}
                <div className="indicators">
                    {indicators}
                </div>
            </div>
        );
    }
}


function Home() {
    return (
        <div className={styles.home}>
            <BannerSlider/>
        </div>
    )
}

export default Home;