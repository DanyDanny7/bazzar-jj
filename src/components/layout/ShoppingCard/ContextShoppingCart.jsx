import React, { createContext, useState, useEffect } from 'react';
import find from "lodash/find";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";

const ShoppingCartProvider = ({ children }) => {
	const [cartList, setCartList] = useState({ data: [], loaded: false });
	const key_storage = "cart-bazar-jj"

	const addItemToCart = (product) => {
		try {
			const lista = cartList.data;
			let newList = [];
			const duplicate = find(lista, ({ key }) => key === product.key)
			if (!isEmpty(duplicate)) {
				const indexToReplace = lista.findIndex(({ key }) => key === product.key);
				if (indexToReplace !== -1) {
					newList = [...lista];
					newList.splice(indexToReplace, 1, product);
				}
			} else {
				newList = [...cartList.data, product]
			}
			localStorage.setItem(key_storage, JSON.stringify(newList))
			setCartList({ data: newList, loaded: true })
			return true;
		} catch (error) {
			return false;
		}
	}

	const deleteItemToCart = (product) => {
		const newList = filter(cartList.data, ({ key }) => key !== product.key)
		localStorage.setItem(key_storage, JSON.stringify(newList))
		setCartList({ data: newList, loaded: true })
	}

	const reloadItems = () => {
		try {
			const oldList = JSON.parse(localStorage.getItem(key_storage)) || [];
			setCartList({ data: oldList, loaded: true })
		} catch (error) {
			console.log(error)
			setCartList({ data: [], loaded: false })
		}
	}

	const updateList = (newList) => {
		localStorage.setItem(key_storage, JSON.stringify(newList))
		setCartList({ data: newList, loaded: true })
	}

	useEffect(() => {
		reloadItems()
	}, [])


	return (
		<ShoopingCartContext.Provider value={{ cartList, addItemToCart, reloadItems, deleteItemToCart, updateList }}>
			{children}
		</ShoopingCartContext.Provider>
	);
}

export const ShoopingCartContext = createContext();
export default ShoppingCartProvider;