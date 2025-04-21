import { Helmet } from "react-helmet-async";

export const MetaTag = ({ title, description }) => {
  return (
    <Helmet prioritizeSeoTags>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaTag;
