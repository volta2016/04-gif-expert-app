import React, { useState } from "react";
import PropTypes from "prop-types";
import btnSearch from "../assets/static/search.svg";

//componente pensado para Form o cuando la persona esccriba algo.

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState(""); //''por defec -  si lo dejo vacío es undefined
	const handleInputChange = (e) => {
		setInputValue(e.target.value); //f() que va actualizar el estado
		// console.log('handleInputChange ok');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('Submit Hecho', inputValue);
		if (inputValue.trim().length > 2) {
			setCategories((cate) => [inputValue, ...cate]);
			setInputValue("");
		}
	};

	const handleClear = () => {
		setCategories([]);
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>{inputValue}</p>
			<div className="search">
				<input type="text" value={inputValue} onChange={handleInputChange} />

				<button type="submit" onChange={handleSubmit}>
					<img
						className="search__btn"
						src={`.${btnSearch}`}
						alt="button search"
					/>
				</button>
			</div>
			<button className="search__btn--clear" onClick={handleClear}>
				Clear Gifs
			</button>
		</form>
	);
};

{
	/* va a disparar cada vez que la caja de texto cambie y en onChange.
						dispara un cambio */
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
