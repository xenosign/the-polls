import React from "react";

useEffect(() => {
  setGardenEmail(emailLocation);

  async function fetchData() {
    const result = await axios(`${API.SNOWMAN}${gardenEmail}`);
    if (result) {
      setData(result.data.snowmans);
      setNickname(result.data.nickname);
    }
  }

  if (gardenEmail !== undefined) {
    fetchData();
    setConnect(true);
  }
}, [gardenEmail]);

export default function main() {
  return <div>main</div>;
}
