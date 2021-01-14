import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
export default class List extends Component {
  constructor({ title, listType }) {
    super({ title, listType });
    this.state = {
      listType: listType,
    };
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 mr-auto'>
            <p className='list-title'>{title}</p>
            <Breadcrumb>
              <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
              <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
    );
  }
}
