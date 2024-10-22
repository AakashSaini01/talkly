import "./detail.css";
import { auth } from "../../lib/firebase";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h4>Aakash Saini</h4>
        <p>this is detail</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItems">
              <div className="photoDetail">
                <img
                  src="https://www.devpoojan.in/cdn/shop/articles/HD-Lord-Ram-Pictures.jpg?v=1679112776"
                  alt=""
                  className="icon"
                />
              </div>
              <span>photo_2024_2.png</span>
              <img src="./download.png" alt="" />
            </div>

            <div className="photoItems">
              <div className="photoDetail">
                <img
                  src="https://www.devpoojan.in/cdn/shop/articles/HD-Lord-Ram-Pictures.jpg?v=1679112776"
                  alt=""
                  className="icon"
                />
              </div>
              <span>photo_2024_2.png</span>
              <img src="./download.png" alt="" />
            </div>

            <div className="photoItems">
              <div className="photoDetail">
                <img
                  src="https://www.devpoojan.in/cdn/shop/articles/HD-Lord-Ram-Pictures.jpg?v=1679112776"
                  alt=""
                  className="icon"
                />
              </div>
              <span>photo_2024_2.png</span>
              <img src="./download.png" alt="" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
