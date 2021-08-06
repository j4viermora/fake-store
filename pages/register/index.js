import React from 'react';
import { useStoreContext } from '../../context/StoreContext';
import Layout from '../../ui/layout';
export default function Register() {
	const { dispatch } = useStoreContext();

	const handlerLogin = () => {
		dispatch({
			type: 'openModal',
		});
	};

	return (
		<Layout>
			<div className="section my-6">
				<h2 className="title is-2 has-text-centered">Register</h2>
				<div className="container is-flex is-justify-content-center">
					<div className="card is-rounded" style={{ width: '520px' }}>
						<div className="card-content">
							<div className="field">
								<label className="label">Name</label>
								<div className="control">
									<input className="input" type="text" placeholder="Name" />
								</div>
							</div>
							<div className="field">
								<label className="label">Email</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="Your Email"
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Password</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="Your Password"
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Confirm Password</label>
								<div className="control">
									<input className="input" type="text" placeholder="*******" />
								</div>
							</div>

							<div className="field">
								<div className="control">
									<label className="checkbox">
										<input type="checkbox" className="mr-1" /> I agree to the{' '}
										<a href="#">terms and conditions</a>
									</label>
								</div>
							</div>

							<div className="field is-grouped">
								<div className="control">
									<button onClick={handlerLogin} className="button is-primary">
										Submit
									</button>
								</div>
								<div className="control">
									<button className="button is-danger is-light">Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
