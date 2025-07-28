// src/components/tracker/details/LotteTrackingDetails.tsx
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LotteTrackingDetails.module.scss';

const cx = classNames.bind(styles);

interface LotteDetails {
    deliveryStatus: string;
    receiverName: string;
    trackingEvents: Array<{ eventTime: string; description: string }>;
    // ... 롯데 택배 특유의 필드들
}

interface LotteTrackingDetailsProps {
    details: LotteDetails;
}

const LotteTrackingDetails: React.FC<LotteTrackingDetailsProps> = ({ details }) => {
    return (
        <div className={cx('lotte_tracking_details')}>
            <h3>롯데택배 배송 현황</h3>
            <p>배송 상태: <strong>{details.deliveryStatus}</strong></p>
            <p>수령인: {details.receiverName}</p>

            <h4>이벤트 기록</h4>
            <ul className={cx('events_list')}>
                {details.trackingEvents.map((event, index) => (
                    <li key={index} className={cx('event_item')}>
                        <span className={cx('event_time')}>{event.eventTime}</span> - <span className={cx('event_desc')}>{event.description}</span>
                    </li>
                ))}
            </ul>
            {/* 롯데 택배 고유의 추가 UI 요소 */}
        </div>
    );
};

export default LotteTrackingDetails;