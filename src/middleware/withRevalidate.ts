import { merge } from 'lodash';
import { GetStaticProps, GetStaticPropsContext } from 'next';

export function withRevalidate(
  cb?: GetStaticProps,
  revalidate = Number(process.env.PAGE_PROPS_REVALIDATE ?? 0)
) {
  return async (ctx: GetStaticPropsContext) => {
    return merge(cb ? await cb(ctx) : {}, { revalidate });
  };
}
