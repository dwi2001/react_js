import React from 'react';

import './Input.scss';

const Input = props => {
	const { errors, reference, readOnly, disabled, ...otherProps } = props;

	return (
		<>
			<input
				className={'input' + (errors?.isError ? ' error' : '')}
				type="text"
				ref={reference}
				disabled={disabled}
				readOnly={readOnly}
				{...otherProps}
			/>
			{errors?.isError === true && (
				<span className="error">{errors?.errorMessage}</span>
			)}
		</>
	);
};

export default Input;
