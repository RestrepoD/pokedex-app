import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { getPokemonTypes } from "../../../services/getPokemonTypes";
import "./FiltersForm.css";

const FiltersForm = ({ initialName, initialType }) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(initialName);
  const [typeValue, setTypeValue] = useState(initialType);

  function handleChange(e) {
    const newValue = e.target.value;
    setNameValue(newValue);
  }

  function handleTypeChange(e) {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
  }

  useEffect(() => {
    async function loadTypes() {
      const typeList = await getPokemonTypes();
      setTypes(typeList);
    }

    loadTypes();
  }, []);

  useEffect(() => {
    setNameValue(initialName);
  }, [initialName]);

  useEffect(() => {
    setTypeValue(initialType);
  }, [initialType]);

  return (
    <Form className="f_form">
      <h2>Search filters</h2>
      <div className="f_inputs_cont">
        <input
          value={nameValue}
          onChange={handleChange}
          type="text"
          placeholder="Search a Pokemon"
          name="pokemonName"
          className="f_input_name"
        />
        <select
          name="pokemonType"
          value={typeValue}
          onChange={handleTypeChange}
          className="f_type_select"
        >
          <option value="">all</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <button className="f_btn">Search</button>
    </Form>
  );
};

export default FiltersForm;
