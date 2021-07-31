import React from 'react';
import Image from 'next/image';
import Favorite from '../../Favorite';

export default function Navbar() {
	return (
		<>
			<nav
				className="navbar container"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
						{/* <img
							src="https://bulma.io/images/bulma-logo.png"
							width="112"
							height="28"
						/> */}
						<strong>Store Fake</strong>
					</a>

					<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item">Tienda</a>
						<a className="navbar-item">Categorías</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Más</a>

							<div className="navbar-dropdown">
								<a className="navbar-item">Sobre nosotros</a>
								<a className="navbar-item">Trabaja con nosotros</a>
								<a className="navbar-item">Contacto</a>
								<hr className="navbar-divider" />
								<a className="navbar-item">Reporta un problema</a>
							</div>
						</div>
						<form className="navbar-item">
							<input
								placeholder="Buscar tus productos"
								className="input is-primary"
							/>
						</form>
						<div className="navbar-item">
							<div className="select is-primary">
								<select>
									<option>Todas las categorias</option>
									<option>Categoria 1</option>
									<option>Categoria 2</option>
								</select>
							</div>
						</div>
						<div className="navbar-item">
							<button
								style={{
									border: 'none',
									background: 'none',
									cursor: 'pointer',
								}}
								onClick={() => console.log('Agregado')}
							>
								<Favorite width={35} height={35} color="gray" />
							</button>
						</div>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a className="button is-primary">
									<strong>Registro</strong>
								</a>
								<a className="button is-light">Inicio de sesión</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
