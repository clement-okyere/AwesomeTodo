import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const HomePage = () => {
    const history = useHistory();

    const loginClickHandler = () => {
        history.push('/login');
    }
 
    return (
      <>
        <div className="main">
          <div className="description">
            <div className="title">
              <h1>Awesome Todo</h1>
            </div>

            <div className="about">
              <h1 className="heading">
                Organize Your Todos
                <br /> Effectively &#38; <br />
                Efficiently
              </h1>

              <div className="sub_description"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum
              </div>
                        
                        <button
                            className="getting_started"
                    onClick={loginClickHandler}>
                    Get Started
                </button>
            </div>
          </div>

          <div className="feature_image"></div>
        </div>
      </>
    );
}

export default HomePage;