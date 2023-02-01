import { Link } from 'react-router-dom';

function Content() {
  return (
    <>
      <div className="content">
        <div className="left">
          <div className="top">
            <div className="infotop">
              <img className="author-photo" src="/assets/author-photo.png" alt="author-photo" />
              <div className="author-name">Authors name</div>
              <div className="delemiter">in</div>
              <div className="topicname">Topics Name</div>
              <div className="delemiter">·</div>
              <div className="delemiter">7 july</div>
            </div>
            <Link to="post" id="refFullPost" className="ref-full-post">
              <div className="text">
                <div className="title">7 Practical CSS Tips</div>
                <div className="description">
                  You not only learn more Python by implementing what you already know but, in the
                  end, you can see how all your hard work pays off.
                </div>
              </div>
            </Link>
          </div>
          <div className="infobottom">
            <div className="info">
              <div className="infobutton">Java Script</div>
              <div className="delemiter">12 min read</div>
              <div className="delemiter">·</div>
              <div className="delemiter">Selected for you</div>
            </div>
            <div className="action">
              <img className="actionicon" src="/assets/actionicon.png" alt="actionicon" />
              <img className="actionicon" src="/assets/actionicon.png" alt="actionicon" />
              <img className="actionicon" src="/assets/actionicon.png" alt="actionicon" />
            </div>
          </div>
        </div>
        <Link to="post" id="refFullPost" className="ref-full-post">
          <img className="content-image" src="/assets/content-image.png" alt="content-image" />
        </Link>
      </div>
    </>
  );
}

export default Content;
