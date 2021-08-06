import React, { useEffect, useState } from 'react';
import Favorite from '../../Icons/Favorite';
import Bag from '../../Icons/Bag';
import Link from 'next/link';
import { useStoreContext } from '../../../context/StoreContext';
import Cart from '../Cart';

export default function Navbar() {
	const user = "Sorry I don't recognize you";
	const [open, setOpen] = useState(false);

	const handleOpenMenu = () => {
		setOpen(!open);
	};

	const {
		storeState: { cart, items },
	} = useStoreContext();

	return (
		<>
			<nav
				className="navbar is-primary"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="container">
					<div className="navbar-brand">
						<Link href="/">
							<a className="navbar-item">
								<strong>Fake Store</strong>
							</a>
						</Link>
						<p className="navbar-item is-hidden-desktop">Search</p>
						<div className="navbar-item is-hidden-desktop">
							<div onClick={() => console.log('Agregado lista de deseos')}>
								<Favorite width={35} height={35} color="white" />
							</div>
						</div>
						<div className="navbar-item is-hidden-desktop">
							<div onClick={() => console.log('Carrito')}>
								<Bag color="white" height={35} width={35} />
							</div>
						</div>
						<a
							role="button"
							className={`navbar-burger ${open && 'is-active'}`}
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
							onClick={handleOpenMenu}
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div
						id="navbarBasicExample"
						className={`navbar-menu  ${open && 'is-active'}`}
					>
						<div className="navbar-start">
							<a className="navbar-item">Tienda</a>
							{/* <a className="navbar-item">Categorías</a> */}

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
							<form className="navbar-item is-hidden-mobile">
								<input
									placeholder="Buscar tus productos"
									className="input is-primary"
									onChange={() =>
										alert('Sorry this function still is development')
									}
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

							<div className="navbar-item has-dropdown is-hoverable is-hidden-mobile">
								<div className="navbar-item has-dropdown is-hoverable">
									<a className="navbar-link">
										<Favorite width={35} height={35} color="white" />
									</a>
									<div className="navbar-dropdown">
										{items ? (
											cart?.map(
												({ id, image, title, price, countProduct }, index) => (
													<Cart
														id={id}
														image={image}
														title={title}
														price={price}
														countProduct={countProduct}
														index={index}
													/>
												)
											)
										) : (
											<>
												<a className="navbar-item is-primary">
													<div>
														<p>Not item in wishlist </p>
													</div>
												</a>
												<hr className="navbar-divider" />
											</>
										)}
									</div>
								</div>
							</div>
							<div className="navbar-item has-dropdown is-hoverable is-hidden-mobile">
								<div className="navbar-item has-dropdown is-hoverable">
									<a className="navbar-link">
										<Bag color="white" height={35} width={35} />
									</a>
									<div className="navbar-dropdown">
										{items ? (
											cart?.map(
												({ id, image, title, price, countProduct }, index) => (
													<Cart
														id={id}
														image={image}
														title={title}
														price={price}
														countProduct={countProduct}
														index={index}
													/>
												)
											)
										) : (
											<>
												<a className="navbar-item is-primary">
													<div>
														<p>Not item in the cart</p>
													</div>
												</a>
												<hr className="navbar-divider" />
											</>
										)}
									</div>
								</div>
							</div>
							<div className="navbar-item is-hidden-mobile">{user}</div>
						</div>

						<div className="navbar-end">
							<div className="navbar-item has-dropdown is-hoverable">
								<a className="navbar-link">Edentify</a>
								<div className="navbar-dropdown">
									<Link href="/register">
										<a className="navbar-item is-primary">
											<strong>Register</strong>
										</a>
									</Link>
									<hr className="navbar-divider" />
									<Link href="/login">
										<a className="navbar-item is-light">Login</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
