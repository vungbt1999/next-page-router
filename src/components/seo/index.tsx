import Head from 'next/head';

export type SEOData = {
  siteName?: string;
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  robots?: string;
  viewport?: string;
  canonicalUrl?: string;
};

export function SEO({
  siteName,
  title,
  description,
  image,
  keywords,
  robots,
  viewport,
  canonicalUrl
}: Readonly<SEOData>) {
  return (
    <Head>
      <title>{title}</title>
      {viewport && <meta name="viewport" content={viewport} />}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {robots && <meta name="robots" content={robots} />}

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:description" content={description} />
      {keywords && <meta property="og:keywords" content={keywords} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={siteName} />
      {image && (
        <>
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content="Jobcadu" />
        </>
      )}
    </Head>
  );
}
