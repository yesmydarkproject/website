import YesMyLink, { YesMyExternalLink } from "components/basic/YesMyLink";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] flex w-full flex-col place-content-center place-items-center px-2 pb-2 text-center text-[0.8rem] leading-[120%]">
      <p>
        &copy;&ensp;2021&ensp;YesMyDark Project&ensp;&ndash;&ensp;
        <YesMyLink>
          <YesMyExternalLink
            href="https://github.com/yesmydarkproject/website"
            rel="noopener noreferrer"
          >
            GitHub
          </YesMyExternalLink>
        </YesMyLink>
      </p>
      <div className="mt-1 flex flex-col text-[0.55rem] font-[200] sm:text-[0.6rem] sm:font-[300] md:text-[0.7rem]">
        <p>
          本サイトはカバー株式会社・ホロライブプロダクションとの提携関係、両組織からの承認、両組織への所属は一切ありません。
        </p>
        <p>
          使用しているコンテンツ
          <span className="text-[88%]">
            （イラストやテキストなどを含むがこれに限らない）
          </span>
          の著作権は、正当な権利を有する第三者または YesMyDark Project
          contributors に帰属します。
        </p>
      </div>
    </footer>
  );
};

export default Footer;
