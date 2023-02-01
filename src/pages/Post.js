import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <>
      <Header />
      <section className="post-header">
        <div id="returnMainPageBtn" className="post-bottom-logo">
          <Link to="/">
            <img className="post-left-img" src="/assets/left.png" alt="left" />
          </Link>
        </div>
      </section>
      <main className="post-main">
        <div className="post-content">
          <div className="post-frame">
            <div className="post-infotop">
              <img
                className="post-author-photo"
                src="/assets/author-photo.png"
                alt="author-photo"
              />
              <div className="post-info">
                <div className="post-author-name">Authors name</div>
                <div className="post-info-text">
                  <div className="post-delemiter">7 july</div>
                  <div className="post-delemiter">·</div>
                  <div className="post-delemiter">12 min read</div>
                  <div className="post-delemiter">·</div>
                  <div className="post-delemiter">Member-only</div>
                </div>
              </div>
            </div>
            <div className="post-socialmedia">
              <div className="post-socialmediabtns">
                <img className="post-iconlink" src="/assets/linkedin.png" alt="linkedin" />
                <img className="post-iconlink" src="/assets/facebook.png" alt="facebook" />
                <img className="post-iconlink" src="/assets/twitter.png" alt="twitter" />
              </div>
            </div>
          </div>

          <div className="post-text">
            <div className="post-title">7 Practical CSS Tips</div>
            <div className="post-description">
              How product designers can break from the status quo and help our planet
            </div>
          </div>
          <img
            className="post-content-image-large"
            src="/assets/content-image-large.png"
            alt="content-image-large"
          />
          <div className="post-main-text">
            <div className="post-main-text-title">Subheader</div>
            <div className="post-main-text-description">
              How long are you awake in the morning before you go online? Perhaps it’s while you’re
              still lying in bed, using a news feed or social media as the needed stimulant to push
              you out from under the covers. Or maybe you wait to open your device until after a
              warm shower and cup of coffee. If you use sleep tracking apps, you might say you never
              signed off in the first place. And, like millions of others during the pandemic, the
              internet is probably what enabled you to stay in touch with family, or complete entire
              years of work and/or school remotely. If this sounds familiar, then you live in a part
              of the world where an internet connection now counts as an essential utility — one
              that’s as easy to take for granted as the natural gas heating your shower water or the
              electricity powering your coffee maker. But if you think we’re hyperconnected today,
              just wait. Globally, just over 55% of today’s households have an internet connection.
              This gap between the internet haves and have-nots is referred to as the digital
              divide, and access is skewed toward richer nations. The gap is projected to close in
              the next decade as billions of homes connect to the internet for the first time and by
              2030 it’s estimated that the technology industry could account for 20% of the global
              electricity demand. This presents a troublesome dichotomy. On one hand, it supports
              livelihoods, educations, and bolsters the global economy; on the other hand, the
              increased usage of the apps, websites, and services that we build will place an even
              greater strain on our already-overloaded power grids.
            </div>
          </div>
          <div className="post-infobottom">
            <div className="post-infobuttons">
              <div className="post-likes">
                <img className="post-likes-img" src="/assets/heart.png" alt="likes" />
                <div className="post-likescounter">180</div>
              </div>
              <div className="post-likes">
                <img className="post-likes-img" src="/assets/bubble.png" alt="likes" />
                <div className="post-likescounter">12</div>
              </div>
            </div>
            <div className="post-bookmarkbuttons">
              <img className="post-likes-img" src="/assets/comeicon.png" alt="comeicon" />
              <img className="post-likes-img" src="/assets/bookmark.png" alt="bookmark" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Post;
