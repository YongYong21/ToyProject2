import styled from "styled-components";

function MainContents() {
  return (
    <Wrapper>
      <Banner>메인 배너</Banner>
      <Content>
        <TextSection>
          <span className="small-title">프로필</span>
          <span className="title">함께 할 멤버들의 취향 미리보기</span>
          <span className="text">
            프로필 사진, 자기소개, 관심사, 피드 등<br /> 취향으로 가득한
            멤버들의 프로필로 <br />
            나와 취향이 통하는지 확인할 수 있어요.
          </span>
        </TextSection>
        <ImgSection />
      </Content>
    </Wrapper>
  );
}

export default MainContents;

const Wrapper = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  height: 30rem;
  background-color: white;
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 13rem;
  gap: 2em;
  .small-title {
    font-size: 1em;
    font-weight: 700;
    color: #f43630;
  }
  .title {
    font-size: 1.7em;
    font-weight: 700;
  }
  .text {
    font-size: 0.8em;
    color: #5d5d5d;
    line-height: 1.2em;
  }
`;
const ImgSection = styled.div`
  width: 15rem;
  height: 20rem;
  border: 1px solid #f43630;
  background-color: white;
  border-radius: 5em;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;
