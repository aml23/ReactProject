import { useState ,useEffect} from "react";
import { useHistory } from "react-router-dom";

export default function Header() {

    const history = useHistory();
    const redirectToAbout = () => {
      history.push("/about");
    };

  return (
    <>
      <div class="container-fluid darkBackground">
        <div class="row header">
          <div class="col-6  name position-relative " >
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className="my_name ">
                <span className="align-middle">Movies</span>
              </div>
               </div>
          </div>
          <div class="col-6 align-middle">
          </div>
        </div>
      </div>
    </>
  );
}
