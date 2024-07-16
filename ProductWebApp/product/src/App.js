import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
	const [columns, setColumns] = useState([]);
	const [records, setRecords] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(10);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = records.slice(
		indexOfFirstRecord,
		indexOfLastRecord
	);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const pageNumbers = [];
	for (
		let i = 1;
		i <= Math.ceil(records.length / recordsPerPage);
		i++
	) {
		pageNumbers.push(i);
	}

	const mapeoColumna = {
		idProduct: 'ID',
		nameProduct: 'Nombre del producto',
		priceProduct: 'Precio',
	};

	useEffect(() => {
		axios
			.get('https://localhost:7170/api/product')
			.then((res) => {
				setColumns(Object.keys(res.data[0]));
				setRecords(res.data);
			});
	}, []);
	return (
		<div className="container mt-3 w-50">
			<div className="text-start">
				<Link
					to="/create"
					className="btn btn-primary mb-3"
				>
					<i className="bi bi-plus-circle"></i>
					Agregar
				</Link>
			</div>
			<table className="table table-bordered table-sm">
				<thead className="table-dark text-center">
					<tr>
						{columns.map((c, i) => (
							<th key={i}>{mapeoColumna[c] || c}</th>
						))}
						<th className="w-25">Acciones</th>
					</tr>
				</thead>

				<tbody>
					{currentRecords.map((d, i) => (
						<tr key={i}>
							<td className="w-10 text-center">
								{d.idProduct}
							</td>
							<td className="w-50">{d.nameProduct}</td>
							<td className="w-10 text-center">
								{d.priceProduct.toFixed(2)}
							</td>
							<td className="w-10">
								<Link
									to={`/update/${d.idProduct}`}
									className="btn btn-sm btn-warning"
								>
									<i className="bi bi-pencil-square"></i>
									Actualizar
								</Link>

								<button
									onClick={(e) =>
										handleDelete(d.idProduct)
									}
									to="/delete"
									className="btn btn-sm ms-1 btn-danger"
								>
									<i className="bi bi-trash3-fill"></i>
									Eliminar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<nav>
				<ul className="pagination">
					{pageNumbers.map((number) => (
						<li
							key={number}
							className="page-item"
						>
							<button
								onClick={() => paginate(number)}
								className="page-link"
							>
								{number}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);

	function handleDelete(idProduct) {
		const conf = window.confirm('Quieres eliminar producto?');
		if (conf) {
			axios
				.delete(
					'https://localhost:7170/api/product/' + idProduct
				)
				.then((res) => {
					alert('Datos fueron eliminados');
					setRecords(
						records.filter(
							(record) => record.idProduct !== idProduct
						)
					);
				})
				.catch((err) => console.log(err));
		}
	}
}

export default App;
