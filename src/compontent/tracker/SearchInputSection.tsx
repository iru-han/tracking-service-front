// src/components/tracker/SearchInputSection.tsx
import React from 'react';
import classNames from 'classnames/bind';
// 1. SCSS 파일명 변경에 따라 임포트 경로 수정
import styles from './SearchInputSection.module.scss';

// 4. SearchIcon 경로 확인 (아래는 일반적인 프로젝트 구조 예시, 실제 경로에 맞게 수정)
// 만약 @assets/svg 폴더 바로 아래 있다면:
// import SearchIcon from "@assets/svg/ico_search.svg?react";
// 만약 @assets/common/img/svg 폴더 아래 있다면:
import SearchIcon from "@assets/svg/ico_search.svg?react"; // 이 경로가 더 흔합니다.

const cx = classNames.bind(styles);

interface SearchInputSectionProps {
    onCarrierChange: (carrier: string) => void;
    onTrackingNumChange: (num: string) => void;
    onSearch: () => void;
    currentCarrier: string;
    currentTrackingNum: string;
    isLoading: boolean;
}

const SearchInputSection: React.FC<SearchInputSectionProps> = ({
                                                                   onCarrierChange,
                                                                   onTrackingNumChange,
                                                                   onSearch,
                                                                   currentCarrier,
                                                                   currentTrackingNum,
                                                                   isLoading,
                                                               }) => {
    return (
        <div className={cx('search_form_container')}>
            <div className={cx('search_tabs')}>
                <div className={cx('tab_item', 'active')}>
                    <span className={cx('tab_icon')}></span> {/* 아이콘 필요 시 추가 */}
                    <span>택배사 선택</span>
                </div>
                <div className={cx('tab_item')}>
                    <span className={cx('tab_icon')}></span> {/* 아이콘 필요 시 추가 */}
                    <span>운송장 번호</span>
                </div>
            </div>

            <div className={cx('input_group')}>
                <select
                    className={cx('carrier_select')}
                    value={currentCarrier}
                    onChange={(e) => onCarrierChange(e.target.value)}
                    disabled={isLoading}
                >
                    <option value="">택배사를 선택</option>
                    <option value="cj">CJ대한통운</option>
                    <option value="lotte">롯데택배</option>
                    <option value="post">우체국택배</option>
                    {/* 다른 택배사 옵션 추가 */}
                </select>
                <input
                    type="text"
                    className={cx('tracking_input')}
                    placeholder="숫자만 입력"
                    value={currentTrackingNum}
                    onChange={(e) => onTrackingNumChange(e.target.value)}
                    disabled={isLoading}
                />
                <button
                    className={cx('search_button')}
                    onClick={onSearch}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        '조회 중...'
                    ) : (
                        <>
                            <SearchIcon className={cx('search_icon')} /> {/* SearchIcon 사용 */}
                            조회하기
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default SearchInputSection;