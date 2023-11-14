import { mainMiddlewaresChain } from '@/middlewaresChain';

export const config = { matcher: ['/((?!api|static|_next|.*\\..*).*)'] };

export default mainMiddlewaresChain;
