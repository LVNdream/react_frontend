// import Header from "./components/layouts/layoutClient/components/Header";
// import Footer from "./components/layouts/layoutClient/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import LayoutCilent from "./components/layouts/layoutClient";
import { Fragment } from "react";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;

              let Layout = LayoutCilent;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page></Page>
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
