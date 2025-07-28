// src/components/tracker/details/CjTrackingDetails.tsx (개선 예시)
import React from 'react';
import classNames from 'classnames/bind';
import styles from './CjTrackingDetails.module.scss'; // .module.scss로 변경했다면

// 필요한 아이콘 임포트 (예시: 상품 아이콘, 사람 아이콘, 전화 아이콘 등)
// import { ReactComponent as PackageIcon } from '@assets/icons/package.svg?react';
// import { ReactComponent as UserIcon } from '@assets/icons/user.svg?react';
// import { ReactComponent as PhoneIcon } from '@assets/icons/phone.svg?react';

const cx = classNames.bind(styles);

interface CjDetails {
    status: string;
    lastLocation: string;
    history: Array<{ time: string; location: string; desc: string }>;
    item?: string;
    sender?: string;
    receiver?: string;
    deliveryPerson?: string;
    deliveryPersonTel?: string;
    estimatedDeliveryDate?: string;
}

interface CjTrackingDetailsProps {
    details: CjDetails;
}

const CjTrackingDetails: React.FC<CjTrackingDetailsProps> = ({ details }) => {
    return (
        <div className={cx('cj_tracking_details')}>
            <h3 className={cx('company_title')}>CJ대한통운 배송 현황</h3>

            {/* 현재 배송 상태 섹션 */}
            <div className={cx('current_status_box')}>
                <p className={cx('status_label')}>현재 배송 상태</p>
                <strong className={cx('current_status')}>{details.status}</strong>
                <p className={cx('last_update_location')}>최종 위치: {details.lastLocation}</p>
                {details.estimatedDeliveryDate && (
                    <p className={cx('estimated_date')}>예상 배송일: {details.estimatedDeliveryDate}</p>
                )}
            </div>

            {/* 상세 정보 섹션 */}
            <div className={cx('info_grid')}>
                {details.item && (
                    <div className={cx('info_item')}>
                        {/* <PackageIcon className={cx('info_icon')} /> */}
                        <span className={cx('info_label')}>상품명</span>
                        <span className={cx('info_value')}>{details.item}</span>
                    </div>
                )}
                {details.sender && (
                    <div className={cx('info_item')}>
                        {/* <UserIcon className={cx('info_icon')} /> */}
                        <span className={cx('info_label')}>보내는 분</span>
                        <span className={cx('info_value')}>{details.sender}</span>
                    </div>
                )}
                {details.receiver && (
                    <div className={cx('info_item')}>
                        {/* <UserIcon className={cx('info_icon')} /> */}
                        <span className={cx('info_label')}>받는 분</span>
                        <span className={cx('info_value')}>{details.receiver}</span>
                    </div>
                )}
                {details.deliveryPerson && (
                    <div className={cx('info_item')}>
                        {/* <UserIcon className={cx('info_icon')} /> */}
                        <span className={cx('info_label')}>담당 기사</span>
                        <span className={cx('info_value')}>{details.deliveryPerson}</span>
                        {details.deliveryPersonTel && (
                            <a href={`tel:${details.deliveryPersonTel}`} className={cx('call_button')}>
                                {/* <PhoneIcon className={cx('icon_call')} /> */} 전화하기
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* 배송 이력 타임라인 */}
            <h4 className={cx('history_title')}>배송 이력</h4>
            <ul className={cx('history_list')}>
                {details.history.map((item, index) => (
                    <li key={index} className={cx('history_item')}>
                        <div className={cx('history_dot')}></div> {/* 타임라인 점 */}
                        <div className={cx('history_content')}>
                            <span className={cx('history_time')}>{item.time}</span>
                            <span className={cx('history_location')}>{item.location}</span>
                            <p className={cx('history_description')}>{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {/* 추가적인 CJ 택배 고유의 UI (예: FAQ, 고객센터 번호 등) */}
        </div>
    );
};

export default CjTrackingDetails;