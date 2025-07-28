// src/view/Home.tsx
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@src/view/Home.module.scss'; // Home.scss 파일을 생성해야 합니다.

// SVG 아이콘은 @assets/common/img/svg 에 있다고 가정합니다.
import DeliveryTruckIcon from "@assets/svg/ico_delivery_truck.svg?react";
import SearchInputSection from "@src/compontent/tracker/SearchInputSection.tsx";
import SearchResultSection from "@src/compontent/tracker/SearchResultSection.tsx";
import {TrackingResult} from "@src/types/tracking";

// 분리할 컴포넌트들을 import 합니다.

const cx = classNames.bind(styles);

// 가상의 API 응답 타입
const Home: React.FC = () => {
    const [carrier, setCarrier] = useState<string>(''); // 선택된 택배사
    const [trackingNum, setTrackingNum] = useState<string>(''); // 입력된 운송장 번호
    const [searchResult, setSearchResult] = useState<TrackingResult | null>(null); // 검색 결과 데이터
    const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 상태

    // 배송 조회 핸들러
    const handleSearch = async () => {
        if (!carrier || !trackingNum) {
            setSearchResult({
                status: 'fail',
                carrierId: '',
                trackingNumber: '',
                message: '택배사를 선택하고 운송장 번호를 입력해주세요.',
            });
            return;
        }

        setIsLoading(true);
        setSearchResult(null); // 새로운 검색 전에 이전 결과 초기화

        try {
            // TODO: 실제 배송 조회 API 호출 로직 구현
            // 예시: fetch('/api/track', { method: 'POST', body: JSON.stringify({ carrier, trackingNum }) });
            // 여기서는 임시 Mock 데이터를 사용합니다.
            const mockApiCall = new Promise<TrackingResult>((resolve) => {
                setTimeout(() => {
                    if (carrier === 'cj' && trackingNum === '123456789') {
                        resolve({
                            status: 'success',
                            carrierId: 'cj',
                            trackingNumber: '123456789',
                            details: {
                                // CJ 택배사의 상세 정보 구조
                                status: '배송 완료',
                                lastLocation: '서울 강남',
                                history: [
                                    { time: '10:00', location: '출발', desc: '물품 접수' },
                                    { time: '12:00', location: '이동중', desc: '간선 상차' },
                                    // ...
                                ],
                            },
                        });
                    } else if (carrier === 'lotte' && trackingNum === '987654321') {
                        resolve({
                            status: 'success',
                            carrierId: 'lotte',
                            trackingNumber: '987654321',
                            details: {
                                // 롯데 택배사의 상세 정보 구조
                                deliveryStatus: 'Completed',
                                receiverName: '홍길동',
                                trackingEvents: [
                                    { eventTime: '2025-07-27 10:00', description: 'Item received' },
                                    { eventTime: '2025-07-27 15:00', description: 'Out for delivery' },
                                    // ...
                                ],
                            },
                        });
                    } else {
                        resolve({
                            status: 'fail',
                            carrierId: carrier,
                            trackingNumber: trackingNum,
                            message: '배송 정보를 찾을 수 없습니다.',
                        });
                    }
                }, 1500); // 1.5초 지연 모방
            });

            const result = await mockApiCall;
            setSearchResult(result);

        } catch (error) {
            console.error('배송 조회 오류:', error);
            setSearchResult({
                status: 'fail',
                carrierId: carrier,
                trackingNumber: trackingNum,
                message: '배송 조회 중 오류가 발생했습니다.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className={cx('home_page')}>
            <div className={cx('title_group')}>
                <DeliveryTruckIcon
                    className={cx('title_icon')}
                    width="50" // <-- width prop 직접 전달
                    height="50" // <-- height prop 직접 전달
                />
                <h2 className={cx('title')}>통합 택배 배송조회 시스템</h2>
                <p className={cx('description')}>여러 택배사의 배송 정보를 한 번에 조회할 수 있는 통합 배송조회 서비스</p>
            </div>

            {/* 검색 입력 컴포넌트 */}
            <SearchInputSection
                onCarrierChange={setCarrier}
                onTrackingNumChange={setTrackingNum}
                onSearch={handleSearch}
                currentCarrier={carrier}
                currentTrackingNum={trackingNum}
                isLoading={isLoading}
            />

            {/* Google 광고 영역 (임시 마크업 - 필요시 별도 컴포넌트로 분리) */}
            <div className={cx('ad_area')}>
                <p className={cx('ad_label')}>Google 광고</p>
                <div className={cx('ad_content')}>
                    <div className={cx('ad_text_box')}>
                        <strong>홈페이지 만들고 싶은데 시작부터 막막해요</strong>
                        <button className={cx('ad_button')}>일단 무료 버전으로 시작해보세요</button>
                    </div>
                    <img src="https://core-cdn-fe.toss.im/image/optimize/?src=https://static.toss.im/ipd-tcs/toss_core/live/901bac52-7941-42ef-84f0-22debcd96317/semo-110-inner-3.jpg?&w=3840&q=75" alt="광고 이미지" className={cx('ad_image')} />
                    <div className={cx('ad_info_box')}>
                        <p>80종의 홈페이지 템플릿 무료</p>
                        <p>회원가입만 하면 매달 무료 웹사이트 뉴스레터도 받고, 14일 간 기능제한없이 체험할 수 있어요</p>
                        <span className={cx('ad_brand')}>아임웹</span>
                        <a href="#" className={cx('ad_link')}>자세히 알아보기 &gt;</a>
                    </div>
                </div>
            </div>

            {/* 검색 결과 컴포넌트 */}
            {isLoading && <div className={cx('loading_message')}>배송 정보를 조회 중입니다...</div>}
            {searchResult && !isLoading && (
                <SearchResultSection result={searchResult} />
            )}
        </main>
    );
};

export default Home;