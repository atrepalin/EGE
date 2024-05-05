import { FC } from 'react'

const Statistics: FC = () => {
	return (
		<div className='flex flex-row justify-between items-baseline mt-10 min-w-[700px] text-center'>
			<div className='flex flex-col justify-center items-center max-w-[160px]'>
				<p className='text-4xl text-tg-accent'>100K+</p>
				<p className='text-xl'>Transactions made within us</p>
			</div>
			<div className='flex flex-col justify-center items-center max-w-[160px]'>
				<p className='text-4xl text-tg-accent'>5K+</p>
				<p className='text-xl' text-tg-accent>
					User served
				</p>
			</div>
			<div className='flex flex-col justify-center items-center max-w-[160px]'>
				<p className='text-4xl text-tg-accent'>$45K+</p>
				<p className='text-xl'>Successfully transferred</p>
			</div>
		</div>
	)
}

export default Statistics
