import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";

import router from './router/MainRouts';

import Home from './component/Home';

import NotFound from "./component/NotFound";


/*const MidasClass = () => {
  return(
    <div>
    My First App
    </div>
  )
}
 */

const MidasClass = ()=>{
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/abc" element={<Home />} />
    //     {/* 404 Page */}
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </Router>
    <RouterProvider router={router} fallbackElement={'....Loading'}/>

  );
}



export default MidasClass
