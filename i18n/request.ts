import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
 
export default getRequestConfig(async () => {
  const store = await cookies();
  let locale;
  const localeCookie = store.get('ren_portfolio_locale');
 
  if (localeCookie) {
    locale = localeCookie.value;
  }else{
    locale = 'pt';
  }
 
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});