import { FC } from 'react'

interface CardProps {
	title: string
	description: string
	iconPath: string
}

const Card: FC<CardProps> = ({ title, description, iconPath }) => {
	return (
		<div className='max-w-[400px] p-5 bg-[#18222d] rounded-lg	'>
			<img className='max-w-16' src={iconPath} alt={title} />
			<p className='text-3xl font-medium'>{title}</p>
			<p className='text-xl mt-3 '>{description}</p>
		</div>
	)
}

export default Card
