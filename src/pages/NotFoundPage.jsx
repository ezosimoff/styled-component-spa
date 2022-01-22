import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	& h1 {
		font-size: 44px;
	}
`;

const NotFoundPage = () => {
	return (
		<Wrapper>
			<h1>404</h1>
			<p>Page not found</p>
		</Wrapper>
	);
};

export default NotFoundPage;
