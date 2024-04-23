import { FC } from 'react'
import { WALLET } from '../../../config'

const GetWallet: FC = () => {
	return (
		<button className='btn btn-outline' onClick={() => window.open(WALLET)}>
			Get Wallet
		</button>
	)
}

export default GetWallet
