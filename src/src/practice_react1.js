import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/header";
import { Mycard } from "./component/mycard";

function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="row">
        {list.map(() => (
          <div className="col-sm-12 col-md-3 mt-1">
            <Mycard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;