import Table from "react-bootstrap/Table";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import DropDown from "../DropDown/DropDown";
import { BsX } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
function Search({ filterData }) {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [skill, setSkill] = useState([]);
  const [theme, setTheme] = useState([]);
  const [search, setSearch] = useState("");
  const removeItem = (item) => {
    var index = selectedFilter.indexOf(item);
    if (index !== -1) {
      selectedFilter.splice(index, 1);
      setSelectedFilter([...selectedFilter]);
    }
    index = country.indexOf(item);
    if (index !== -1) {
      country.splice(index, 1);
      setCountry([...country]);
    }
    index = theme.indexOf(item);
    if (index !== -1) {
      theme.splice(index, 1);
      setTheme([...theme]);
    }
    index = city.indexOf(item);
    if (index !== -1) {
      city.splice(index, 1);
      setCity([...city]);
    }
    index = skill.indexOf(item);
    if (index !== -1) {
      skill.splice(index, 1);
      setSkill([...skill]);
    }
  };

  useEffect(() => {
    setSelectedFilter([...country, ...city, ...skill, ...theme]);
    callFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, city, skill, theme, search]);

  const callFilter = () => {
    filterData({
      country: country,
      skill: skill,
      city: city,
      theme: theme,
      search: search,
    });
  };
  const handleChangeCountry = (e) => {
    setCountry(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangeCity = (e) => {
    setCity(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangeskill = (e) => {
    setSkill(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangetheme = (e) => {
    setTheme(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  return (
    <div>
      <Table
        striped
        bordered
        hover
        style={{ marginBottom: "0px", borderColor: "white" }}
      >
        <thead>
          <tr>
            <td>
              <BsSearch /> &nbsp;
              {/* <span style={{ fontSize: "14px", color: "#888" }}>
                Search mission...
              </span> */}
              <input
                type="text"
                placeholder="search"
                style={{
                  color: "gray",
                  borderRadius: "3px",
                  border: "1px solid  #D4D4D4",
                  height: "40px",
                  width: "90%",
                }}
                data-testid="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </td>
            <td style={{ borderColor: "white" }}>
              <DropDown
                name="Country"
                options={[
                  {
                    value: "Canada",
                    label: "Canada",
                  },
                  {
                    value: "Australia",
                    label: "Australia",
                  },
                  {
                    value: "Spain",
                    label: "Spain",
                  },
                  {
                    value: "United Kingdom",
                    label: "United Kingdom",
                  },
                  {
                    value: "South Africa",
                    label: "South Africa",
                  },
                  {
                    value: "France",
                    label: "France",
                  },
                  {
                    value: "United States",
                    label: "United States",
                  },
                  {
                    value: "Australia",
                    label: "Australia",
                  },
                  {
                    value: "Germany",
                    label: "Germany",
                  },
                ]}
                handleChange={handleChangeCountry}
                selected={country}
              />
              {/* <Form.Select
                name="select"
                title="country"
                
                className="border-0"
              >
                <option value></option>
                <option value="1">Active</option>
                <option value="2">InActive</option>
              </Form.Select> */}
            </td>
            <td>
              <DropDown
                name="City"
                options={[
                  {
                    value: "Toronto",
                    label: "Toronto",
                  },
                  {
                    value: "Melbourne",
                    label: "Melbourne",
                  },
                  {
                    value: "London",
                    label: "London",
                  },
                  {
                    value: "Barcelona",
                    label: "Barcelona",
                  },
                  {
                    value: "Berlin",
                    label: "Berlin",
                  },
                  {
                    value: "Sydney",
                    label: "Sydney",
                  },
                  {
                    value: "New York",
                    label: "New York",
                  },
                  {
                    value: "Paris",
                    label: "Paris",
                  },
                  {
                    value: "Cape Town",
                    label: "Cape Town",
                  },
                  {
                    value: "Hamburg",
                    label: "Hamburg",
                  },
                  {
                    value: "Munich",
                    label: "Munich",
                  },
                  {
                    value: "Cologne",
                    label: "Cologne",
                  },
                ]}
                handleChange={handleChangeCity}
                selected={city}
              />
            </td>
            <td>
              <DropDown
                name="Theme"
                options={[
                  {
                    value: "Environment",
                    label: "Environment",
                  },
                  {
                    value: "Tree Plantation",
                    label: "Tree Plantation",
                  },
                ]}
                handleChange={handleChangetheme}
                selected={theme}
              />
            </td>
            <td>
              <DropDown
                name="Skills"
                options={[
                  {
                    value: "Anthropology",
                    label: "Anthropology",
                  },
                  {
                    value: "Lap",
                    label: "Lap",
                  },
                ]}
                handleChange={handleChangeskill}
                selected={skill}
              />
            </td>
          </tr>
        </thead>
      </Table>
      {selectedFilter.map((item) => (
        <button
          className="btn bg-transparent "
          style={{
            borderColor: "gray",
            borderRadius: "20px",
            fontSize: "8px",
            marginRight: "5px",
            padding: "3px 7px",
          }}
          onClick={() => removeItem(item)}
        >
          {item}
          <BsX />
        </button>
      ))}
      {selectedFilter.length > 0 && (
        <button
          className="btn bg-transparent"
          style={{
            borderColor: "gray",
            borderRadius: "20px",
            fontSize: "8px",
            marginRight: "5px",
            padding: "3px 7px",
          }}
          onClick={() => {
            setSelectedFilter([]);
            setCountry([]);
            setCity([]);
            setSkill([]);
            setTheme([]);
          }}
        >
          clear all
        </button>
      )}
    </div>
  );
}

export default Search;
