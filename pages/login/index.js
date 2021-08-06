import React from 'react';
import Layout from '../../ui/layout';
export default function Login() {
	return (
		<Layout>
			<div className="section my-6">
				<h2 className="title is-2 has-text-centered">Login</h2>
				<div className="container is-flex is-justify-content-center">
					<div
						className="card is-rounded"
						style={{ width: '520px', height: '45vh' }}
					>
						<div className="card-content">
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

							<div className="field mt-5">
								<div className="control">
									<label className="checkbox">
										<input type="checkbox" className="mr-1" /> I agree to the{' '}
										<a href="#">terms and conditions</a>
									</label>
								</div>
							</div>

							<div className="field is-grouped mt-5">
								<div className="control">
									<button className="button is-primary">Login</button>
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
