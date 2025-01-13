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

	return (

		<div>
			Product Id {productId}
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
