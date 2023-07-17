import styled from "@emotion/styled";
import NextLink from "next/link";

const onPrimary = "#361A7D";
const onPrimaryContainer = "#E8DDFF";
const bezier = "cubic-bezier(0, 0, 0.05, 0.97)";

const AnchorContainer = styled.a`
  display: flex;
  flex-shrink: 0;
  position: relative;
  // color: ${onPrimary};
  // transition: 0.4s color ${bezier} 0.05s;
  // &:before {
  //   content: "";
  //   position: absolute;
  //   background: #4c3494;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 1;
  //   transition: 0.4s ${bezier};
  //   transform-origin: left center;
  //   transform: scaleX(0);
  // }
  // &:hover {
  //   color: ${onPrimaryContainer};
  //   &:before {
  //     transform: scaleX(1);
  //   }
  // }
`;

const WebsiteIcon = () => {
  return (
    <NextLink href="/" passHref>
      <AnchorContainer>
        <div className="z-[2] flex place-items-center p-[0_0.4rem_0_0.2rem] py-0 pl-[0.2rem] pr-[0.4rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="relative -top-[5px] -mr-[6px] w-[3.5rem] transition-all duration-[220ms] group-[[data-shrink=true][data-mobile-nav=false]]/header:scale-[.70]"
            src="/favicon.svg"
            alt=""
          />
          <span className="origin-left text-[1.125rem] font-[600] leading-[1.2em] transition-all duration-[220ms] group-[[data-shrink=true][data-mobile-nav=false]]/header:scale-[.80] group-[[data-shrink=true]]/header:text-violet-200/80">
            La+
            <br />
            Fansite
          </span>
        </div>
      </AnchorContainer>
    </NextLink>
  );
};

export default WebsiteIcon;
