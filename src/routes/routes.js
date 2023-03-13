
import {Route, Routes, Navigate} from "react-router-dom";
import PersonalityTest from "../pages/PersonalityTest/PersonalityTest";
import Home from "../pages/Home/Home";
import Result from "../pages/Results/Result";
const Router = () => (
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<PersonalityTest />} />
      <Route path='/result' element={<Result />} />
      <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)
export default Router;
