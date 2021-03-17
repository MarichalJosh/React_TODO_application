import React, { useState } from "react";

export const TodoApp = () => {
	let [lista, setLista] = useState([]);
	const addTarea = tarea => {
		if (tarea.key === "Enter") {
			console.log(tarea);
			setLista([...lista, tarea.target.value]);
			console.log(lista);
		}
	};

	const listItems = () => {
		<li className="list-group-item">
			Hola
			<button className="btn btn-default btn-xs pull-right remove-item">
				<i className="fas fa-trash-alt text-danger mx-2"></i>
			</button>
		</li>;
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-6">
					<h1 className="text-muted">ToDos</h1>
					<input
						onKeyDown={addTarea}
						className="form-control"
						placeholder="What needs to be done?"></input>
					<ul className="list-group">{listItems}</ul>
				</div>
			</div>
		</div>
	);
};
