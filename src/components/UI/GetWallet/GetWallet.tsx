import { FC } from 'react'
import { WALLET } from '../../../config'

interface GetWalletProps {
	className?: string
}

const GetWallet: FC<GetWalletProps> = ({ className }) => {
	return (
		<button
			className={`btn btn-outline ${className}`}
			onClick={() => window.open(WALLET)}
		>
			Get Wallet
		</button>
	)
}

export default GetWallet
