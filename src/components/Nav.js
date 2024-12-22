import { useState,  useEffect} from "react";

export default function Nav(){
    const [active, setActive] = useState(["nav-link active", "nav-link"]);

    useEffect(()=>{
      window.location.pathname == "/about" ? setActive(["nav-link", "nav-link active"]) : setActive(["nav-link active", "nav-link"]);
    }, []);

    return (
        <div id="nav-bar">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">WeatherData</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className={active[0]} aria-current="page" href="/" >Prediction</a>
                  </li>
                  <li className="nav-item">
                    <a className={active[1]} href="/about" >About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}