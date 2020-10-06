import React, {useState} from 'react'
import PropTypes from 'prop-types';


//componente pensado para Form o cuando la persona esccriba algo.

const AddCategory = ({ setCategories }) => {
		const  [inputValue, setInputValue] = useState('');//''por defec - vacío es undefined
		//si lo dejo vacío es undefined
		const handleInputChange = (e) => {
			setInputValue(e.target.value)//esta es la f() que va actualizar el estado
		}

		const handleSubmit = (e) => {
			e.preventDefault();
			// console.log('Submit Hecho');
			if (inputValue.trim().length > 2) {
				setCategories(cate => [ inputValue, ...cate, ]);
				setInputValue('');
			}
			

		}

    return (
        
				<form onSubmit={ handleSubmit }>
					
					<input 
						type="text" 
						value={ inputValue }
						onChange={ handleInputChange }//esto se va a disparar cada vez que la caja de texto cambie y en onChange.
						//dispara un cambio
					/>
				</form>
        
    )
}


AddCategory.propTypes = {
	setCategories : PropTypes.func.isRequired
}

export default AddCategory;

