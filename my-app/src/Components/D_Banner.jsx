import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;
const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  color: #6e7174;
`;
const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Intro = styled.div`
  font-size: 16px;
  margin: 10px 0;
`;
const BroughtImage = styled.img`
  width: 150px;
`;
const Span = styled.span`
  font-size: 14px;
  display: block;
`;
const IconDiv = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  gap: 10px;
  border: 1px solid teal;
  text-align: center;
  width: 200px;
  border-radius: 10px;
  padding: 10px;
`;
const Icon = styled.img`
  width: 100px;
`;
const Desc = styled.div``;
const ButtonDiv = styled.div``;
const FeatureDiv = styled.div``;
const Banner = styled.div``;

const BottomBanner = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingDiv>
          <Intro>
            Introducing The World's 1st Meat-Free Lifestyle Platform
          </Intro>
          <Span>
            Brought to you by{" "}
            <BroughtImage src="https://www.kindmeal.my/images/logo-petfinder.png" />
          </Span>
        </HeadingDiv>
        <IconDiv>
          {/* <Span>Instant coupon &amp; dining. No upfront coupon payment, booking or printing.</Span> */}
          <Card>
            <Icon src="https://www.kindmeal.my/images/intro_deal.png"></Icon>
            <Desc>
              <Span>Get Great Deals</Span>
              <Span>
                Show our FREE digital coupons to instantly enjoy exciting deals
              </Span>
            </Desc>
          </Card>

          <Card>
            <Icon src="https://www.kindmeal.my/images/intro_kindmoment.png"></Icon>
            <Desc>
              <Span>Get Great Deals</Span>
              <Span>
                Show our FREE digital coupons to instantly enjoy exciting deals
              </Span>
            </Desc>
          </Card>

          <Card>
            <Icon src="https://www.kindmeal.my/images/intro_menu.png"></Icon>
            <Desc>
              <Span>Get Great Deals</Span>
              <Span>
                Show our FREE digital coupons to instantly enjoy exciting deals
              </Span>
            </Desc>
          </Card>

          <Card>
            <Icon src="https://www.kindmeal.my/images/intro_friends.png"></Icon>
            <Desc>
              <Span>Get Great Deals</Span>
              <Span>
                Show our FREE digital coupons to instantly enjoy exciting deals
              </Span>
            </Desc>
          </Card>
        </IconDiv>
        <ButtonDiv></ButtonDiv>
        <FeatureDiv></FeatureDiv>
        <Banner></Banner>
      </Wrapper>
    </Container>
  );
};

export default BottomBanner;
