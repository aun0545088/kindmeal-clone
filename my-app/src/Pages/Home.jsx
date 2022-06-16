import styled from "styled-components";
import D_Banner from "../Components/D_Banner";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import {
  Latest_newVideo,
  Yummylicious,
  Dicover_restaurants,
  Amazing_superheroes,
  Latest_newVideo_heading,
  Yummylicious_heading,
  Dicover_restaurants_heading,
  Amazing_superheroes_heading,
} from "../video_data";
import Slider from "../Components/Slider";
const Container = styled.div``;

const Home = () => {
  const [data,setData] = useState(true)

  const handleDataFun = ()=>{
    setData(!data)
  }
  return (
    <Container>
      <Navbar data={data} handleDataFun={handleDataFun}/>
      <Slider />
      <Card contents={Latest_newVideo} heading={Latest_newVideo_heading} />
      <Card contents={Yummylicious} heading={Yummylicious_heading} />
      <Card
        contents={Dicover_restaurants}
        heading={Dicover_restaurants_heading}
      />
      <Card
        contents={Amazing_superheroes}
        heading={Amazing_superheroes_heading}
      />
      <D_Banner />
      <Footer />
    </Container>
  );
};

export default Home;
