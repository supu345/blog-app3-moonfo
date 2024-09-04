import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: `/blog/1` },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help childeren get better",
    createdAt: "2024-09-02T15:35:35",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help childeren get better",
    createdAt: "2024-09-02T15:35:35",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help childeren get better",
    createdAt: "2024-09-02T15:35:35",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help childeren get better",
    createdAt: "2024-09-02T15:35:35",
  },
];

const tagsData = [
  "Medical",
  "LifeStyles",
  "Learn",
  "Health",
  "Food",
  "Education",
];
const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img className="rounded-xl w-full" src={images.Post1Image} alt="" />
          <Link
            to={`/blog?category=selectedCategory`}
            className="text-primary text-sm font-roboto inline-block md:text-base"
          >
            Education
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Lorem ipsum dolor sit amet, consectetur ad
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              assumenda consequuntur fugiat quos ducimus, error ad tempore
              minus, fugit dicta magni dolorem voluptate? Vel obcaecati quod,
              est consequatur placeat minima ipsum vitae? Magni, temporibus.
              Mollitia voluptatum dolores, obcaecati possimus animi, repudiandae
              deserunt, dolore eligendi facere laudantium nam quam eius alias?
              est consequatur placeat minima ipsum vitae? Magni, temporibus.
              Mollitia voluptatum dolores, obcaecati possimus animi, repudiandae
              deserunt, dolore eligendi facere laudantium nam quam eius alias?
            </p>
          </div>
          <CommentsContainer className="mt-10" logginedUserId="a" />
        </article>
        <div>
          <SuggestedPosts
            header="Latest Article"
            posts={postsData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          />
          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            <SocialShareButtons
              url={encodeURI("https://www.facebook.com/")}
              title={encodeURIComponent(
                "client-side and Server-side explanation"
              )}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
