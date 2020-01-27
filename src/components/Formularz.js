import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Formularz = ({name, ...props}) => {
    const [shopList, updateShopList] = useState([
        {
            name: "sok pomarancowy",
            description: "tymbark w kartonie"
        }
    ]);
    const [inputNameValue, inputNameValueUpdate] = useState("sadasd");
    const [inputDescriptionValue, inputDescriptionValueUpdate] = useState("");

    function updateProductList() {
        const newProduct = {name: inputNameValue, description: inputDescriptionValue};
        updateShopList([...shopList, newProduct]);
        inputNameValueUpdate('');
        inputDescriptionValueUpdate('')
    }

    const productList = shopList.map((item, index) =>
        <li key={index}>
            <div className="productImages"></div>
            <div className="productTitle">{item.name} <div className="productDiscription">{item.description}</div></div>
        </li>
    );
 
    return (
        <div className="formComponents">
            <h2>{name}</h2>
            <ul>
                {productList}
            </ul>
            <div className="inputWrapper">
                <FormInput name="title" placeholder="nazwa produktu" inputValue={inputNameValue} onChange={event => inputNameValueUpdate(event.target.value)}/>
                <FormInput name="description" placeholder="dodatkowe informacje" inputValue={inputDescriptionValue} onChange={event => inputDescriptionValueUpdate(event.target.value)}/>
                <input type="submit" value="Dodaj" onClick={updateProductList} ></input>
            </div>
        </div>
    );
}


Formularz.propTypes = {
    name: PropTypes.string,
} 

Formularz.defaultProps = {
    name: 'Lista zakupów',
}   

const FormInput = ({name, placeholder, inputValue, onChange, ...props}) => {
    return(
        <input type="text" placeholder={placeholder} name={name} value={inputValue} onChange={onChange} ></input>
    )
}

export default Formularz;
