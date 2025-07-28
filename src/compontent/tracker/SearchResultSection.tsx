// src/components/tracker/SearchResultSection.tsx

import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchResultSection.module.scss'; // .module.scss로 변경했다면

import { TrackingResult, CjExpressDetails, LotteExpressDetails } from '@src/types/tracking'; // 필요한 상세 타입들도 임포트

// 각 택배사별 상세 결과 컴포넌트를 미리 정의하거나 동적으로 임포트할 수 있습니다.
import CjTrackingDetails from './details/CjTrackingDetails';
import LotteTrackingDetails from './details/LotteTrackingDetails';
// import PostTrackingDetails from './details/PostTrackingDetails';

const cx = classNames.bind(styles);


interface SearchResultSectionProps {
    result: TrackingResult | null;
}

const SearchResultSection: React.FC<SearchResultSectionProps> = ({ result }) => {
    if (!result) {
        return null;
    }

    if (result.status === 'fail') {
        return (
            <div className={cx('search_result_message', 'error')}>
                {result.message || '배송 정보를 찾을 수 없습니다.'}
            </div>
        );
    }

    // result.details가 있을 때만 렌더링하도록 조건 추가 (Optional Chaining으로도 가능)
    if (!result.details) {
        return (
            <div className={cx('search_result_message', 'info')}>
                배송 상세 정보가 없습니다.
            </div>
        );
    }

    const renderTrackingDetails = () => {
        switch (result.carrierId) {
            case 'cj':
                // result.details가 CjExpressDetails 타입임을 TypeScript에게 알림
                return <CjTrackingDetails details={result.details as CjExpressDetails} />;
            case 'lotte':
                // result.details가 LotteExpressDetails 타입임을 TypeScript에게 알림
                return <LotteTrackingDetails details={result.details as LotteExpressDetails} />;
            // case 'post':
            //   // return <PostTrackingDetails details={result.details as PostOfficeDetails} />;
            default:
                return (
                    <div className={cx('default_success_message')}>
                        배송 조회에 성공했습니다. ({result.carrierId} - {result.trackingNumber})
                        {/* `details` 속성 존재 여부 확인 후 JSON.stringify 적용 */}
                        {result.details && <pre>{JSON.stringify(result.details, null, 2)}</pre>}
                    </div>
                );
        }
    };

    return (
        <div className={cx('search_result_section')}>
            {renderTrackingDetails()}
        </div>
    );
};

export default SearchResultSection;