import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { ParallaxBanner } from 'react-scroll-parallax';

var section =
{
  "title": "參與更多行動",
  "tagline": "邀請你與我們一起，締造更多蝴蝶效應！" 
}

var shareListData = [
  {
    "name": "報名黑客松",
    "description": "有點子但缺舞台？揪松網歡迎你！",
    "action": "參加 g0v"
  },
  {
    "name": "贊助獎助金",
    "description": "贊助一份力量，實現更多可能！",
    "action": "我要捐款"
  },
  {
    "name": "下載最新年鑑",
    "description": "最新 2018 獎助金專案年鑑，歡迎取用！",
    "action": "下載資料"
  }
]

class Share extends Component {
  share = (i) => {
    return (
      <div className="push fl relative">
        <span className="bg-white w-100 h-100 absolute showdiv showme-expand-y delay"></span>
        <span className="bg-dark w-100 h-100 absolute showdiv showme-expand-y"></span>
        <div className="bg-white pv5-l pv4 hover-bg-light-gray bg-animate tc">
          <figure className="mb4 w3 h3 bg-dark center"></figure>
          <h5 className="ma0">{shareListData[i].name}</h5>
          <p className="mw-320 mb4 center tc ph4 h2">{shareListData[i].description}</p>
          <a href="/" className="link btn ba b--dark bw1 dib center ph4 br1 dark btn-hover-white relative overflow-hidden">
            <span className="btn-color bg-dark w-100 h-100 absolute"></span>
            <p className="ma0 lh-title tc fw5 pv3 relative">
              {shareListData[i].action}
              <FontAwesome className="pl2" name='long-arrow-right'/>
            </p>
          </a>
        </div>
      </div>
    )
  }
  render() {
    let shareList = [];
    for(var i = 0; i < shareListData.length; i++) {
      shareList.push(this.share(i));
    }
    return (
      <div>
        <section id="share" className="fw-100 bg-white pt5"> 
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">{section.title}</h3>
          <h5 className="ma0 lh-copy tc mw7 center fw4 f4-ns f5 o-70 mb5-l mb4 hideme hidediv">{section.tagline}</h5>
          <div className="cf flexbox">
            {shareList}
          </div>
        </section>
        <ParallaxBanner
          className="fw-100 bg-dark pv5-l pv4"
          layers={[
              {
                  image: 'images/topography.svg',
                  amount: 1,
                  slowerScrollRate: false,
              }
          ]}
          style={{
              height: 'auto',
          }}
        >
          <div className="container mw9 w-85 tc center">
            <a href="/" className="link btn ba b--white bw1 dib center ph4 br1 white btn-hover-black relative overflow-hidden">
              <span className="btn-color bg-white w-100 h-100 absolute"></span>
              <p className="ma0 lh-title tc fw5 pv3 relative">
                <FontAwesome className="pr2" name='facebook-square'/>
                分享到 Facebook
              </p>
            </a>
          </div>
        </ParallaxBanner>
      </div>
    )
  }
}

export default Share;

        