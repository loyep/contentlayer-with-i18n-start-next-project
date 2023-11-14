import { stackMiddlewares } from '@/lib/next';
import withI18n from '@/middlewares/withI18n';
import type { MiddlewareFactory } from './types/Next';

const MAIN_CHAIN: MiddlewareFactory[] = [withI18n];

export const mainMiddlewaresChain = stackMiddlewares(MAIN_CHAIN);
