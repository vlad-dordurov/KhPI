export const isLogin = () => {
  const hasToken = Boolean(localStorage.getItem('token'));

  return hasToken;
}