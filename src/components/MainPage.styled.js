import styled from "styled-components";
import { images } from "./Images";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 120rem;
  border: 1px solid black;
  background-image: url(${images.bgImgMain});
  background-position: center;
  background-size: cover;
`;
