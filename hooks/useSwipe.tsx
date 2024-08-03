import { useEffect, useRef } from 'react';

const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const minSwipeDistance = 50;

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.changedTouches[0].screenX;
            touchEndX.current = touchStartX.current;
        };

        const handleTouchMove = (e: TouchEvent) => {
            touchEndX.current = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = () => {
            const distanceX = touchEndX.current - touchStartX.current;
            if (Math.abs(distanceX) > minSwipeDistance) {
                if (distanceX > 0) {
                    onSwipeRight();
                } else {
                    onSwipeLeft();
                }
            }
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onSwipeLeft, onSwipeRight]);
};

export default useSwipe;