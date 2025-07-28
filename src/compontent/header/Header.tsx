// src/components/common/Header.tsx 또는 src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'; // Header.scss 파일을 생성해야 합니다.

// SVG 아이콘은 @assets/common/img/svg 에 있다고 가정합니다.
import LogoFullIcon from '@assets/png/itrack_logo.png';
import PageIcon from "@assets/svg/ico_page.svg?react";
import HeartIcon from "@assets/svg/ico_heart.svg?react";

const cx = classNames.bind(styles);

const Header: React.FC = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('header_inner')}>
                <h1 className={cx('logo')}>
                    <Link to="/">
                        {/* 올바른 사용 방법: <img> 태그의 src 속성에 할당 */}
                        <img src={LogoFullIcon} alt="itrack Logo" className={cx('logo_img')} />
                    </Link>
                </h1>
                <nav className={cx('nav')}>
                    <ul className={cx('nav_list')}>
                        <li className={cx('nav_item')}>
                            <Link to="/page" className={cx('nav_link')}>
                                <PageIcon className={cx('nav_icon')} />
                                <span className={cx('nav_text')}>Page서비스</span>
                            </Link>
                        </li>
                        <li className={cx('nav_item', 'highlight')}>
                            <Link to="/support" className={cx('nav_link')}>
                                <HeartIcon className={cx('nav_icon')} />
                                <span className={cx('nav_text')}>후원하기</span>
                            </Link>
                        </li>
                        <li className={cx('nav_item')}>
                            <Link to="/login" className={cx('nav_link')}>
                                <span className={cx('nav_icon')}></span> {/* 로그인 아이콘 필요 시 추가 */}
                                <span className={cx('nav_text')}>로그인</span>
                            </Link>
                        </li>
                        <li className={cx('nav_item')}>
                            <Link to="/signup" className={cx('nav_link')}>
                                <span className={cx('nav_icon')}></span> {/* 회원가입 아이콘 필요 시 추가 */}
                                <span className={cx('nav_text')}>회원가입</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;