import React from 'react';
import { seeProductsHandler } from '../../../context/actions/ui';
import { useStoreContext } from '../../../context/StoreContext';

export default function FilterProducts() {
	return (
		<>
			<h3 className="title is-4">Filters</h3>
			<hr />
			<h4 className="title is-6">Filter price</h4>
			<form className="control">
				<div className="is-flex is-aling-items-center">
					<input value="10" className="input" type="text" />
					<p className="title is-4 mx-2">-</p>
					<input value="100" className="input" type="text" />
				</div>
				<div className="is-flex is-justify-content-flex-end mb-3">
					<button type="submit" className="button is-primary">
						Filter
					</button>
				</div>
				<div>
					<input
						style={{ width: '100%' }}
						value="90"
						type="range"
						min="10"
						max="100"
					/>
				</div>
			</form>
		</>
	);
}

export function SortProducts() {
	const {
		storeState: { seeProducts },
		dispatch,
	} = useStoreContext();

	const handleSort = ({ target }) => {
		dispatch(seeProductsHandler(target.value));
	};

	return (
		<div className="is-flex is-justify-content-space-between">
			<h3 className="title is-4 is-flex-grow-5">Products</h3>
			<div className="is-flex is-justify-content-space-evenly is-flex-grow-1">
				<div class="control">
					<div class="select is-primary">
						<select value={seeProducts} onChange={handleSort}>
							<option value={5}>See 5</option>
							<option value={10}>See 10</option>
							<option value={20}>See 20</option>
						</select>
					</div>
				</div>
				<div class="control">
					<div class="select is-info">
						<select>
							<option> Sort by default</option>
							<option> Sort by low price</option>
							<option> Sort by high price</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}
