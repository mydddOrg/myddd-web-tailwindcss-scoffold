import * as React from "react";
import * as ReactDOM from "react-dom";
import { InstanceFactory } from "./components/ioc/InstanceFactory";
import "style/common.css";
import "animate.css";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "views/common/Loading";
import { HashRouter } from "react-router-dom";
import BlogLayout from "views/blog/BlogLayout";
import AboutMeLayout from "views/about/AboutMeLayout";

InstanceFactory.initIOC();

const LazyMain = React.lazy(
  () => import(/* webpackChunkName: "Main" */ "./views/Main")
);

const LazySeriesMain = React.lazy(
  () => import(/* webpackChunkName: "SeriesMain" */ "./views/SeriesMain")
);

const LazyProjectMain = React.lazy(
  () => import(/* webpackChunkName: "ProjectMain" */ "./views/ProjectMain")
);

const root = document.createElement("div");
root.id = "app";
document.body.appendChild(root);

const App = observer((props?: any) => {
  return (
    <Routes>
      <Route path="/" element={<LazyMain />} />
      <Route path="/series" element={<LazySeriesMain />} />
      <Route path="/projects" element={<LazyProjectMain />} />
      <Route path="/blog" element={<BlogLayout />} />
      <Route path="/about" element={<AboutMeLayout />} />

    </Routes>
  );
});

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <HashRouter>
      <App />
    </HashRouter>
  </React.Suspense>,
  document.getElementById("app")
);
