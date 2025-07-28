// src/components/common/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@src/compontent/footer/Footer.module.scss'; // Footer.scss 파일을 생성해야 합니다.

const cx = classNames.bind(styles);

const Footer: React.FC = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer_inner')}>
                <p className={cx('copyright')}>© 2025 URL.KR All rights reserved.</p>
                <div className={cx('footer_links')}>
                    <ul className={cx('link_list')}>
                        <li className={cx('link_item')}><Link to="/site-info" className={cx('link')}>사이트안내</Link></li>
                        <li className={cx('link_item')}><Link to="/terms" className={cx('link')}>이용안내</Link></li>
                        <li className={cx('link_item')}><Link to="/service-center" className={cx('link')}>서비스약관</Link></li>
                        <li className={cx('link_item')}><Link to="/privacy" className={cx('link')}>개인정보정책</Link></li>
                        <li className={cx('link_item')}><Link to="/support" className={cx('link')}>후원안내</Link></li>
                        <li className={cx('link_item')}><span className={cx('update_date')}>업데이트: 2036-07-27</span></li>
                    </ul>
                    <div className={cx('company_info')}>
                        <p>회사명: 아이트래커 | 사업자번호: 123-45-67890 | 통신판매업신고번호: 2010-주소지-1234</p>
                        <p>주소: 경기도 테스트시  | 이메일: <a href="mailto:itracker@test.test">itracker@test.test</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;