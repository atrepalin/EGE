import { FC } from 'react'
import { LINK_DISCORD, LINK_GITHUB, LINK_MEDIUM } from '../../../config'
import Icon from '../Icon/Icon'
import Link from '../Link/Link'

interface LinksProps {
	className?: string
}

const LINKS = [
	{
		href: LINK_MEDIUM,
		title: 'Read our blog',
		iconPath: '/icons/UI/link-go.svg',
	},
	{
		href: LINK_GITHUB,
		title: 'Visit our Github',
		iconPath: '/icons/UI/link-go.svg',
	},
	{
		href: LINK_DISCORD,
		title: 'Join our community',
		iconPath: '/icons/UI/link-go.svg',
	},
]

const Links: FC<LinksProps> = ({ className }) => {
	return (
		<div className={`${className}`}>
			{LINKS.map((link, index) => {
				return (
					<Link
						key={index}
						href={link.href}
						className='flex flex-row mx-5 justify-center items-center'
					>
						<p className='mr-1'>{link.title}</p>
						<Icon src={link.iconPath} />
					</Link>
				)
			})}
		</div>
	)
}

export default Links
