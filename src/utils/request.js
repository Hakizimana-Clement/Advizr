const request = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    return data.slip;
  } else {
    throw new Error("Unable to fetch Adive ❌");
  }
};

export { request as default };
