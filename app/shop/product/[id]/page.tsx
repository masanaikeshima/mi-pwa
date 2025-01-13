import {Inner} from "./Inner";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {


	const productId = (await params).id;


	return (
		<Inner productId={productId}/>
	);
}
