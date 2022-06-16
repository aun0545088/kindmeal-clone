import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import MealDeal from "./pages/MealDeal";
// import MealDealDetail from "./pages/MealDealDetail";
// import KindMoments from "./pages/KindMoments";
// import { ProductHotPics } from "./components/ProductHotPics";
// import { ButtonsHot } from "./components/ButtonsHot";
import Recipes from "../Pages/Recipes"
// import "./App.css";
 import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import MealDeals from "../Pages/MealDeals";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route> 
        <Route path="/mealdeal" element={<MealDeals/>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;


 {/*  />
        <Route path="/mealdeal/:id" element={<MealDealDetail />} />
        <Route path="/kindmoments" element={<KindMoments />} />
        <Route path="/hotpicks" element={<ButtonsHot />}></Route>
        <Route path="/hotpicks/:id" element={<ProductHotPics />}></Route>
        
      */}