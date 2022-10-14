import {Route, Routes} from 'react-router-dom';
import {Home, Faq} from 'pages';
import {ROUTES} from "constant/routes";
import './assets/styles/app.scss';
import {RecoilRoot} from "recoil";

const  App = () => {
  return (
      <RecoilRoot>
          <Routes>
              <Route path={ROUTES.HOMEPAGE} element={<Home/>}/>
              <Route path={ROUTES.FAQ} element={<Faq/>}/>
          </Routes>
      </RecoilRoot>
  );
}

export default App;
