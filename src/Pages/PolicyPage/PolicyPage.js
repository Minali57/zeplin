import { React } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import "./PolicyPage.css";
const PolicyPage = () => {
  //   const IntroRef = useRef(null);
  //   const manaegRef = useRef(null);
  //   const cookieRef = useRef(null);

  return (
    <>
      <div style={{ margin: "3% 18%" }}>
        <Row>
          <Col xs={3}>
            <div style={{ position: "sticky", top: "7%" }}>
              <Row>
                <Link
                  to="intro"
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  data-testid="introduction"
                >
                  Introduction
                </Link>
              </Row>
              <hr />
              <Link to="cookie" spy={true} smooth={true} data-testid="cookies">
                How does use cookies
              </Link>
              <hr />
              <Link
                to="manage"
                spy={true}
                smooth={true}
                data-testid="prefernces"
              >
                How to manage your cokkie prefernces?
              </Link>
              <hr />
            </div>
          </Col>
          <Col>
            <div>
              {/* <div className="intro" ref={IntroRef}> */}
              <div className="intro">
                <div
                  style={{
                    fontSize: "26px",
                    color: "black",
                    paddingBottom: "5px",
                  }}
                >
                  Introduction
                </div>
                <div style={{ color: "#414141", fontSize: "14px" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <hr />
              {/* <div className="cookie" ref={cookieRef}> */}
              <div className="cookie">
                <div
                  style={{
                    fontSize: "26px",
                    color: "black",
                    paddingBottom: "5px",
                  }}
                >
                  How does use cookies?
                </div>
                <div style={{ color: "#414141", fontSize: "14px" }}>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <div
                    style={{
                      fontSize: "17px",
                      color: "black",
                      fontWeight: "549",
                    }}
                  >
                    Why Optimy Uses These Technologies?
                  </div>
                  <div>
                    We use these technologies for a number of purposes, such as:
                  </div>
                  <ul>
                    <li>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain.
                    </li>
                    <li>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      excepturi sint occaecati cupiditate non provident,
                      similique sunt in culpa qui officia deserunt mollitia
                      animi.
                    </li>
                    <li>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized
                    </li>
                    <li>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>

              {/* <div id="manage" ref={manaegRef}> */}
              <div id="manage">
                <div
                  style={{
                    fontSize: "26px",
                    color: "black",
                    paddingBottom: "5px",
                  }}
                >
                  How to manage your cookie preference?
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </p>
                <span>Subtitle goes here</span>
                <ol>
                  <li>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain.
                    <ol>
                      <li>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled.
                      </li>
                      <li>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled.
                      </li>
                    </ol>
                  </li>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi.
                  </li>
                  <li>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </li>
                  <li>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </li>
                </ol>
                <h1>The first level heading - H1</h1>
                <h2>The second level heading - H2</h2>
                <h3>The third level heading - H3</h3>
                <h4>The forth level heading - H4</h4>
                <h5>The fifth level heading - H5 </h5>
                <h6>The sixth level heading - H6</h6>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PolicyPage;
