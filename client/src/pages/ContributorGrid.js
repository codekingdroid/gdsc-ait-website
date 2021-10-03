import React from "react";
import team_mem from "./team-images/profile.svg";
import "./team.css";

function ContributorGrid(props) {
  // const style = {
  //   background: url("https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb");
  // };

  return (
    <div className="container">
      <div class="box-el">
        <div class="box">
          <div class="box-inner">
            <div class="the-content-box">
              <div class="content-box-inner">
                <h1>Jessica West</h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis similique id suscipit delectus laudantium doloribus
                  excepturi natus dicta aperiam doloremque officiis, sequi sed,
                  repellendus impedit.
                </p>
                <a href="">
                  <span>View Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-inner">
            <div class="the-content-box">
              <div class="content-box-inner">
                <h1>John Phillip</h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis similique id suscipit delectus laudantium doloribus
                  excepturi natus dicta aperiam doloremque officiis, sequi sed,
                  repellendus impedit.
                </p>
                <a href="">
                  <span>View Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-inner">
            <div class="the-content-box">
              <div class="content-box-inner">
                <h1>Johnson Family</h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis similique id suscipit delectus laudantium doloribus
                  excepturi natus dicta aperiam doloremque officiis, sequi sed,
                  repellendus impedit.
                </p>
                <a href="">
                  <span>View Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributorGrid;
