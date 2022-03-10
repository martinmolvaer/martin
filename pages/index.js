import Nav from "./Nav";

export default function Home() {
  return (
    <div>
      <div className="nav-wrapper">
        <Nav />
      </div>
      <div className="home">
        <div className="container">
          <div className="head">
            <h1 className="title">Martin M.</h1>
            <a href="mailto:martin@molvaer.no">
              <span className="mail">martin.molvaer.no</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
