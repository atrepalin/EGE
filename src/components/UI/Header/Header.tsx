import { FC } from 'react'
import Logo from '../Logo/Logo'
import Links from '../Links/Links'

const Header: FC = () => {
	return (
		<div className='flex flex-row justify-between mt-2 py-5 px-10 '>
			<Logo />
			<Links />
		</div>
	)
}

export default Header
