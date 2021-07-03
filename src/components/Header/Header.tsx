import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { ImLinkedin, ImGithub, ImFacebook } from 'react-icons/im';

import { Container } from '../Layout/LayoutStyle';

export const HeaderWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 2rem 0;
`;

export const NavItems = styled.div<{ flex?: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;

	flex: ${({ flex }) => flex};
`;

export const NavItem = styled.div<{ color?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 2rem;
	color: ${({ color }) => color};

	transition: 0.2s ease-in-out all;

	&:hover {
		color: cyan;
	}
`;

export const LogoLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;

	transition: 0.2s ease-in-out all;

	&:hover {
		color: orangered;
	}
`;

const headers = [
	{ name: 'Projects', link: 'projects' },
	{ name: 'Technologies', link: 'tech' },
	{ name: 'About', link: 'about' },
];

const socials = [
	{
		name: 'Linkdin',
		link: 'https://linkedin.com/in/adiat-hasan-1924681b0',
		color: '#7ab3ff',
		comp: <ImLinkedin size='2.5rem' />,
	},
	{
		name: 'Github',
		link: 'https://github.com/adiathasan',
		comp: <ImGithub size='2.5rem' />,
	},
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/adiathasan.ratul',
		color: '#358bfa',
		comp: <ImFacebook size='2.5rem' />,
	},
];

const Header: React.FC = () => {
	return (
		<Container>
			<HeaderWrapper>
				<NavItems flex={1}>
					<NavItem>
						<Link href='#me' passHref>
							<LogoLink>
								<DiCssdeck size='3rem' /> <span>Portfolio</span>
							</LogoLink>
						</Link>
					</NavItem>
				</NavItems>

				<NavItems flex={2}>
					{headers.map((header, i) => (
						<NavItem key={i + header.name}>
							<Link href={`#${header.link}`}>{header.name}</Link>
						</NavItem>
					))}
				</NavItems>
				<NavItems flex={2}>
					{socials.map((header, i) => (
						<NavItem key={i + header.name} color={header.color}>
							<a href={`${header.link}`} target='_blank' rel='noreferrer'>
								{header.comp}
							</a>
						</NavItem>
					))}
				</NavItems>
			</HeaderWrapper>
		</Container>
	);
};

export default Header;
