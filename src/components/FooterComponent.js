import React from "react";

function Footer(props) {
  return (
    <div className='footer container-fluid pt-3 position-absolute bottom-0'>
      <div className='row'>
        <div className='col-12  text-center'>
          <h3>© No Copyrights, feel free to use anything you like</h3>
          <p>
            Credits:{" "}
            <a href='https://jikan.docs.apiary.io/' target='blank'>
              Jikan API
            </a>{" "}
            and{" "}
            <a href='https://animechanapi.xyz/' target='blank'>
              The Anime chan API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
