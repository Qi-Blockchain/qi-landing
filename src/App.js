import {Route, Routes} from 'react-router-dom';
import {RecoilRoot} from "recoil";
import ScrollToTop from "hoc/scrollToTop";
import {Home, Faq, Terms, Explore} from 'pages';
import {ROUTES} from "constant/routes";
import './assets/styles/app.scss';

const  App = () => {
  return (
      <RecoilRoot>
          <ScrollToTop/>
          <Routes>
              <Route path={ROUTES.HOMEPAGE} element={<Home/>}/>
              <Route path={ROUTES.FAQ} element={<Faq/>}/>
              <Route path={ROUTES.TERMS} element={<Terms/>}/>
              <Route path={ROUTES.EXPLORE_DAPPS} element={<Explore/>}/>
          </Routes>
      </RecoilRoot>
  );
}

export default App;
