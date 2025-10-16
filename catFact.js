const getCatFact = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat fact:", error);
    throw error;
  }
};

export default getCatFact;
