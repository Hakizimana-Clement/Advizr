// ############### Update url query params ##################
export const updateURL = (key, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState({}, document.title, url.href);
};
