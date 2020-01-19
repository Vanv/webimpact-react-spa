import React, {Component} from 'react';
import screen1 from '../../images/01_Screen_01.png';
import screen2 from '../../images/02_Screen_02.png';
import screen3 from '../../images/03_Screen_03.png';
import screen4 from '../../images/04_Screen_04.png';
import screen5 from '../../images/05_Screen_05.png';
import screen5a from '../../images/05aa_Screen_05.png';
import screen6 from '../../images/06_Screen_06.png';
import screen7 from '../../images/07_Screen_07_Unlink.png';
import screen7a from '../../images/07a_Screen_07_Unlink_selection.png';

class MappingSPA extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <h2 className="mb-4 text-center">Mapping Client SPA</h2>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={screen1}  alt="API initial load" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen2}  alt="Choose different client to Map" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen3}  alt="APS Client from dropdown API" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen4}  alt="Choose different client to Map" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen5}  alt="Selected Row to be saved in API" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen5a}  alt="Client Mapped" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen6}  alt="Mapping Saved in UI and Graphql" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen7}  alt="Unlink Client" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={screen7a}  alt="Unlink Slelected Client" />
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

export default MappingSPA;
