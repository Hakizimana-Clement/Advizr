const apiRequest = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (response.ok) {
    const data = await response.json();
    return data.slip;
  } else {
    throw new Error("Unable to fetch Adive ❌");
  }
};

export { apiRequest as default };
