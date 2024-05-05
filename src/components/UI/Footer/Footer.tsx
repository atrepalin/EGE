import { FC } from 'react'
import Logo from '../Logo/Logo'

const date = new Date()

const Footer: FC = () => {
	return (
		<div className='flex flex-row items-center justify-between h-40 py-5 px-10'>
			<Logo />
			<p>&copy; {date.getFullYear()} Bivreost. All rights reserved</p>
		</div>
	)
}

export default Footer
