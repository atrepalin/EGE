import { FC } from 'react'

const Logo: FC = () => {
	return (
		<div className='flex flex-row justify-center items-center cursor-pointer'>
			<img
				className='w-[35px] lg:w-[45px]'
				src='/icons/logo/bivreost.svg'
				alt='Logo'
			/>
			<p className='text-3xl ml-2'>Bivreost</p>
		</div>
	)
}

export default Logo
