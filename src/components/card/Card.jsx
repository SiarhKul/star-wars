import React, { useCallback } from "react";
import { getAbbreviation } from "../../utils";

export const Card = React.memo(
	({ uniqueName, card, BodyComponent, onUniqueQueryParam }) => {
		const setUniqueQueryParam = useCallback(() => {
			onUniqueQueryParam(card);
		}, []);

		
		return (
			<div className="card-wrapper">
				<div className="card" onClick={setUniqueQueryParam}>
					<div className="avatar">
						<div className="avatar__abbr">{getAbbreviation(uniqueName)}</div>
					</div>
					<BodyComponent card={card} />
				</div>
			</div>
		);
    }
);
