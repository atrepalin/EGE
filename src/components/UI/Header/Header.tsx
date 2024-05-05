import { FC, useState } from 'react'
import GetWallet from '../GetWallet/GetWallet'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='sm:flex md:flex lg:flex xl:flex xl:justify-between lg:justify-between mt-2 py-5 px-10 sm:justify-between md:justify-between items-center border-b border-black/25 border-solid'>
			<Logo />

			{/* Burger Menu */}
			<div className='sm:hidden md:hidden flex justify-center items-center mt-5'>
				<button onClick={toggleMenu} className='focus:outline-none'>
					<svg
						className='w-6 h-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						{isMenuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>
			</div>

			<Links
				className={`sm:flex md:flex lg:flex xl:flex justify-center items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row ${
					isMenuOpen ? 'block' : 'hidden'
				}`}
			/>

			<GetWallet
				className={`sm:flex md:flex lg:flex xl:flex justify-center items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row ${
					isMenuOpen ? 'block' : 'hidden'
				}`}
			/>
		</div>
	)
}

export default Header
