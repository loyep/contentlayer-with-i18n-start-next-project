import type { AppPath } from '@/types/Next';

enum ERoutesRoots {
  WEBSITE,
  BLOG,
  CATEGORY_ONE,
  CATEGORY_TWO
}
type RoutesRootsKeys = keyof typeof ERoutesRoots;

type TRoutesRoots = Record<RoutesRootsKeys, AppPath>;

const ROUTES_ROOTS_BASE = {
  WEBSITE: '/',
  BLOG: '/'
} satisfies Partial<TRoutesRoots>;

const blogRoutesBase = ROUTES_ROOTS_BASE.BLOG;

const BLOG_ROUTES_ROOTS = {
  CATEGORY_ONE: blogRoutesBase + 'category-one',
  CATEGORY_TWO: blogRoutesBase + 'category-two'
} satisfies Partial<TRoutesRoots>;

export const ROUTES_ROOTS = {
  ...ROUTES_ROOTS_BASE,
  ...BLOG_ROUTES_ROOTS
} satisfies TRoutesRoots;

export default ROUTES_ROOTS;
