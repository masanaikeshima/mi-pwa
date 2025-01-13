"use client";


import {useEffect, useState} from "react";
import useAsyncEffect from "use-async-effect";
import axios from "axios";
import { useRouter } from 'next/router'

import {StarIcon} from "lucide-react";
import clsx from "clsx";
import {useSearchParams} from "next/navigation";

import { Suspense } from 'react'

const Inner = () =>
{

	const searchParams = useSearchParams()

	const productId  = searchParams.get('id');


	const [data, setData] = useState(null);

	useAsyncEffect(async () =>
	{
		const apiResponse = await axios.get(
			"https://dummyjson.com/products",
		);

		//	console.log('apiResponse', apiResponse);

		if(200 === apiResponse.status)
		{
			// @ts-ignore
			const found = apiResponse.data.products.filter(item => item.id == productId);

			if(1 === found.length)
			{
				setData(found[0]);
			} else {
				// @ts-ignore
				setData(false);
			}
		}

	}, [productId]);

	return (

		<div>
			Product Id {productId}

			<br/><br/>

			JSON:

			<br/>
			{JSON.stringify(data)}
		</div>

	);
}

export default function Product()
{
	return (
		<Suspense fallback={<div>SUSPENSE LOADING!</div>}>
			<Inner/>
		</Suspense>
	);
}
