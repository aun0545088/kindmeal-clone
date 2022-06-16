import Navbar from "../Components/Navbar"
import styled from "styled-components";
import Footer from "../Components/Footer";
import "./style.css";
import { recipes } from "../recipesData";

const Searchbar = styled.div`
  margin-top: 0px;
  width: 100%;
  background-color: #f0f0f0;
  height: 220px;
`;
const Container = styled.div`
  border: 0.1px solid #f0f0f0;
  width: 90%;
  margin: auto;
  height: 220px;
`;
const Food = styled.div`
  display: flex;
`;

const Head = styled.h2`
  display: flex;
  color: black;
  font-weight: normal;
  margin-top: 20px;
  font-size: 25px;
`;
const Yumm = styled.h2`
  color: #7a7a7a;
  margin-top: 20px;
  font-weight: normal;
  margin-left: 20px;
  font-size: 25px;
`;
const Para = styled.p`
  width: 90%;
  /* border: 1px solid red; */
  margin-top: 20px;
`;
const SearchInput = styled.input`
  width: 35%;
  background-color: white;
  border: 0;
  margin-top: 30px;
  height: 30px;
  border-radius: 5px;
`;
const Select = styled.select`
  /* border: 1px solid red; */
  width: 15%;
  height: 30px;
  margin-top: 30px;
  margin-left: 40px;
  border: 0;
  border-radius: 5px;
`;
const Opt = styled.option`
  color: balck;
  font-size: 15px;
`;
const Btn = styled.button`
  color: white;
  background-color: #fd1919;
  width: 15%;
  border-radius: 5px;
  height: 30px;
  margin-top: 30px;
  border: 0;
  font-size: 15px;
  margin-left: 40px;
`;
const RecipiContainer = styled.div`
  width: 70%;
  /* height: 700px; */
  /* border: 1px solid red; */
  margin: auto;
`;
const CategoryBar = styled.div`
  /* border: 1px solid red; */
  width: 93%;
  margin: auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, 15%);
  grid-gap: 20px;
`;

const RecipesCard = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  /* height: 100%; */
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 20px;
`;
const CardDiv = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 350px;
  border-radius: 10px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
const StripsTop = styled.div`
  border: 1px solid white;
  display: flex;
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const StripImage = styled.div`
  width: 18%;
  height: 90%;
  margin-top: 3px;
  margin-left: 10px;
  border-radius: 50%;
`;
const StripPara = styled.p`
  color: gray;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20%;
`;
const StripBtn = styled.button`
  width: 20%;
  border-radius: 5px;
  height: 30px;
  margin-top: 15px;
  /* margin-left: 60px; */
  border: 0;
  background-color: red;
  color: white;
`;
const StripsDown = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  height: 60px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const StripTime = styled.div`
  width: 30%;
  /* border: 1px solid red; */
  height: 40%;

  margin: auto auto auto 20px;
`;
const Heart = styled.div`
  margin: auto auto auto 55px;
`;
const Image = styled.img`
  width: 100%;
  height: 222px;
  object-fit: cover;
`;
 const Recipes = () => {
  return (
    <div>
      {/* <Container/> */}
      <Navbar />
      <Searchbar>
        <Container>
          <Food>
            <Head>Food & Drinks |</Head>
            <Yumm> Yummy Meat-Free Recipes</Yumm>
          </Food>

          <Para>
            Want to craft your own creative meat-free meals? Get inspiration
            from other food lovers, or share your own masterpieces!
          </Para>
          <Para>Transform into a master chef now.</Para>
          <Food>
            <SearchInput placeholder="Search Recipe or User Name" />
            <Select>
              <Opt value={"All Categories"}>All Category</Opt>
              <Opt value={"All Categories"}>Appetizers</Opt>
              <Opt value={"All Categories"}>Beverages</Opt>
              <Opt value={"All Categories"}>Breakfast</Opt>
              <Opt value={"All Categories"}>Breads</Opt>
              <Opt value={"All Categories"}>Condiments</Opt>
              <Opt value={"All Categories"}>Desserts</Opt>
              <Opt value={"All Categories"}>Snacks</Opt>
              <Opt value={"All Categories"}>Main Dishes</Opt>
            </Select>
            <Btn id="search">
              <b>Search Recipes</b>
            </Btn>
            <Btn id="btn" style={{ marginRight: "0px", marginLeft: "100px" }}>
              <b>Share My Recipe</b>
            </Btn>
          </Food>
        </Container>
      </Searchbar>
      <RecipiContainer>
        <CategoryBar>
          <button className="category">All Categories</button>
          <button className="category">Appetizers</button>
          <button className="category">Beverages</button>
          <button className="category">Breakfast</button>
          <button className="category">Breads</button>
          <button className="category">Condiments</button>
          <button className="category">Desserts</button>
          <button className="category">Snacks</button>
          <button className="category">Main Dishes</button>
          <button className="category">Salad</button>
          <button className="category">Side Dishes</button>
          <button className="category">Soups</button>
        </CategoryBar>
        <RecipesCard>
          {recipes.map((item) => (
            <CardDiv>
              <StripsTop>
                <StripImage>
                  <Image id="owner" src={item.owner_img} />
                </StripImage>
                <StripPara>{item.owner_name}</StripPara>
                <StripBtn>View</StripBtn>
              </StripsTop>
              <Image src={item.dish_img} />
              <StripsDown>
                <StripTime>🕐 {item.time}</StripTime>
                <Heart>
                  <Image
                    id="heart"
                    src="	https://www.kindmeal.my/images/icon_heart_small.png"
                  />
                  <Image
                    id="heart"
                    src="https://www.kindmeal.my/images/icon_commentbubble_small.png"
                  />
                </Heart>
              </StripsDown>
            </CardDiv>
          ))}
        </RecipesCard>
      </RecipiContainer>

      <Footer />
    </div>
  );
};

export default Recipes
