import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

function Edit() {
	const {id} = useParams();
	const [data, setData] = useState({
		idProduct: '',
		nameProduct: '',
		priceProduct: '',
	});
	const [errors, setErrors] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get('https://localhost:7170/api/product/' + id)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
		const newErrors = {};
		if (!data.nameProduct) {
			newErrors.nameProduct =
				'El nombre del producto para actualizar';
		}
		if (!data.priceProduct) {
			newErrors.priceProduct =
				'El precio del producto para actualizar';
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		axios
			.put('https://localhost:7170/api/product/' + id, data)
			.then((res) => {
				alert('Datos actualizado exitosamente');
				navigate('/');
			});
	}

	return (
		<div className="d-flex w-100 vh-100 justify-content-center align-items-center">
			<div className="w-50 border bg-light p-5">
				<form onSubmit={handleSubmit}>
					<h3 className="text-center mt-1 mb-4">
						Editar producto
					</h3>
					<div>
						<label htmlFor="idProduct">ID</label>
						<input
							type="text"
							disabled
							name="idProduct"
							value={data.idProduct}
							className="form-control"
						/>
					</div>
					<div>
						<label htmlFor="nameProduct">Name:</label>
						<input
							type="text"
							name="nameProduct"
							value={data.nameProduct}
							className="form-control"
							onChange={(e) => {
								setData({
									...data,
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
						<label htmlFor="priceProduct">
							Price product:
						</label>
						<input
							type="text"
							name="priceProduct"
							value={data.priceProduct}
							className="form-control"
							onChange={(e) => {
								setData({
									...data,
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
						Actualizar
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

export default Edit;
