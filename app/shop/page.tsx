"use client";

import {Suspense, useEffect, useState} from "react";
import useAsyncEffect from "use-async-effect";
import axios from "axios";
import Link from "next/link";
import {use} from 'react';

const Inner = () => {

	//const data = use(axios.get(

const [data, setData] = useState([]);

	useAsyncEffect(async () =>
	{
		const apiResponse = await axios.get(
			"https://dummyjson.com/products",
		);

	//	console.log('apiResponse', apiResponse);

		if(200 === apiResponse.status)
		{
			setData(apiResponse.data.products);
		}

	}, []);

	return (
		<div>
			Shop page

			<h2>items</h2>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map(product =>
          {

	          return (
		          <div
			          /** @ts-ignore */
			          key={product.id}
			          className="group relative"
		          >
              <img
	              /** @ts-ignore */
	              alt=""
	              /** @ts-ignore */
	              src={product.images[0]}
	              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
	              {/** @ts-ignore */}
	                  <Link
		                  // @ts-ignore
		                  href={`/shop/product/${product.id}`}
		                //  prefetch={false}
		                 // shallow={true}
	                  >
	                    {/** @ts-ignore */}
		                  <span>NEXT LINK: {product.title}</span>
	                  </Link>
                  </h3>


                  <h3 className="text-sm text-red-500">

	                  {/** @ts-ignore */}
	                  <a href={`/shop/product#${product.id}`}>
	                    {/**
                      <span
	                      aria-hidden="true"
	                      className="absolute inset-0"
                      />
	                     */}
		                  {/** @ts-ignore */}
		                  Manual Link {product.title}
                    </a>
                  </h3>
	                {/** @ts-ignore */}
	                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
	              {/** @ts-ignore */}
	              <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
	          )
          })}
        </div>
      </div>
    </div>
		</div>
	);
}


export default function Shop()
{
	return (
		<Suspense fallback={<div>SUSPENSE LOADING!</div>}>
			<Inner/>
		</Suspense>

	);
}

