import { NextSeo } from "next-seo";

const pageTitle = "La+Profile";
const url = "https://yesmydark.com/profile";

const Profile = () => {
  return (
    <>
      <NextSeo
        title={pageTitle}
        canonical={url}
        openGraph={{
          url,
          title: pageTitle,
        }}
      />
      <div className="flex min-h-[30vh] place-items-start justify-center">
        <div className="h-[200vh] p-[2rem] text-center">
          <h1 className="text-3xl font-bold leading-snug md:text-4xl md:leading-tight">
            La+Profile
          </h1>
          <div className="mt-8">工事中</div>
          <div className="mt-8">
            公式プロフィール・自称プロフィール・視聴者からの印象・非公式ウェブアンケート（予定）など
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
