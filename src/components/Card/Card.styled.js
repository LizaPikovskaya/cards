import styled from "styled-components";
import bgc from "../../accets/images/bgc.png";
import bgc2x from "../../accets/images/bgc@2x.png";

import logo from "../../accets/images/logo.png";
import logo2x from "../../accets/images/logo@2x.png";
export const StyledCard = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 178px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  background: url(${bgc}), url(${logo}),
    linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px 168px, 76px 22px, 100% 100%;
  background-repeat: no-repeat;
  background-position: 50% 6%, 20px 20px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${bgc2x}), url(${logo2x}),
      linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
    background-size: 308px 168px, 76px 22px, 100% 100%;
    background-repeat: no-repeat;
    background-position: 50% 6%, 20px 20px;
  }
`;

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  flex-shrink: 0;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 3.29372px 0px #fbf8ff inset,
    0px -2.19582px 4.39163px 0px #ae7be3 inset;
  filter: drop-shadow(
    0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06)
  );
`;

export const ImageBcg = styled.div`
  width: 62px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 62px;
  background-color: #5736a3;
  overflow: hidden;
  /* object-fit: ; */
`;

export const UserImage = styled.img`
  object-fit: contain;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 16px;
`;

export const Text = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: 16px;
`;

export const Button = styled.button`
  /* display: flex; */
  width: 196px;
  padding: 14px 28px;
  /* justify-content: center;
  align-items: center; */
  text-align: center;
  border-radius: 10.311px;
  background: ${({ isFollow }) => (isFollow ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  border: transparent;
`;
