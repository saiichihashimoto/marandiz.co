import React, { useEffect, useRef, useState } from 'react';

// https://addyosmani.com/blog/lazy-loading/
const supportsLazyLoading = 'loading' in HTMLImageElement.prototype;

const supportsIntersectionObserver = 'IntersectionObserver' in window;

function LazyImage({ src, srcSet, alt, ...props }) {
	const ref = useRef();
	const [showImage, setShowImage] = useState(
		supportsLazyLoading || !supportsIntersectionObserver
	);

	useEffect(() => {
		if (supportsLazyLoading || !supportsIntersectionObserver) {
			return null;
		}

		const { current } = ref;

		// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#using_intersection_observer
		const lazyImageObserver = new IntersectionObserver(([{ isIntersecting, target }]) => {
			if (!isIntersecting || target !== current) {
				return;
			}
			lazyImageObserver.unobserve(target);
			setShowImage(true);
		});

		lazyImageObserver.observe(current);

		return () => lazyImageObserver.unobserve(current);
	}, []);

	return (
		<img
			ref={ref}
			src={showImage ? src : undefined}
			srcSet={showImage ? srcSet : undefined}
			loading={supportsLazyLoading ? 'lazy' : undefined}
			alt={alt}
			{...props}
		/>
	);
}

export default LazyImage;
