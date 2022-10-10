import {Route, Routes} from 'react-router-dom';
import {Home} from 'pages';
import {ROUTES} from "constant/routes";
import './assets/styles/app.scss';
import {RecoilRoot} from "recoil";

const  App = () => {
  return (
      <RecoilRoot>
          <Routes>
              <Route path={ROUTES.HOMEPAGE} element={<Home/>}/>
          </Routes>
      </RecoilRoot>
  );
}

export default App;
