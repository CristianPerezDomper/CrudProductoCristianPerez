import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Add() {
	const [inputData, setInputData] = useState({
		nameProduct: '',
		priceProduct: '',
	});
	const [errors, setErrors] = useState('');
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		const newErrors = {};
		if (!inputData.nameProduct) {
			newErrors.nameProduct =
				'El nombre del producto es obligatorio';
		}
		if (!inputData.priceProduct) {
			newErrors.priceProduct =
				'El precio del producto es obligatorio';
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		axios
			.post('https://localhost:7170/api/product', inputData)
			.then((res) => {
				alert('Producto registrado exitosamente!');
				navigate('/');
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="d-flex w-100 vh-100 justify-content-center align-items-center">
			<div className="w-50 border bg-light p-5">
				<form onSubmit={handleSubmit}>
					<h3 className="text-center mt-1 mb-4">
						Registrar producto
					</h3>
					<div>
						<label
							htmlFor="nameProduct"
							className="mb-3"
						>
							Nombre del producto:
						</label>
						<input
							type="text"
							name="name"
							className="form-control"
							onChange={(e) => {
								setInputData({
									...inputData,
									nameProduct: e.target.value,
								});
								setErrors((prev) => ({
									...prev,
									nameProduct: '',
								}));
							}}
						/>
						{errors.nameProduct && (
							<p className="text-danger">
								{errors.nameProduct}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="priceProduct"
							className="mb-3 mt-3"
						>
							Precio del producto:
						</label>
						<input
							type="text"
							name="priceProduct"
							className="form-control"
							onChange={(e) => {
								setInputData({
									...inputData,
									priceProduct: e.target.value,
								});
								setErrors((prev) => ({
									...prev,
									priceProduct: '',
								}));
							}}
						/>
						{errors.priceProduct && (
							<p className="text-danger">
								{errors.priceProduct}
							</p>
						)}
					</div>
					<br />
					<button className="btn btn-success">
						Guardar
					</button>
					<button
						className="btn btn-secondary ms-1"
						onClick={() => navigate('/')}
					>
						Volver
					</button>
				</form>
			</div>
		</div>
	);
}

export default Add;
