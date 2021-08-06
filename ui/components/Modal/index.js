import React from 'react';

export default function Modal({
	isActive = false,
	title = '',
	content,
	buttonTextOne = '',
	buttonTextTwo = '',
	buttonClose = () => {},
	clickActionOne = () => {},
	clickActionTwo = () => {},
}) {
	return (
		<div className="section">
			<div className={`modal ${isActive && 'is-active'}`}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">{title}</p>
						<button
							onClick={buttonClose}
							className="delete"
							aria-label="close"
						></button>
					</header>
					<section className="modal-card-body">{content}</section>
					<footer className="modal-card-foot">
						<button onClick={clickActionOne} className="button is-success">
							{buttonTextOne}
						</button>
						<button onClick={clickActionTwo} className="button">
							{buttonTextTwo}
						</button>
					</footer>
				</div>
			</div>
		</div>
	);
}
