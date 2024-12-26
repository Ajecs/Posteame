import Skeleton from 'react-loading-skeleton'

export const SkeletonCard = () => {
	return (
		<div className="px-8 pb-8 border shadow border-secondary/40">
			<h2>{<Skeleton />}</h2>
			<p className="mb-4">{<Skeleton count={3} />}</p>
			<div className="flex content-center">
				<Skeleton width={'70px'} />
			</div>
		</div>
	)
}
