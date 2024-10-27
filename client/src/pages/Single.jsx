import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <div className="user">
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={` /write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
          assumenda, officiis eaque laborum quod dolore! Unde expedita saepe
          porro quae eveniet dolore illo quaerat ducimus cupiditate similique
          voluptates, in ipsam consequuntur reiciendis, a debitis molestiae
          earum quis. Non, magni dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores
          cupiditate cumque saepe autem, magni magnam inventore deleniti odit
          molestiae, fugit at alias quod officia sunt praesentium sapiente culpa
          soluta quae quos placeat velit amet nihil. Quam excepturi similique
          libero.
        </p>
      </div>
      <Menu />
    </div>

    ///dasd
  );
};

export default Single;
