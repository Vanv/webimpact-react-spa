import React, {Component} from 'react';
import screen1 from '../../images/00_client_hub_00.png';
import screen2 from '../../images/01_client_hub_01.png';
import screen3 from '../../images/02_client_hub_02.png';

class ClienthubSPA extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <h2 className="mb-4 text-center">Clienthub SPA</h2>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={screen1}  alt="Initial client loaded from API" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen2}  alt="Choose different client to Map" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen3}  alt="APS Client from dropdown API" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ClienthubSPA;
