import styled from "@emotion/styled";
import Link from "next/link";

import YesMyLink, {
  YesMyExternalLink,
  YesMyLinkButton,
} from "components/basic/YesMyLink";

const Video = styled.video``;

// const primary = "#CEBDFF";
// const onPrimary = "#361A7D";

const Page404 = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Video
          src="/laplus/sleepy.mp4"
          muted
          autoPlay
          loop
          playsInline
          preload="none"
        />
      </div>
      <p className="mt-2 text-center text-xs leading-normal">
        <YesMyLink>
          <YesMyExternalLink href="https://twitter.com/LaplusDarknesss/status/1465432692636327940">
            Laplus from her Twitter
          </YesMyExternalLink>
        </YesMyLink>
      </p>

      <div className="my-2">
        <h2 className="text-center text-3xl font-bold leading-snug md:text-4xl md:leading-tight">
          404: Not found
        </h2>

        <div className="my-4 text-center">
          <YesMyLinkButton>
            <Link href="/" legacyBehavior={false}>
              戻る
            </Link>
          </YesMyLinkButton>
        </div>
      </div>
    </>
  );
};

export default Page404;
