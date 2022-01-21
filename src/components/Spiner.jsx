import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background: rgb(0 0 0 / 46%);
	position: fixed;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`;

const Spiner = () => {
	return (
		<Wrapper>
			<div className='lds-ellipsis'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Wrapper>
	);
};

export default Spiner;
