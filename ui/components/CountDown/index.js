import React from 'react';
import Image from 'next/image';

export default function CountDown() {
	return (
		<>
			<div className="is-flex is-justify-content-center">
				<div className="card is-flex">
					<div className="is-flex is-align-items-center is-justify-content-center py-5 px-5">
						<Image src="/vercel.svg" height={70} width={70} />
					</div>
					<div className="py-5 pr-5">
						<div className="is-flex is-justify-content-center">
							<span className="is-size-3 mr-5">1:</span>
							<span className="is-size-3 mr-5">2:</span>
							<span className="is-size-3 mr-5">56</span>
						</div>
						<div>
							<span className="is-size-7 mr-5">Días</span>
							<span className="is-size-7 mr-5">Horas</span>
							<span className="is-size-7 mr-5">Minutos</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
