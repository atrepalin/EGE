import { FC } from 'react'
import Card from '../Card/Card'
import GetWallet from '../GetWallet/GetWallet'
import PicturePerspective from '../PicturePerspective/PicturePerspective'
import Statistics from '../Statistics/Statistics'

const Content: FC = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex flex-col justify-center items-center md:flex-row lg:flex-row'>
				<div className='max-w-[400px] min-h-64'>
					<p className='text-tg-accent text-7xl font-bold'>Web3,</p>
					<p className='text-tg-accent text-7xl font-bold mt-2'>telegram.</p>
					<p className='text-slate-400 text-lg mt-5'>
						Your crypto, exchange, and NFTs all in one place - secure and
						simple.
					</p>
					<GetWallet className={'mt-5'} />
				</div>
				<PicturePerspective
					className='max-w-[450px]'
					src='/assets/screens.png'
				/>
			</div>
			<div className='grid grid-rows-2 gap-4 grid-cols-2 grid-flow-row '>
				<Card
					title='Telegram-native experience'
					description='Manage your finances in telegram by sending payments to your contacts using IOTA & etc. tokens'
					iconPath='/icons/UI/telegram.svg'
				/>
				<Card
					title='Telegram-native experience'
					description='Manage your finances in telegram by sending payments to your contacts using IOTA & etc. tokens'
					iconPath='/icons/UI/telegram.svg'
				/>
				<Card
					title='Telegram-native experience'
					description='Manage your finances in telegram by sending payments to your contacts using IOTA & etc. tokens'
					iconPath='/icons/UI/telegram.svg'
				/>
				<Card
					title='Telegram-native experience'
					description='Manage your finances in telegram by sending payments to your contacts using IOTA & etc. tokens'
					iconPath='/icons/UI/telegram.svg'
				/>
			</div>
			<Statistics />
		</div>
	)
}

export default Content
