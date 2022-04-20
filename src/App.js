import { useEffect, useState } from "react";
import "./styles.css";

const url = "./data.json";

const App = () => {
  const [data, setData] = useState([]);
  const getDataFromJson = async () => {
    // console.log("hii");

    const response = await fetch(url);
    const res = await response.json();
    // console.log(res);

    setData(res);
    // console.log(data);
  };

  useEffect(() => {
    getDataFromJson();
  }, []);

  return (
    <div>
      <h2>Fetch data from json</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Designation</td>
            <td>Address</td>
            <td>Company</td>
          </tr>
        </thead>

        {data.length > 0
          ? data.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.about}</td>
                    <td>{item.address}</td>
                    <td>{item.company}</td>
                  </tr>
                </tbody>
              );
            })
          : ""}
      </table>
    </div>
  );
};

export default App;
