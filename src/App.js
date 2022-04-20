import { useEffect, useState } from "react";
import "./styles.css";

// we must define any asset in public folder only, because react starts reading the files from public folder
const url = "./data.json";

const App = () => {
  const [data, setData] = useState([]);

  const [isNetSalaryDisabled, setIsNetSalaryDisabled] = useState(false);
  const [isNetSalaryRadioChecked, setIsNetSalaryRadioChecked] = useState(false);

  const [isGrossSalaryDisabled, setIsGrossSalaryDisabled] = useState(false);
  const [isGrossSalaryRadioChecked, setIsGrossSalaryRadioChecked] = useState(
    false
  );

  // first way
  const getDataFromJson = () => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => {
        //  console.log(response);
        return response.json();
      })
      .then((dataInJson) => {
        //    console.log(dataInJson);
        setData(dataInJson);
      });
  };

  /*
  // second way
  const getDataFromJson = async () => {
    // console.log("hii");
    const response = await fetch(url, {
      // Adding method type
      method: "GET",

      // Adding body or contents to send
      // for get method dont need to send the body
      // body: JSON.stringify({
      //   title: "foo",
      //   body: "bar",
      //   userId: 1
      // }),

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const res = await response.json();
    // console.log(res);
    setData(res);
    // console.log(data);
  };

  */

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
      <br />
      <span>*******************************</span>
      <h2>Disable the text field on click of Respective Radio button</h2>
      <section>
        <form>
          <input
            type="radio"
            name="nsalary"
            checked={isNetSalaryRadioChecked ? "checked" : ""}
            onChange={() => {
              setIsNetSalaryDisabled(!isNetSalaryDisabled);
              setIsNetSalaryRadioChecked(!isNetSalaryRadioChecked);
            }}
          />
          Net Salary
          <input
            type="text"
            name="netsalary"
            placeholder="Enter Net Salary Here"
            disabled={isNetSalaryDisabled ? "disable" : ""}
          />
          <br />
          <br />
          <input
            type="radio"
            name="gsalary"
            checked={isGrossSalaryRadioChecked ? "checked" : ""}
            onChange={() => {
              setIsGrossSalaryDisabled(!isGrossSalaryDisabled);
              setIsGrossSalaryRadioChecked(!isGrossSalaryRadioChecked);
            }}
          />
          Gross Salary
          <input
            type="text"
            name="grosssalary"
            placeholder="Enter Gross Salary Here"
            disabled={isGrossSalaryDisabled ? "disable" : ""}
          />
        </form>
      </section>
    </div>
  );
};

export default App;
