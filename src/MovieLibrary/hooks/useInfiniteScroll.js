import { useEffect, useCallback } from 'react';

const useInfiniteScroll = ( { isLoading, pagerDispatch, bottomBoundaryRef }) => {
    const scrollObserver = useCallback(
        node => {
            new IntersectionObserver(entries => {
                entries.forEach(en => {
                    if (en.intersectionRatio > 0) {
                        pagerDispatch();
                    }
                });
            }).observe(node);
        },
        [pagerDispatch]
    );
    useEffect(() => {
        if (bottomBoundaryRef.current && !isLoading) {
            scrollObserver(bottomBoundaryRef.current);
        }
    });
};

export default useInfiniteScroll;