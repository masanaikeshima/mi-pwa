'use client'

import { useSearchParams } from 'next/navigation'

import { Suspense } from 'react'

 const Inner = () =>
{

	const searchParams = useSearchParams()

	const search = searchParams.get('search')

	// URL -> `/dashboard?search=my-project`
	// `search` -> 'my-project'
	return <>Search: {search}</>
}
export default function Page() {
	return (

		<Suspense fallback={<div>SUSPENSE LOADING!</div>}>
			{
				<Inner/>
			}
		</Suspense>

	);
}
