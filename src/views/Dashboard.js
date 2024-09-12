/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import hombre from "hombre.png";
import mujer from "mujer.webp";
import Kennya_prof from "../assets/img/Kennya_prof.jpg";
import miguelmoranv from "../assets/img/miguelmoranv.jpg";
import Castro from "../assets/img/Castro.jpeg";
import davila from "../assets/img/davila.jpeg";
import Hector from "../assets/img/Hector.png";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 1</p>
                      <CardTitle tag="p">Kennya Orona</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={Kennya_prof} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 2</p>
                      <CardTitle tag="p">Miguel Moran</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={miguelmoranv} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>     

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 3</p>
                      <CardTitle tag="p">Luis Castro</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={Castro} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>    

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 4</p>
                      <CardTitle tag="p">David Davila</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={davila} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col> 

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 5</p>
                      <CardTitle tag="p">Hector Galarza</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={Hector} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col> 
        </Row>
        <Row>
          
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
