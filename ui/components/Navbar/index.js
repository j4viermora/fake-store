import React from 'react';
import Favorite from '../../Icons/Favorite';
import Bag from '../../Icons/Bag';

export default function Navbar() {
	const button = {
		border: 'none',
		background: 'none',
		cursor: 'pointer',
	};

	return (
		<>
			<nav
				className="navbar is-primary"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="container">
					<div className="navbar-brand">
						<a className="navbar-item" href="#">
							<strong>Fake Store</strong>
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
										<option>Electronics</option>
										<option>Jewelery</option>
										<option>Women's clothing</option>
										<option>Men's clothing</option>
									</select>
								</div>
							</div>
							<div className="navbar-item">
								<button
									style={button}
									onClick={() => console.log('Agregado lista de deseos')}
								>
									<Favorite width={35} height={35} color="white" />
								</button>
							</div>
							<div className="navbar-item">
								<button style={button} onClick={() => console.log('Carrito')}>
									<Bag color="white" height={35} width={35} />
								</button>
							</div>
						</div>

						<div className="navbar-end">
							<div className="navbar-item has-dropdown is-hoverable">
								<a className="navbar-link">Edentificate</a>
								<div className="navbar-dropdown">
									<a className="navbar-item is-primary">
										<strong>Registro</strong>
									</a>
									<hr className="navbar-divider" />
									<a className="navbar-item is-light">Inicio de sesión</a>
								</div>
							</div>
							<div className="navbar-item"></div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
