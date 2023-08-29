//This is a custom hook function with a function fetchApps
//The hook uses fetch function to make GET request to the specified url
const useFetchFunction = () => {
  const fetchApps = async (url, setApps) => {
    try {
      const response = await fetch(url);
      const jsonApps = await response.json();
      setApps(jsonApps);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return { fetchApps };
};
export default useFetchFunction;
